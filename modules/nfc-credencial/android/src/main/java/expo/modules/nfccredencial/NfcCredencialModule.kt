package expo.modules.nfccredencial

import android.content.Context
import android.content.pm.PackageManager
import android.nfc.NfcAdapter
import android.util.Log
import androidx.core.os.bundleOf
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.lang.ref.WeakReference

class NfcCredencialModule : Module() {
  companion object {
    //el servicio APDU no tiene acceso al modulo, asi que avisa por aqui
    private var instancia: WeakReference<NfcCredencialModule>? = null

    fun avisarEscaner(id: Int) {
      if (BuildConfig.DEBUG) Log.d(TAG, "Evento onEscanerDetectado: id=$id, modulo disponible=${instancia?.get() != null}")
      instancia?.get()?.sendEvent("onEscanerDetectado", bundleOf("id" to id))
    }
  }

  private val context: Context
    get() = requireNotNull(appContext.reactContext)

  private val prefs
    get() = context.getSharedPreferences(PREFS, Context.MODE_PRIVATE)

  override fun definition() = ModuleDefinition {
    Name("NfcCredencial")

    Events("onEscanerDetectado")

    OnCreate {
      instancia = WeakReference(this@NfcCredencialModule)
      if (BuildConfig.DEBUG) Log.d(TAG, "Modulo NFC creado")
    }

    //"sin-nfc", "sin-hce", "apagado" o "listo"
    Function("estado") {
      val adapter = NfcAdapter.getDefaultAdapter(context)
      when {
        adapter == null -> "sin-nfc"
        !context.packageManager.hasSystemFeature(PackageManager.FEATURE_NFC_HOST_CARD_EMULATION) -> "sin-hce"
        !adapter.isEnabled -> "apagado"
        else -> "listo"
      }
    }

    //guarda el id que el servicio mandara al escaner
    Function("activar") { id: Int ->
      prefs.edit().putInt(KEY_ID, id).apply()
      if (BuildConfig.DEBUG) Log.d(TAG, "Credencial activada: id=$id")
    }

    //al cerrar sesion: el servicio deja de mandar id
    Function("desactivar") {
      prefs.edit().remove(KEY_ID).apply()
      if (BuildConfig.DEBUG) Log.d(TAG, "Credencial desactivada: ID eliminado")
    }
  }
}

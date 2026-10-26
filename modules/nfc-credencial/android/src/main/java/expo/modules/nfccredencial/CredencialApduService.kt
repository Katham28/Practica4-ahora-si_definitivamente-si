package expo.modules.nfccredencial

import android.content.Context
import android.nfc.cardemulation.HostApduService
import android.os.Build
import android.os.Bundle
import android.os.VibrationEffect
import android.os.Vibrator
import android.util.Log

const val TAG = "APDU"
const val PREFS = "CREDENCIAL_ID"
const val KEY_ID = "ID"

//SELECT del Arduino: CLA INS P1 P2 Lc + AID F0 12 34 56 78
private val SELECT_AID = byteArrayOf(
    0x00, 0xA4.toByte(), 0x04, 0x00, 0x05,
    0xF0.toByte(), 0x12, 0x34, 0x56, 0x78
)
private val OK = byteArrayOf(0x90.toByte(), 0x00)
//"file not found": no hay sesion iniciada, no hay id que mandar
private val SIN_ID = byteArrayOf(0x6A, 0x82.toByte())
//"INS not supported": comando que no es nuestro SELECT
private val NO_SOPORTADO = byteArrayOf(0x6D, 0x00)

//el Arduino (ESP32, little-endian) hace memcpy(&id, bytes, 4),
//asi que el byte menos significativo va primero
fun idToBytesLE(id: Int): ByteArray = byteArrayOf(
    id.toByte(),
    (id shr 8).toByte(),
    (id shr 16).toByte(),
    (id shr 24).toByte()
)

//el servicio corre en el background de Android, Android lo llama cuando un lector NFC
//manda un SELECT con nuestro AID (ver nfc_credencial_apduservice.xml)
class CredencialApduService : HostApduService() {

    override fun processCommandApdu(commandApdu: ByteArray?, extras: Bundle?): ByteArray {
        if (commandApdu == null) {
            return byteArrayOf(0x6F, 0x00)
        }
        Log.d(TAG, "APDU IN: ${commandApdu.joinToString(" ") { "%02X".format(it) }}")

        if (commandApdu.size < SELECT_AID.size ||
            !commandApdu.copyOfRange(0, SELECT_AID.size).contentEquals(SELECT_AID)) {
            return NO_SOPORTADO
        }

        val prefs = getSharedPreferences(PREFS, Context.MODE_PRIVATE)
        if (!prefs.contains(KEY_ID)) {
            Log.d(TAG, "sin sesion, no se manda id")
            return SIN_ID
        }

        val id = prefs.getInt(KEY_ID, 0)
        Log.d(TAG, "mandando ID: $id")
        vibrar()
        NfcCredencialModule.avisarEscaner(id)
        return idToBytesLE(id) + OK
    }

    override fun onDeactivated(reason: Int) {
        Log.d(TAG, "onDeactivated reason=$reason")
    }

    @Suppress("DEPRECATION")
    private fun vibrar() {
        val vibrator = getSystemService(Context.VIBRATOR_SERVICE) as? Vibrator ?: return
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            vibrator.vibrate(VibrationEffect.createOneShot(150, VibrationEffect.DEFAULT_AMPLITUDE))
        } else {
            vibrator.vibrate(150)
        }
    }
}

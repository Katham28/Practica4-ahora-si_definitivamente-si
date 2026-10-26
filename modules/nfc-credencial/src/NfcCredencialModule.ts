import { NativeModule, requireOptionalNativeModule } from 'expo';

export type EstadoNfc = "sin-nfc" | "sin-hce" | "apagado" | "listo";

type NfcCredencialEvents = {
	//el escaner leyo la credencial (el servicio ya le mando el id)
	onEscanerDetectado(event: { id: number }): void;
};

declare class NfcCredencialModule extends NativeModule<NfcCredencialEvents> {
	estado(): EstadoNfc;
	activar(id: number): void;
	desactivar(): void;
}

//null en iOS, web o Expo Go: ahi no existe el modulo nativo
export default requireOptionalNativeModule<NfcCredencialModule>('NfcCredencial');

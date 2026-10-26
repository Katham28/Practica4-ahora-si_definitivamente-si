import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, Text, View } from "react-native";
import NfcCredencial, { type EstadoNfc } from "../../modules/nfc-credencial";
import type { Usuario } from "../api";
import { styles } from "../styles";

//que mostrar segun el estado del NFC del celular
const avisosNfc: Record<EstadoNfc | "no-disponible", string> = {
	"listo": "Acerca tu celular al escáner",
	"apagado": "Activa el NFC en los ajustes del celular",
	"sin-hce": "Este celular no puede emular credenciales NFC",
	"sin-nfc": "Este celular no tiene NFC",
	"no-disponible": "NFC solo funciona en Android con una development build",
};

export default function Credencial() {
	const router = useRouter();
	const { usuario } = useLocalSearchParams<{ usuario: string }>();
	const datos: Usuario | null = usuario ? JSON.parse(usuario) : null;
	const id = datos?.id;

	const [estado] = useState<EstadoNfc | "no-disponible">(() => NfcCredencial?.estado() ?? "no-disponible");
	const [detectado, setDetectado] = useState(false);

	//mientras esta pantalla este abierta, el celular manda el id del usuario al escaner
	useEffect(() => {
		if (__DEV__) console.log('[NFC] Estado:', estado);
		if (!NfcCredencial || id === undefined) {
			if (__DEV__) console.warn('[NFC] No se activa: falta el módulo nativo o el ID');
			return;
		}
		NfcCredencial.activar(Number(id));
		if (__DEV__) console.log('[NFC] Credencial activada. ID:', id);

		let timer: ReturnType<typeof setTimeout> | undefined;
		const sub = NfcCredencial.addListener("onEscanerDetectado", (event) => {
			if (__DEV__) console.log('[NFC] Evento del servicio: SELECT procesado. ID:', event.id);
			setDetectado(true);
			clearTimeout(timer);
			timer = setTimeout(() => setDetectado(false), 2500);
		});

		return () => {
			sub.remove();
			clearTimeout(timer);
			NfcCredencial?.desactivar();
			if (__DEV__) console.log('[NFC] Credencial desactivada y escucha eliminada');
		};
	}, [id, estado]);

	if (!datos) {
		return (
			<View style={styles.container}>
				<Pressable style={styles.button2} onPress={() => router.replace('/')}>
					<Text style={styles.buttonText}>Ir al inicio</Text>
				</Pressable>
			</View>
		);
	}

	return (
		<View style={styles.container}>

			<Image source={require("../../assets/logo2.png")} style={styles.flowerttile} />
			<Text style={styles.title}>CyberCorp</Text>

			<View style={[styles.card, detectado && styles.cardDetectada]}>
				<Image source={datos.pfp_url} style={styles.foto} contentFit="cover" />
				<Text style={styles.mintitle}>{datos.firstname} {datos.lastname}</Text>
				<Text style={styles.bigNumber}>No. {datos.id}</Text>
			</View>

			<Text style={styles.smallText}>
				{detectado ? "✓ Escáner detectado, credencial enviada" : avisosNfc[estado]}
			</Text>

			<Pressable
				style={styles.button2}
				onPress={() => router.back()}>
				<Text style={styles.buttonText}>Cerrar sesión</Text>
			</Pressable>
		</View>
	);
}

import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, Text, View } from "react-native";
import type { Usuario } from "../api";
import { styles } from "../styles";

export default function Credencial() {
	const router = useRouter();
	const { usuario } = useLocalSearchParams<{ usuario: string }>();
	const datos: Usuario | null = usuario ? JSON.parse(usuario) : null;

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

			<View style={styles.card}>
				<Text style={styles.mintitle}>{datos.username}  </Text>
				<Image source={datos.pfp_url} style={styles.foto} contentFit="cover" />

				<Text style={styles.mintitle}> {datos.id}</Text>
				<Text style={styles.mintitle}> {datos.firstname} {datos.lastname}</Text>
			</View>

			<Pressable
				style={styles.button2}
				onPress={() => router.back()}>
				<Text style={styles.buttonText}>Cerrar sesión</Text>
			</Pressable>
		</View>
	);
}

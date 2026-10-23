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

			<Text style={styles.title}>Corporativo distópico</Text>

			<View style={styles.card}>
				<Image source={datos.pfp_url} style={styles.foto} contentFit="cover" />
				<Text style={styles.subtitle}>{datos.username}  </Text>
				<Text style={styles.smallText}>ID: {datos.id}</Text>
				<Text style={styles.smallText}>Fullname: {datos.firstname} {datos.lastname}</Text>
				<Text style={styles.smallText}>Email: {datos.email}</Text>
				<Text style={styles.smallText}>XP: {datos.xp}</Text>
				<Text style={styles.smallText}>Créditos: {datos.credits}</Text>
			</View>

			<Pressable
				style={styles.button2}
				onPress={() => router.back()}>
				<Text style={styles.buttonText}>Cerrar sesión</Text>
			</Pressable>
		</View>
	);
}

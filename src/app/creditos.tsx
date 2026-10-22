import { useRouter } from 'expo-router';
import { Pressable, Text, View } from "react-native";
import { styles } from "../styles";

export default function Creditos() {
	const router = useRouter();
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Créditos</Text>

			<View style={styles.card}>
				<Text style={styles.subtitle}>Equipo KAI</Text>
				<Text style={styles.smallText}>ALONDRA HERNANDEZ MARTINEZ</Text>
				<Text style={styles.smallText}>ISAI CANDELARIO SANDOVAL</Text>
				<Text style={styles.smallText}>KATIA MARCELA CARPIO DOMINGUEZ</Text>
			</View>
¿

			<Pressable
				style={styles.button2}
				onPress={() => router.push('/')}>
				<Text style={styles.buttonText}>Volver al Inicio</Text>
			</Pressable>




		</View>
	);
}

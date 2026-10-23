import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from "react-native";
import { styles } from "../styles";

export default function Creditos() {
	const router = useRouter();
	return (

		
		<View style={styles.container}>

			<Image source={require("../../assets/logo2.png")} style={styles.flowerttile} />
			<Text style={styles.title}>CyberCorp</Text>
			<View style={styles.card}>
				<Text style={styles.mintitle}>Equipo KAI</Text>
				<Text style={styles.smallText}>ALONDRA HERNANDEZ MARTINEZ</Text>
				<Text style={styles.smallText}>ISAI CANDELARIO SANDOVAL</Text>
				<Text style={styles.smallText}>KATIA MARCELA CARPIO DOMINGUEZ</Text>
			</View>

				<View style={styles.card}>
				<Text style={styles.mintitle}>Tecnologías ocupadas</Text>
				<Text style={styles.smallText}>x</Text>
				<Text style={styles.smallText}>x</Text>
				<Text style={styles.smallText}>x</Text>
			</View>


			<Pressable
				style={styles.button2}
				onPress={() => router.push('/')}>
				<Text style={styles.buttonText}>Volver al Inicio</Text>
			</Pressable>




		</View>
	);
}

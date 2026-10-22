import { useRouter } from 'expo-router';
import { Pressable, Text, View } from "react-native";
import { styles } from "../styles";

export default function Index() {
	const router = useRouter();
	return (
		<View style={styles.container}>
	
			<Text style={styles.title}>Corporativo distópico</Text>









			<Pressable
				style={styles.button1}
				onPress={() => router.push('/credencial')}>
				<Text style={styles.buttonText}>Iniciar Sesión</Text>
			</Pressable>


			<Pressable
				style={styles.button2}
				onPress={() => router.push('/creditos')}>
				<Text style={styles.buttonText}>Créditos</Text>
			</Pressable>

		</View>
	);
}

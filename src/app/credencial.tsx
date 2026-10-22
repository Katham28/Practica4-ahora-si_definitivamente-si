import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, View } from "react-native";
import { styles } from "../styles";

//datos de cada credencial, agrega o cambia los campos que necesites
const credenciales = [
	{ titulo: "Credencial 1", nombre: "Equipo KAI", puesto: "Empleado nivel 1" },
	{ titulo: "Credencial 2", nombre: "Equipo KAI", puesto: "Empleado nivel 2" },
];

export default function Credencial() {
	const router = useRouter();
	const [actual, setActual] = useState(0);
	const credencial = credenciales[actual];

	return (
		<View style={styles.container}>

			<Text style={styles.title}>Corporativo distópico</Text>

			<View style={styles.card}>
				<Text style={styles.subtitle}>{credencial.titulo}</Text>
				<Text style={styles.smallText}>{credencial.nombre}</Text>
				<Text style={styles.smallText}>{credencial.puesto}</Text>
			</View>

			<View style={styles.container}></View>

			<View style={styles.row}>
				{credenciales.map((c, i) => (
					<Pressable
						key={c.titulo}
						style={i === actual ? styles.button1 : styles.buttonOutline}
						onPress={() => setActual(i)}>
						<Text style={i === actual ? styles.buttonText : styles.buttonOutlineText}>{c.titulo}</Text>
					</Pressable>
				))}
			</View>

			<Pressable
				style={styles.button2}
				onPress={() => router.back()}>
				<Text style={styles.buttonText}>Regresar</Text>
			</Pressable>
		</View>
	);
}

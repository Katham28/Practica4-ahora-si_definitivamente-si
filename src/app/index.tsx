import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Image, Pressable, Text, TextInput, View } from "react-native";
import { login } from "../api";
import { styles } from "../styles";

//mensajes del servidor traducidos para mostrarlos en pantalla
const errores: Record<string, string> = {
	"Data missing": "Llena usuario y contraseña",
	"Failed to login": "Usuario o contraseña incorrectos",
};

export default function Index() {
	const router = useRouter();
	const [usuario, setUsuario] = useState("");
	const [contrasena, setContrasena] = useState("");
	const [error, setError] = useState("");
	const [cargando, setCargando] = useState(false);

	async function iniciarSesion() {
		setError("");
		setCargando(true);
		try {
			const datos = await login(usuario, contrasena);
			router.push({ pathname: '/credencial', params: { usuario: JSON.stringify(datos) } });
		} catch (e) {
			const mensaje = e instanceof Error ? e.message : "";
			setError(errores[mensaje] ?? "No se pudo conectar con el servidor");
		} finally {
			setCargando(false);
		}
	}

	return (
		<View style={styles.container}>

	<Image source={require("../../assets/logo2.png")} style={styles.flowerttile} />
			<Text style={styles.title}>CyberCorp</Text>

			<Text style={styles.subtitle}>Ingresa usuario</Text>
			<TextInput style={styles.input} placeholder="Usuario"
			  value={usuario}onChangeText={setUsuario} />

			<Text style={styles.subtitle}>Ingresa contraseña</Text>
			<TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true}
			 value={contrasena} onChangeText={setContrasena} />

			{error !== "" && <Text style={styles.smallText}>{error}</Text>}

			<Pressable
				style={[styles.button1, { marginTop: 30 }]}
				disabled={cargando}
				onPress={iniciarSesion}>
				{cargando
					? <ActivityIndicator color="white" />
					: <Text style={styles.buttonText}>Iniciar Sesión</Text>}
			</Pressable>

			<Pressable
				style={styles.button2}
				onPress={() => router.push('/creditos')}>
				<Text style={styles.buttonText}>Créditos</Text>
			</Pressable>

		</View>
	);
}

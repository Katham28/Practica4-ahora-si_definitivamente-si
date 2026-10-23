import * as Crypto from 'expo-crypto';

const API_URL = "https://monsterballgo.com/api";
const TOKEN = "code37";

//lo que devuelve /login cuando el usuario y la contraseña son correctos
export type Usuario = {
	username: string;
	id: number;
	xp: number;
	email: string;
	credits: number;
	firstname: string;
	lastname: string;
	pfp_url: string;
};

//manda usuario + contraseña hasheada en SHA256; si falla lanza un Error con el mensaje del servidor
export async function login(user: string, pass: string): Promise<Usuario> {
	const passHash = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, pass);

	const body = new URLSearchParams({ user, pass: passHash, token: TOKEN }).toString();
	const respuesta = await fetch(`${API_URL}/login`, {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body,
	});

	const datos = await respuesta.json();
	if (datos.error) {
		throw new Error(datos.error);
	}
	return datos as Usuario;
}

import { Platform, StyleSheet } from "react-native";


export const colors = {
	crema: "#090909", //fondo
	rosa: "#ff8502", //botones principales
	rosaClaro: "#f9f6f7", //tarjetas,
	salvia: "#d4ff00", //verde hojita, botones secundarios
	salviaOscuro: "#0703ff", //texto verde
	cafe: "#ff03af", //texto principal
	lavanda: "#7300ff", //detalles
	blanco: "#000000",
};

//fuentes: serif para títulos (tipo vintage), redondita para lo demás
const fonts = {
	titulo: Platform.select({ ios: "Georgia", android: "serif", default: "Georgia, serif" }),
	texto: Platform.select({ ios: "ui-rounded", default: undefined }),
};

export const styles = StyleSheet.create({
	//---------- contenedores ----------
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.crema,
		padding: 20,
	},

	card: {
		backgroundColor: colors.rosaClaro,
		borderRadius: 20,
		padding: 16,
		margin: 10,
		alignItems: "center",
		borderWidth: 2,
		borderColor: colors.rosa,
	},

	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
	},


	title: {
		fontFamily: fonts.titulo,
		fontSize: 40,
		fontWeight: "bold",
		color: colors.cafe,
		textAlign: "center",
		marginBottom: 10,
	},

	mintitle: {
		fontFamily: fonts.titulo,
		fontSize: 30,
		fontWeight: "bold",
		color: colors.cafe,
		textAlign: "center",
		marginBottom: 10,
	},
	subtitle: {
		fontFamily: fonts.titulo,
		fontSize: 24,
		fontStyle: "italic",
		color: colors.salviaOscuro,
		textAlign: "center",
		marginBottom: 8,
	},
	text: {
		fontFamily: fonts.texto,
		fontSize: 18,
		color: colors.cafe,
		textAlign: "center",
	},
	smallText: {
		fontFamily: fonts.texto,
		fontSize: 14,
		color: colors.salviaOscuro,
		textAlign: "center",
	},
	//para el timer y el score
	bigNumber: {
		fontFamily: fonts.titulo,
		fontSize: 32,
		fontWeight: "bold",
		color: colors.rosa,
	},


	button1: {
		backgroundColor: colors.rosa,
		paddingVertical: 12,
		paddingHorizontal: 28,
		margin: 10,
		borderRadius: 30,
		borderWidth: 2,
		borderColor: colors.blanco,
		alignItems: "center",
	},

	button2: {
		backgroundColor: colors.salvia,
		paddingVertical: 12,
		paddingHorizontal: 28,
		margin: 10,
		borderRadius: 30,
		borderWidth: 2,
		borderColor: colors.blanco,
		alignItems: "center",
	},
	buttonText: {
		fontFamily: fonts.texto,
		fontSize: 20,
		fontWeight: "bold",
		color: colors.blanco,
	},

	buttonSecondary: {
		backgroundColor: colors.salvia,
		paddingVertical: 12,
		paddingHorizontal: 28,
		margin: 10,
		borderRadius: 30,
		borderWidth: 2,
		borderColor: colors.blanco,
		alignItems: "center",
	},

	buttonOutline: {
		backgroundColor: "transparent",
		paddingVertical: 12,
		paddingHorizontal: 28,
		margin: 10,
		borderRadius: 30,
		borderWidth: 2,
		borderColor: colors.rosa,
		alignItems: "center",
	},
	buttonOutlineText: {
		fontFamily: fonts.texto,
		fontSize: 20,
		fontWeight: "bold",
		color: colors.rosa,
	},


	board: {
		backgroundColor: colors.rosaClaro,
		borderRadius: 16,
		borderWidth: 3,
		borderColor: colors.salvia,
	},

	//imágenes de flores sueltas (decoración)
	flower: {
		width: 60,
		height: 60,
		resizeMode: "contain",
	},

	flowerttile: {
		width: 150,
		height: 150,
		resizeMode: "contain",
	},

		flowerjuego: {
		width: 100,
		height: 100,
		resizeMode: "contain",
	},
});

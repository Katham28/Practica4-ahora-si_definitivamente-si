import { Platform, StyleSheet } from "react-native";


export const colors = {
	negro: "#090909", //fondo
	naranjaNeon: "#ff8502", //botones principales
	verdeNeon: "#00ff19", //tarjetas,
	amarilloNeon: "#d4ff00", //verde hojita, botones secundarios
	azulNeon: "#0080ff", //texto verde
	rosaNeon: "#ff03af", //texto principal
	moradoNeon: "#7300ff", //detalles
	blanco: "#ffffff",
};

//fuentes: serif para títulos (tipo vintage), redondita para lo demás
const fonts = {
	titulo: Platform.select({ ios: "Georgia", android: "serif", default: "Georgia, serif" }),
	texto: Platform.select({ ios: "ui-rounded", default: undefined }),
};

export const styles = StyleSheet.create({
	creditosPantalla: { flex: 1, backgroundColor: colors.negro },
	creditosContenido: { alignItems: 'center', padding: 20, paddingBottom: 40 },
	creditosTitulo: { marginBottom: 20 },
	creditosTarjeta: { width: '100%', maxWidth: 480 },
	creditosIntegrante: { color: colors.blanco, fontSize: 14, textAlign: 'center', lineHeight: 22, marginBottom: 8 },
	creditosDato: { color: colors.blanco, fontSize: 16, fontWeight: 'bold', marginTop: 12, marginBottom: 6 },
	tecnologiaFila: { flexDirection: 'row', alignItems: 'center', gap: 12, width: '100%', marginTop: 14 },
	tecnologiaLogoFondo: { width: 96, height: 72, padding: 12, borderRadius: 12, backgroundColor: colors.blanco, alignItems: 'center', justifyContent: 'center' },
	tecnologiaLogo: { width: '100%', height: '100%' },
	tecnologiaTexto: { flex: 1 },
	tecnologiaNombre: { color: colors.blanco, fontSize: 18, fontWeight: 'bold' },
	tecnologiaDescripcion: { color: colors.blanco, fontSize: 14, lineHeight: 20, marginTop: 3 },
	//---------- contenedores ----------
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: colors.negro,
		padding: 20,
	},

	card: {
		backgroundColor: colors.rosaNeon,
		borderRadius: 20,
		padding: 16,
		margin: 10,
		alignItems: "center",
		borderWidth: 2,
		borderColor: colors.rosaNeon,
		width: "80%",
	},

	//la tarjeta brilla en verde cuando el escaner la lee
	cardDetectada: {
		borderColor: colors.verdeNeon,
		borderWidth: 6,
	},

	foto: {
		width: 180,
		height: 180,
		borderRadius: 80,
		marginBottom: 10,

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
		color: colors.blanco,
		textAlign: "center",
		marginBottom: 50,
	},

	mintitle: {
		fontFamily: fonts.titulo,
		fontSize: 30,
		fontWeight: "bold",
		color: colors.blanco,
		textAlign: "center",
		marginBottom: 10,
	},
	subtitle: {
		fontFamily: fonts.titulo,
		fontSize: 24,
		fontStyle: "italic",
		color: colors.azulNeon,
		textAlign: "center",
		marginBottom: 8,
	},
	text: {
		fontFamily: fonts.texto,
		fontSize: 18,
		color: colors.blanco,
		textAlign: "center",
	},

	input: {
		fontFamily: fonts.texto,
		fontSize: 18,
		color: colors.azulNeon,
		textAlign: "center",
		backgroundColor: colors.blanco,
		borderColor: colors.azulNeon,
		borderWidth: 2,
		borderRadius: 8,
		padding: 8,
		marginBottom: 10,
		width: "80%",
		
	},
	smallText: {
		fontFamily: fonts.texto,
		fontSize: 14,
		color: colors.blanco,
		textAlign: "center",
	},


	bigNumber: {
		fontFamily: fonts.titulo,
		fontSize: 32,
		fontWeight: "bold",
		color: colors.rosaNeon,
	},

	button1: {
		backgroundColor: colors.rosaNeon,
		paddingVertical: 12,
		paddingHorizontal: 28,
		margin: 10,
		borderRadius: 30,
		borderWidth: 2,
		borderColor: colors.blanco,
		alignItems: "center",
	},

	button2: {
		backgroundColor: colors.verdeNeon,
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
		backgroundColor: colors.naranjaNeon,
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
		borderColor: colors.rosaNeon,
		alignItems: "center",
	},
	buttonOutlineText: {
		fontFamily: fonts.texto,
		fontSize: 20,
		fontWeight: "bold",
		color: colors.rosaNeon,
	},


	board: {
		backgroundColor: colors.rosaNeon,
		borderRadius: 16,
		borderWidth: 3,
		borderColor: colors.moradoNeon,
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

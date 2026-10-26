import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { styles } from '../styles';

const tecnologias = [
 { nombre: 'Expo / Expo Router', uso: 'Desarrollo y navegación', logo: require('../../assets/logo-expo.png') },
 { nombre: 'React', uso: 'Componentes y estado', logo: require('../../assets/logo-react.svg') },
 { nombre: 'React Native', uso: 'Interfaz móvil', logo: require('../../assets/logo-react-native.svg') },
 { nombre: 'Kotlin', uso: 'Módulo NFC de Android', logo: require('../../assets/logo-kotlin.png') },
 { nombre: 'HCE', uso: 'Emulación de una tarjeta NFC en Android', logo: null },
 { nombre: 'APDU', uso: 'Comandos y respuestas entre la credencial y el lector NFC', logo: null },
];

export default function Creditos() {
 const router = useRouter();
 return (
  <ScrollView style={styles.creditosPantalla} contentContainerStyle={styles.creditosContenido}>
   <Image source={require('../../assets/logo2.png')} style={styles.flowerttile} contentFit="contain" accessibilityLabel="Logo de CyberCorp" />
   <Text style={[styles.title, styles.creditosTitulo]}>CyberCorp</Text>
   <View style={[styles.card, styles.creditosTarjeta]}>
    <Text style={styles.mintitle}>Equipo KAI</Text>
    <Text style={styles.creditosIntegrante}>ALONDRA HERNANDEZ MARTINEZ</Text>
    <Text style={styles.creditosIntegrante}>ISAI CANDELARIO SANDOVAL</Text>
    <Text style={styles.creditosIntegrante}>KATIA MARCELA CARPIO DOMINGUEZ</Text>
    <Text style={styles.creditosDato}>Grupo: 900</Text>
    <Text style={styles.smallText}>Fecha: 26-10-26</Text>
   </View>
   <View style={[styles.card, styles.creditosTarjeta]}>
    <Text style={styles.mintitle}>Tecnologías usadas</Text>
    {tecnologias.map((tecnologia) => (
     <View key={tecnologia.nombre} style={styles.tecnologiaFila}>
      {tecnologia.logo !== null && <View style={styles.tecnologiaLogoFondo}>
       <Image source={tecnologia.logo} style={styles.tecnologiaLogo} contentFit="contain" accessibilityLabel={`Logo de ${tecnologia.nombre}`} />
      </View>}
      <View style={styles.tecnologiaTexto}>
       <Text style={styles.tecnologiaNombre}>{tecnologia.nombre}</Text>
       <Text style={styles.tecnologiaDescripcion}>{tecnologia.uso}</Text>
      </View>
     </View>
    ))}
   </View>
   <Pressable style={styles.button2} accessibilityRole="button" onPress={() => router.replace('/')}>
    <Text style={styles.buttonText}>Volver al Inicio</Text>
   </Pressable>
  </ScrollView>
 );
}

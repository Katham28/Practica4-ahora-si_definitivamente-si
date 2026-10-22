import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index"
		options={{ title: 'Inicio' }} />
    <Stack.Screen name="credencial"
		options={{ title: 'Credencial' }} />
    <Stack.Screen name="creditos"
		options={{ title: 'Créditos' }} />
  </Stack>;
}

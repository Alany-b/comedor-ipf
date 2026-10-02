import { Stack } from "expo-router";

export default function MenuLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Carta del Comedor" }} />
      {/* La ruta [id] (el detalle) modificará su propio título dinámicamente desde adentro */}
    </Stack>
  );
}

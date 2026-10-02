import { Stack } from "expo-router";

export default function CarritoLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Tu Pedido" }} />
      <Stack.Screen name="nota" options={{ title: "Aclaración Cocina" }} />
    </Stack>
  );
}

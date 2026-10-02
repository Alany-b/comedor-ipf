import { Drawer } from "expo-router/drawer";
import { Pressable, Text } from "react-native";
import { useAppContext } from "../../context/AppContext";

export default function CocinaLayout() {
  const { cerrarSesion } = useAppContext();

  return (
    <Drawer
      screenOptions={{
        headerRight: () => (
          <Pressable onPress={cerrarSesion} style={{ marginRight: 15 }}>
            <Text style={{ color: "red", fontWeight: "bold" }}>Salir</Text>
          </Pressable>
        ),
      }}
    >
      <Drawer.Screen name="index" options={{ title: "Pedidos en Cola" }} />
      <Drawer.Screen
        name="atendidos"
        options={{ title: "Historial Atendidos" }}
      />
    </Drawer>
  );
}

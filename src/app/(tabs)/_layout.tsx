import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router/js-tabs";
import { useAppContext } from "../../context/AppContext";

export default function TabsLayout() {
  const { carrito } = useAppContext();

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#E63946" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menú",
          headerShown: false, // Oculto porque "menu" tiene su propio Stack anidado
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="carrito"
        options={{
          title: "Carrito",
          headerShown: false, // Oculto porque "carrito" tiene su propio Stack anidado
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" size={size} color={color} />
          ),
          // Requisito G1: Badge con la cantidad de items
          tabBarBadge: carrito.length > 0 ? carrito.length : undefined,
        }}
      />
    </Tabs>
  );
}

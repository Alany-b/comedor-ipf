import { Stack, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import DondeEstoy from "../../../components/DondeEstoy";
import { useAppContext } from "../../../context/AppContext";
import { platos } from "../../../data/platos";

export default function DetallePlato() {
  // Requisito G2.6: Leemos el parámetro (llega como texto)
  const { id } = useLocalSearchParams<{ id: string }>();
  const { agregarAlCarrito } = useAppContext();

  const plato = platos.find((p) => p.id === id);

  // Validación: Si el ID no existe en nuestra base
  if (!plato) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: "No encontrado" }} />
        <Text style={styles.error}>No existe el producto con ID: {id}</Text>
        <DondeEstoy />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Título dinámico según el plato (Requisito G1) */}
      <Stack.Screen options={{ title: plato.nombre }} />

      <View style={styles.infoBox}>
        <Text style={styles.nombre}>{plato.nombre}</Text>
        <Text style={styles.descripcion}>{plato.descripcion}</Text>
        <Text style={styles.precio}>${plato.precio}</Text>
      </View>

      <Pressable style={styles.boton} onPress={() => agregarAlCarrito(plato)}>
        <Text style={styles.botonTexto}>Agregar al carrito</Text>
      </Pressable>

      <DondeEstoy />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  infoBox: { flex: 1 },
  nombre: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  descripcion: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    lineHeight: 24,
  },
  precio: { fontSize: 28, color: "#2A9D8F", fontWeight: "bold" },
  error: { fontSize: 18, color: "red", textAlign: "center", marginTop: 50 },
  boton: {
    backgroundColor: "#E63946",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  botonTexto: { color: "white", fontWeight: "bold", fontSize: 18 },
});

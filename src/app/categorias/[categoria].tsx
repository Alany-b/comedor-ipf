import { Stack, useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import DondeEstoy from "../../components/DondeEstoy";
import { platos } from "../../data/platos";

export default function CategoriaScreen() {
  const { categoria } = useLocalSearchParams<{ categoria: string }>();

  // Requisito G2.6: Validación de parámetro
  const platosFiltrados = platos.filter(
    (p) => p.categoria.toLowerCase() === categoria?.toLowerCase(),
  );

  if (platosFiltrados.length === 0) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: "Error" }} />
        <Text style={styles.error}>No existe la categoría: "{categoria}"</Text>
        <DondeEstoy />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: categoria.toUpperCase() }} />
      <FlatList
        data={platosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.precio}>${item.precio}</Text>
          </View>
        )}
      />
      <DondeEstoy />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  item: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nombre: { fontSize: 16, fontWeight: "bold" },
  precio: { fontSize: 16, color: "#2A9D8F" },
  error: { fontSize: 18, color: "red", textAlign: "center", marginTop: 50 },
});

import { Link } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { platos } from "../../../data/platos";

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={platos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // Usamos href dinámico inyectando el ID
          <Link href={`/menu/${item.id}`} asChild>
            <Pressable style={styles.item}>
              <View>
                <Text style={styles.nombre}>{item.nombre}</Text>
                <Text style={styles.categoria}>
                  {item.categoria.toUpperCase()}
                </Text>
              </View>
              <Text style={styles.precio}>${item.precio}</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  item: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
  },
  nombre: { fontSize: 16, fontWeight: "bold", marginBottom: 4 },
  categoria: { fontSize: 12, color: "gray" },
  precio: { fontSize: 18, color: "#2A9D8F", fontWeight: "bold" },
});

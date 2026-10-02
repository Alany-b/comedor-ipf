import { FlatList, StyleSheet, Text, View } from "react-native";
import { useAppContext } from "../../context/AppContext";

export default function AtendidosScreen() {
  const { pilaAtendidos } = useAppContext();
  // Invertimos el array para que se muestre como una pila (LIFO: el último atendido arriba)
  const historial = pilaAtendidos.aArray().reverse();

  return (
    <View style={styles.container}>
      <FlatList
        data={historial}
        keyExtractor={(item) => item.numero.toString()}
        renderItem={({ item }) => (
          <View style={styles.tarjeta}>
            <Text style={styles.turno}>Despachado: Turno #{item.numero}</Text>
            <Text>{item.items.length} platos entregados.</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.vacio}>Aún no se atendieron pedidos.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  tarjeta: {
    backgroundColor: "#E5E5E5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  turno: { fontWeight: "bold", fontSize: 16, marginBottom: 5 },
  vacio: { textAlign: "center", color: "gray", marginTop: 40 },
});

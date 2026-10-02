import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAppContext } from "../../context/AppContext";

export default function CocinaColaScreen() {
  const { colaPedidos, atenderSiguiente } = useAppContext();
  const pedidoActual = colaPedidos.frente();

  return (
    <View style={styles.container}>
      <Text style={styles.info}>Pedidos en espera: {colaPedidos.tamanio}</Text>

      {!pedidoActual ? (
        <Text style={styles.vacio}>No hay pedidos pendientes.</Text>
      ) : (
        <View style={styles.tarjeta}>
          <Text style={styles.turno}>Turno #{pedidoActual.numero}</Text>
          {pedidoActual.items.map((item, i) => (
            <Text key={i} style={styles.item}>
              - {item.nombre}
            </Text>
          ))}
          {pedidoActual.nota ? (
            <Text style={styles.nota}>Nota: {pedidoActual.nota}</Text>
          ) : null}

          <Pressable style={styles.boton} onPress={atenderSiguiente}>
            <Text style={styles.botonTexto}>Atender y Despachar</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  info: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  vacio: { textAlign: "center", fontSize: 16, color: "gray", marginTop: 40 },
  tarjeta: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  turno: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#E63946",
    marginBottom: 15,
  },
  item: { fontSize: 16, marginBottom: 5 },
  nota: {
    backgroundColor: "#FFF3CD",
    padding: 10,
    marginTop: 15,
    borderRadius: 5,
    fontStyle: "italic",
  },
  boton: {
    backgroundColor: "#2A9D8F",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  botonTexto: { color: "white", fontWeight: "bold" },
});

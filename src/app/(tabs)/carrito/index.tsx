import { Link } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import DondeEstoy from "../../../components/DondeEstoy";
import { useAppContext } from "../../../context/AppContext";

export default function CarritoScreen() {
  const { carrito, deshacerUltimo } = useAppContext();

  // Calculamos el total de los platos
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={carrito}
        // Usamos index como key porque el usuario podría agregar dos Chipás idénticos
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.precio}>${item.precio}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.vacio}>
            El carrito está vacío. ¡Agregá algo rico!
          </Text>
        }
      />

      <View style={styles.footer}>
        <Text style={styles.totalTexto}>Total a pagar: ${total}</Text>

        <View style={styles.botonesContenedor}>
          <Pressable
            style={[
              styles.botonDeshacer,
              carrito.length === 0 && styles.deshabilitado,
            ]}
            onPress={deshacerUltimo}
            disabled={carrito.length === 0}
          >
            <Text style={styles.botonTexto}>Deshacer Último</Text>
          </Pressable>

          {/* Envolvemos en asChild porque es un componente interactivo directo */}
          <Link href="/carrito/nota" asChild>
            <Pressable
              style={[
                styles.botonContinuar,
                carrito.length === 0 && styles.deshabilitado,
              ]}
              disabled={carrito.length === 0}
            >
              <Text style={styles.botonTexto}>Continuar</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      <DondeEstoy />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#DDD",
  },
  nombre: { fontSize: 16 },
  precio: { fontSize: 16, fontWeight: "bold" },
  vacio: { textAlign: "center", marginTop: 50, fontSize: 16, color: "gray" },
  footer: {
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 2,
    borderColor: "#EEE",
  },
  totalTexto: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
    marginBottom: 20,
  },
  botonesContenedor: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  botonDeshacer: {
    flex: 1,
    backgroundColor: "#E9C46A",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  botonContinuar: {
    flex: 1,
    backgroundColor: "#2A9D8F",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  botonTexto: { color: "white", fontWeight: "bold", fontSize: 15 },
  deshabilitado: { opacity: 0.5 },
});

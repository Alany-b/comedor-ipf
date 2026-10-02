import { router, useLocalSearchParams } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import DondeEstoy from "../components/DondeEstoy";
import { useAppContext } from "../context/AppContext";

export default function ConfirmarScreen() {
  const { nota } = useLocalSearchParams<{ nota: string }>();
  const { carrito, confirmarPedido } = useAppContext();

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  const enviarPedido = () => {
    // confirmarPedido vacía el carrito, encola el pedido y devuelve el número
    const numeroTurno = confirmarPedido(nota || "");

    // REQUISITO G2.5: Navegación correcta.
    // Usamos replace en lugar de push. De esta forma, la pantalla /turno/[numero]
    // REEMPLAZA a este modal en la pila. Así evitamos que si el usuario presiona "atrás"
    // vuelva a la pantalla de confirmación con un carrito ya vacío.
    router.replace(`/turno/${numeroTurno}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resumen de tu pedido</Text>

      <FlatList
        data={carrito}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nombre}</Text>
            <Text style={styles.precioItem}>${item.precio}</Text>
          </View>
        )}
      />

      {nota ? (
        <View style={styles.notaCaja}>
          <Text style={styles.notaTitulo}>Nota para cocina:</Text>
          <Text>{nota}</Text>
        </View>
      ) : null}

      <Text style={styles.total}>Total: ${total}</Text>

      <Pressable style={styles.boton} onPress={enviarPedido}>
        <Text style={styles.botonTexto}>Confirmar y Enviar a Cocina</Text>
      </Pressable>

      <DondeEstoy />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  precioItem: { fontWeight: "bold" },
  notaCaja: {
    backgroundColor: "#FFF3CD",
    padding: 10,
    borderRadius: 8,
    marginVertical: 15,
  },
  notaTitulo: { fontWeight: "bold", marginBottom: 5 },
  total: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "right",
    marginVertical: 20,
  },
  boton: {
    backgroundColor: "#E63946",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  botonTexto: { color: "white", fontWeight: "bold", fontSize: 18 },
});

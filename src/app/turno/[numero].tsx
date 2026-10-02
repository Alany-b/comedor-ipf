import { router, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import DondeEstoy from "../../components/DondeEstoy";
import { useAppContext } from "../../context/AppContext";

export default function TurnoScreen() {
  const { numero } = useLocalSearchParams<{ numero: string }>();
  const { colaPedidos } = useAppContext();

  // Requisito G4 (Opcional): Tiempo estimado
  // Si acabamos de encolar nuestro pedido, somos los últimos.
  // Los que están adelante son el tamaño total menos nuestro propio pedido (1).
  const pedidosAdelante = Math.max(0, colaPedidos.tamanio - 1);
  const tiempoEspera = pedidosAdelante * 3;

  return (
    <View style={styles.container}>
      <Text style={styles.exito}>¡Pedido enviado con éxito!</Text>

      <View style={styles.tarjeta}>
        <Text style={styles.label}>TU NÚMERO</Text>
        <Text style={styles.numero}>{numero}</Text>
      </View>

      <Text style={styles.info}>
        Hay {pedidosAdelante} pedidos delante del tuyo.
      </Text>
      <Text style={styles.info}>
        Tiempo estimado de espera: {tiempoEspera} minutos.
      </Text>

      {/* router.dismissAll() limpia la pila y nos deja en la base (Inicio) */}
      <Pressable style={styles.boton} onPress={() => router.dismissAll()}>
        <Text style={styles.botonTexto}>Volver al Inicio</Text>
      </Pressable>

      <DondeEstoy />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  exito: {
    fontSize: 20,
    color: "#2A9D8F",
    fontWeight: "bold",
    marginBottom: 30,
  },
  tarjeta: {
    backgroundColor: "white",
    padding: 40,
    borderRadius: 15,
    alignItems: "center",
    elevation: 4,
    width: "100%",
    marginBottom: 30,
  },
  label: { fontSize: 16, color: "gray", fontWeight: "bold" },
  numero: { fontSize: 80, fontWeight: "900", color: "#1D3557" },
  info: { fontSize: 16, textAlign: "center", marginBottom: 10 },
  boton: {
    backgroundColor: "#457B9D",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  botonTexto: { color: "white", fontWeight: "bold", fontSize: 18 },
});

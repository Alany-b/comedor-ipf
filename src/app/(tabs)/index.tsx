import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function InicioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido al Comedor IPF!</Text>

      <View style={styles.grid}>
        <Link href="/menu" asChild>
          <Pressable style={styles.card}>
            <Text style={styles.cardText}>Ver Menú</Text>
          </Pressable>
        </Link>
        <Link href="/buscar" asChild>
          <Pressable style={styles.card}>
            <Text style={styles.cardText}>Buscar Platos</Text>
          </Pressable>
        </Link>
        <Link href="/ayuda" asChild>
          <Pressable style={styles.card}>
            <Text style={styles.cardText}>Ayuda</Text>
          </Pressable>
        </Link>
        <Link href="/cocina" asChild>
          <Pressable style={[styles.card, styles.cardCocina]}>
            <Text style={styles.cardText}>Acceso Personal Cocina</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  grid: { gap: 15 },
  card: {
    backgroundColor: "#457B9D",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  cardCocina: { backgroundColor: "#1D3557", marginTop: 20 },
  cardText: { color: "white", fontSize: 18, fontWeight: "bold" },
});

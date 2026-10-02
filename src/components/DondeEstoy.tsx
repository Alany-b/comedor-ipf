import { useLocalSearchParams, usePathname, useSegments } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function DondeEstoy() {
  const pathname = usePathname();
  const segments = useSegments();
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📍 ¿Dónde estoy?</Text>
      <Text style={styles.texto}>Ruta: {pathname}</Text>
      <Text style={styles.texto}>Segmentos: {JSON.stringify(segments)}</Text>
      <Text style={styles.texto}>Params: {JSON.stringify(params)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#E5E5E5",
    marginTop: 20,
    borderRadius: 8,
  },
  titulo: { fontWeight: "bold", fontSize: 14, marginBottom: 4 },
  texto: { fontSize: 12, color: "#333" },
});

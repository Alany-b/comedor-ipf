import { router, useLocalSearchParams } from "expo-router";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import DondeEstoy from "../components/DondeEstoy";
import { platos } from "../data/platos";

export default function BuscarScreen() {
  const { q = "", categoria = "" } = useLocalSearchParams<{
    q?: string;
    categoria?: string;
  }>();

  // Requisito G2.7: setParams cambia la URL sin apilar pantallas
  const setBusqueda = (texto: string) =>
    router.setParams({ q: texto, categoria });

  const resultados = platos.filter(
    (p) =>
      p.nombre.toLowerCase().includes(q.toLowerCase()) &&
      (categoria ? p.categoria === categoria : true),
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar plato (ej. Milanesa)..."
        value={q}
        onChangeText={setBusqueda}
      />

      <Text style={styles.resultadosTexto}>
        {resultados.length} resultados encontrados
      </Text>

      <FlatList
        data={resultados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.categoria}>{item.categoria}</Text>
          </View>
        )}
      />
      <DondeEstoy />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CCC",
    fontSize: 16,
    marginBottom: 10,
  },
  resultadosTexto: { color: "gray", marginBottom: 15 },
  item: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  nombre: { fontSize: 16, fontWeight: "bold" },
  categoria: { color: "gray", fontSize: 12 },
});

import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import DondeEstoy from "../../../components/DondeEstoy";

export default function NotaScreen() {
  const [nota, setNota] = useState("");

  const irAConfirmar = () => {
    // Usamos router.push pasando parámetros
    router.push({ pathname: "/confirmar", params: { nota } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Aclaración para la cocina (Opcional):</Text>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        placeholder="Ej: Sin sal, la hamburguesa sin tomate..."
        value={nota}
        onChangeText={setNota}
      />
      <Pressable style={styles.boton} onPress={irAConfirmar}>
        <Text style={styles.botonTexto}>Revisar y Confirmar</Text>
      </Pressable>

      <DondeEstoy />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  label: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    textAlignVertical: "top",
    minHeight: 120,
    marginBottom: 20,
  },
  boton: {
    backgroundColor: "#2A9D8F",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  botonTexto: { color: "white", fontWeight: "bold", fontSize: 18 },
});

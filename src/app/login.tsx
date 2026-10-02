import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useAppContext } from "../context/AppContext";
// No importamos router, Stack.Protected cerrará este modal automáticamente al haber sesión!

export default function LoginScreen() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const { iniciarSesion } = useAppContext();

  const ingresar = () => {
    if (user === "admin" && pass === "1234") {
      iniciarSesion("Personal Cocina");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Acceso exclusivo Cocina</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={user}
        onChangeText={setUser}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={pass}
        onChangeText={setPass}
        secureTextEntry
      />
      <Pressable style={styles.boton} onPress={ingresar}>
        <Text style={styles.botonTexto}>Ingresar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  boton: {
    backgroundColor: "#1D3557",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  botonTexto: { color: "white", fontWeight: "bold", fontSize: 16 },
});

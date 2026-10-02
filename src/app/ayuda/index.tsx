import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function AyudaIndex() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Centro de Ayuda</Text>
      <Link href="/ayuda/pagos/tarjeta" style={{ color: "blue", fontSize: 16 }}>
        Ir a Medios de Pago
      </Link>
    </View>
  );
}

import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function AyudaArticulo() {
  const { slug } = useLocalSearchParams<{ slug: string[] }>();
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Estás viendo la ruta profunda:</Text>
      <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 10 }}>
        /ayuda/{slug?.join("/")}
      </Text>
    </View>
  );
}

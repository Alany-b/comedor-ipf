import { Link, usePathname } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  const pathname = usePathname();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 40, marginBottom: 10 }}>404</Text>
      <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 20 }}>
        No pudimos encontrar la pantalla: {pathname}
      </Text>
      <Link href="/" style={{ color: "blue", fontSize: 18 }}>
        Volver al Inicio
      </Link>
    </View>
  );
}

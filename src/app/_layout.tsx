import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AppProvider, useAppContext } from "../context/AppContext";

// Requisito G3: Anchor para deep links
export const unstable_settings = {
  anchor: "(tabs)",
};

function NavegacionRaiz() {
  const { usuario } = useAppContext();
  const conSesion = usuario !== null;

  return (
    <Stack>
      {/* Grupo principal de pestañas, ocultamos su header propio para evitar duplicados */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Rutas estándar en la raíz */}
      <Stack.Screen
        name="categorias/[categoria]"
        options={{ title: "Categoría" }}
      />
      <Stack.Screen name="buscar" options={{ title: "Búsqueda" }} />
      <Stack.Screen
        name="turno/[numero]"
        options={{ title: "Tu Turno", headerBackVisible: false }}
      />
      <Stack.Screen name="ayuda/index" options={{ title: "Ayuda" }} />
      <Stack.Screen
        name="ayuda/[...slug]"
        options={{ title: "Artículo de Ayuda" }}
      />
      <Stack.Screen name="+not-found" options={{ title: "Oops!" }} />

      {/* Modal de confirmación */}
      <Stack.Screen
        name="confirmar"
        options={{ presentation: "modal", title: "Confirmar Pedido" }}
      />

      {/* Requisito G2.8: Rutas Protegidas */}
      <Stack.Protected guard={conSesion}>
        <Stack.Screen name="cocina" options={{ headerShown: false }} />
      </Stack.Protected>

      <Stack.Protected guard={!conSesion}>
        <Stack.Screen
          name="login"
          options={{ presentation: "modal", title: "Acceso Cocina" }}
        />
      </Stack.Protected>
    </Stack>
  );
}

export default function LayoutRaiz() {
  return (
    // Requisito G3: Necesario para que el Drawer (menú lateral) funcione
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppProvider>
        <NavegacionRaiz />
      </AppProvider>
    </GestureHandlerRootView>
  );
}

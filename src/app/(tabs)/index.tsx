/**
 * RUTA "/"  →  src/app/(tabs)/index.tsx
 *
 * `index.tsx` es la ruta por defecto de su carpeta. Como (tabs) es un grupo,
 * no suma nada a la URL: esta pantalla es "/".
 * Cada tarjeta es un <Link>: navegamos porque el usuario tocó algo.
 */
import { StyleSheet, Text, View } from "react-native";

import { DondeEstoy } from "@/components/DondeEstoy";
import { LinksCategorias } from "@/components/links-categorias";
import { Pantalla } from "@/components/pantalla";
import { TarjetaEjemplo } from "@/components/tarjeta-ejemplo";
import { Subtitulo } from "@/components/texto";
import { useAuth } from "@/context/auth";
import { useColores } from "@/hooks/use-colores";

export default function Inicio() {
  const colores = useColores();
  const { usuario } = useAuth();
  const conSesion = usuario !== null;

  return (
    <Pantalla>
      <View style={[styles.hero, { backgroundColor: colores.primario }]}>
        <Text style={styles.heroEtiqueta}>Instituto Politécnico Formosa</Text>
        <Text style={styles.heroTitulo}>Comedor IPF</Text>
        <Text style={styles.heroTexto}>
          ¡Hola! Elegí tus platos, confirmá el pedido y esperá tu turno sin
          hacer fila.
        </Text>
      </View>

      <Subtitulo>¿Qué querés hacer?</Subtitulo>
      <TarjetaEjemplo
        href="/menu"
        titulo="Ver el menú"
        descripcion="Todos los platos agrupados por categoría."
        ruta="/menu"
        icono="restaurant"
        color="#10B981"
      />
      <TarjetaEjemplo
        href="/buscar"
        titulo="Buscar un plato"
        descripcion="Buscá por nombre y filtrá por categoría."
        ruta="/buscar?q=..."
        icono="search"
        color="#0EA5E9"
      />
      <TarjetaEjemplo
        href="/ayuda"
        titulo="Ayuda"
        descripcion="Horarios, formas de pago y cómo pedir."
        ruta="/ayuda"
        icono="help-circle"
        color="#F59E0B"
      />
      <TarjetaEjemplo
        href={conSesion ? "/cocina" : "/login"}
        titulo="Cocina"
        descripcion={
          conSesion
            ? "Atender los pedidos en espera."
            : "Solo para el personal: pide usuario y clave."
        }
        ruta={conSesion ? "/cocina" : "/login"}
        icono="flame"
        color="#EF4444"
      />

      <Subtitulo>Categorías</Subtitulo>
      <LinksCategorias />

      <DondeEstoy />
    </Pantalla>
  );
}

const styles = StyleSheet.create({
  hero: {
    borderRadius: 20,
    padding: 20,
    gap: 8,
  },
  heroEtiqueta: {
    color: "#C7D2FE",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  heroTitulo: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
  heroTexto: {
    color: "#E0E7FF",
    fontSize: 15,
    lineHeight: 22,
  },
});

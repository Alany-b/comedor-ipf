import {
    createContext,
    ReactNode,
    useContext,
    useRef,
    useState,
} from "react";
import { Plato } from "../data/platos";
import { Cola } from "../estructuras/Cola";
import { Pila } from "../estructuras/Pila";

// Definimos la estructura de un Pedido
export interface Pedido {
  numero: number;
  items: Plato[];
  nota: string;
}

interface AppContextType {
  usuario: string | null;
  iniciarSesion: (user: string) => void;
  cerrarSesion: () => void;

  carrito: Plato[];
  pilaDeshacer: Pila<Plato>;
  agregarAlCarrito: (plato: Plato) => void;
  deshacerUltimo: () => void;
  vaciarCarrito: () => void;

  colaPedidos: Cola<Pedido>;
  pilaAtendidos: Pila<Pedido>;
  confirmarPedido: (nota: string) => number;
  atenderSiguiente: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [usuario, setUsuario] = useState<string | null>(null);
  const [carrito, setCarrito] = useState<Plato[]>([]);
  const [numeroTurno, setNumeroTurno] = useState(1);

  // Instanciamos las estructuras nativas usando useRef para que persistan
  const pilaDeshacer = useRef(new Pila<Plato>()).current;
  const colaPedidos = useRef(new Cola<Pedido>()).current;
  const pilaAtendidos = useRef(new Pila<Pedido>()).current;

  // Estado auxiliar para forzar el re-render de la UI al mutar clases
  const [, setTrigger] = useState(0);
  const actualizarUI = () => setTrigger((t) => t + 1);

  const iniciarSesion = (user: string) => setUsuario(user);
  const cerrarSesion = () => setUsuario(null);

  const agregarAlCarrito = (plato: Plato) => {
    pilaDeshacer.push(plato);
    setCarrito(pilaDeshacer.aArray()); // Sincronizamos React con la Pila
    actualizarUI();
  };

  const deshacerUltimo = () => {
    if (!pilaDeshacer.vacia) {
      pilaDeshacer.pop();
      setCarrito(pilaDeshacer.aArray());
      actualizarUI();
    }
  };

  const vaciarCarrito = () => {
    while (!pilaDeshacer.vacia) pilaDeshacer.pop();
    setCarrito([]);
    actualizarUI();
  };

  const confirmarPedido = (nota: string) => {
    const nuevoPedido: Pedido = {
      numero: numeroTurno,
      items: [...carrito],
      nota,
    };
    colaPedidos.encolar(nuevoPedido);
    setNumeroTurno((prev) => prev + 1);
    vaciarCarrito();
    return nuevoPedido.numero;
  };

  const atenderSiguiente = () => {
    if (!colaPedidos.vacia) {
      const pedidoAtendido = colaPedidos.desencolar();
      if (pedidoAtendido) {
        pilaAtendidos.push(pedidoAtendido);
      }
      actualizarUI();
    }
  };

  return (
    <AppContext.Provider
      value={{
        usuario,
        iniciarSesion,
        cerrarSesion,
        carrito,
        pilaDeshacer,
        agregarAlCarrito,
        deshacerUltimo,
        vaciarCarrito,
        colaPedidos,
        pilaAtendidos,
        confirmarPedido,
        atenderSiguiente,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext debe usarse dentro de un AppProvider");
  return context;
};

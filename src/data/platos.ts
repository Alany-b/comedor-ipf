export interface Plato {
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
  categoria: "desayuno" | "almuerzo" | "bebidas" | "kiosco";
}

export const platos: Plato[] = [
  // Desayuno
  {
    id: "1",
    nombre: "Mate cocido con torta frita",
    precio: 800,
    descripcion: "Clásico formoseño para empezar la mañana.",
    categoria: "desayuno",
  },
  {
    id: "2",
    nombre: "Café con medialunas",
    precio: 1500,
    descripcion: "Café con leche y 3 medialunas de manteca.",
    categoria: "desayuno",
  },
  {
    id: "3",
    nombre: "Porción de Chipá",
    precio: 1200,
    descripcion: "Chipá calentito recién horneado (250g).",
    categoria: "desayuno",
  },

  // Almuerzo
  {
    id: "4",
    nombre: "Milanesa con puré",
    precio: 4500,
    descripcion: "Milanesa de carne al horno con puré de papas.",
    categoria: "almuerzo",
  },
  {
    id: "5",
    nombre: "Fideos con tuco",
    precio: 3800,
    descripcion: "Tallarines caseros con salsa fileto y queso.",
    categoria: "almuerzo",
  },
  {
    id: "6",
    nombre: "Empanadas de carne (Docena)",
    precio: 6000,
    descripcion: "Empanadas de carne cortada a cuchillo fritas.",
    categoria: "almuerzo",
  },

  // Bebidas
  {
    id: "7",
    nombre: "Agua mineral sin gas",
    precio: 900,
    descripcion: "Botella de 500ml fría.",
    categoria: "bebidas",
  },
  {
    id: "8",
    nombre: "Gaseosa Cola",
    precio: 1300,
    descripcion: "Gaseosa línea clásica 500ml.",
    categoria: "bebidas",
  },
  {
    id: "9",
    nombre: "Jugo de Naranja exprimido",
    precio: 1500,
    descripcion: "Jugo natural de naranjas frescas 400ml.",
    categoria: "bebidas",
  },

  // Kiosco
  {
    id: "10",
    nombre: "Alfajor de Maicena",
    precio: 700,
    descripcion: "Alfajor artesanal relleno de abundante dulce de leche.",
    categoria: "kiosco",
  },
  {
    id: "11",
    nombre: "Turrón de maní",
    precio: 400,
    descripcion: "Turrón clásico para el recreo.",
    categoria: "kiosco",
  },
  {
    id: "12",
    nombre: "Galletitas surtidas",
    precio: 1100,
    descripcion: "Paquete de galletitas surtidas dulces 400g.",
    categoria: "kiosco",
  },
];

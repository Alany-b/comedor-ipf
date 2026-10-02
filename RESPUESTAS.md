# Trabajo Práctico N° 2 - Expo Router: rutas, navegación, pilas y colas

**Alumno:** Alan Mauricio Ybars Gimenez

---

## Parte A. Estructuras de datos: la pila y la cola

### A1. Conceptos

**a) LIFO y FIFO**

- **LIFO** (Last In, First Out): El último elemento en entrar es el primero en salir. Corresponde a la **Pila**.
- **FIFO** (First In, First Out): El primer elemento en entrar es el primero en salir. Corresponde a la **Cola**.

**b) Extremos de entrada y salida**

- **Pila:** Los elementos entran y salen por el mismo extremo, llamado **tope**.
- **Cola:** Entran por el **final** y salen por el **frente**.

**c) Ejemplos**

- **Pila:** (Vida real) Una pila de platos. (App móvil) El historial de pantallas; al navegar se apila una nueva, al tocar "atrás" sale la del tope.
- **Cola:** (Vida real) La fila del banco. (App móvil) Las acciones de navegación que el usuario toca muy rápido y se encolan para ser procesadas en orden.

### A2. Seguimiento de una pila

1. `console.log(p.tope());` -> **Imprime:** `'Perfil'`
2. `console.log(p.pop());` -> **Imprime:** `'Perfil'`
3. `console.log(p.tope());` -> **Imprime:** `'Productos'`
4. `console.log(p.vacia);` -> **Imprime:** `false`

- **Estado final (base a tope):** `['Inicio', 'Productos']`

### A3. Seguimiento de una cola

1. `console.log(c.frente());` -> **Imprime:** `'Beto'`
2. `console.log(c.desencolar());` -> **Imprime:** `'Beto'`
3. `console.log(c.vacia);` -> **Imprime:** `false`

- **Estado final (frente a final):** `['Caro', 'Dani']`

### A4. Análisis de la implementación

**a)** El símbolo `#` indica que la propiedad es **privada**. Evita que el código exterior acceda o modifique el array directamente (ej. colándose en la fila) obligando a usar los métodos oficiales.
**b)** `shift()` tiene un problema de rendimiento: al sacar el primer elemento, debe mover todos los demás un lugar a la izquierda (complejidad O(n)). Las colas serias lo resuelven usando un índice o apuntador de frente, o usando listas enlazadas.
**c)** La pila usa `pop()` y la cola usa `shift()`. No pueden usar el mismo porque tienen naturalezas opuestas (LIFO saca del final, FIFO saca del inicio).

### A5. Programación: una cola eficiente

```javascript
class ColaEficiente {
  #items = [];
  #frenteIndex = 0;

  encolar(x) {
    this.#items.push(x);
  }
  desencolar() {
    if (this.vacia) return undefined;
    const valor = this.#items[this.#frenteIndex];
    delete this.#items[this.#frenteIndex];
    this.#frenteIndex++;
    return valor;
  }
  frente() {
    if (this.vacia) return undefined;
    return this.#items[this.#frenteIndex];
  }
  get vacia() {
    return this.#frenteIndex >= this.#items.length;
  }
  get tamanio() {
    return this.#items.length - this.#frenteIndex;
  }
}
```

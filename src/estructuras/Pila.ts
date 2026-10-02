export class Pila<T> {
  #items: T[] = []; // Campo privado

  push(elemento: T): void {
    this.#items.push(elemento);
  }

  pop(): T | undefined {
    return this.#items.pop();
  }

  tope(): T | undefined {
    return this.#items.at(-1);
  }

  get vacia(): boolean {
    return this.#items.length === 0;
  }

  // Requisito G2.1: Getter tamanio
  get tamanio(): number {
    return this.#items.length;
  }

  // Requisito G2.1: Método aArray que devuelve una copia
  aArray(): T[] {
    return [...this.#items];
  }
}

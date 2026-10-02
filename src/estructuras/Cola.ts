export class Cola<T> {
  #items: T[] = []; // Campo privado
  #frenteIndex = 0; // Apuntador al primero de la fila

  encolar(elemento: T): void {
    this.#items.push(elemento);
  }

  desencolar(): T | undefined {
    if (this.vacia) return undefined;

    const valor = this.#items[this.#frenteIndex];
    delete this.#items[this.#frenteIndex]; // Liberamos memoria
    this.#frenteIndex++;

    return valor;
  }

  frente(): T | undefined {
    if (this.vacia) return undefined;
    return this.#items[this.#frenteIndex];
  }

  get vacia(): boolean {
    return this.#frenteIndex >= this.#items.length;
  }

  // Requisito G2.1: Getter tamanio
  get tamanio(): number {
    return this.#items.length - this.#frenteIndex;
  }

  // Requisito G2.1: Método aArray que devuelve una copia
  aArray(): T[] {
    // Retornamos una copia solo desde el frente actual hasta el final
    return this.#items.slice(this.#frenteIndex);
  }
}

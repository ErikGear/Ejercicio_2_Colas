class Queue {
  #data = [];

  //métodos

  isEmpty() {
    return this.#data.length === 0;
  }

  length() {
    return this.#data.length;
  }

  //encolar elementos
  enqueue(item) {
    this.#data.push(item);
  }

  //desencolar elementos
  dequeue() {
    try {
      if (this.#data.length === 0) {
        throw "Error, no existen elementos en la COLA";
      } else {
        return this.#data.shift();
      }
    } catch (e) {
      console.log(`${e}`);
    }
  }

  //muestra el item en el frente de la cola
  frontValue() {
    try {
      if (this.#data.length === 0) {
        throw "Error, no existen elementos en Cola";
      } else {
        console.log(`Frente: ${this.#data[0]}`);
      }
    } catch (error) {
      console.log(`${e}`);
    }
  }

  backValue() {
    try {
      if (this.#data.length === 0) {
        throw "Error, no existen elementos en Cola";
      } else {
        console.log(`Back: ${this.#data[this.#data.length - 1]}`);
      }
    } catch (error) {
      console.log(`${e}`);
    }
  }

  toString() {
    for (const item of this.#data) {
      console.log(`Item queue: ${item}`);
    }
  }

  clear() {
    this.#data = [];
  }
}

//datos de entrada: COLA original de colores
//datos de salidad: dos nuevas colas: una para loscolres con indice IMPAR y otra cola pra los colores con indice PAR

function coloresParesImpares(cola) {
  const coloresPares = new Queue();
  const coloresImpares = new Queue();

  while (!cola.isEmpty()) {
    const item = cola.dequeue();
    const indice = cola.length();

    if (indice % 2 === 0) {
      coloresPares.enqueue(item);
    } else {
      coloresImpares.enqueue(item);
    }
  }

  return [coloresPares, coloresImpares];
}

const queueColors = new Queue();
queueColors.enqueue("amarillo");
queueColors.enqueue("rosa");
queueColors.enqueue("rojo");
queueColors.enqueue("verde");
queueColors.enqueue("azul");
queueColors.enqueue("negro");
queueColors.enqueue("morado");
queueColors.enqueue("blanco");

const [coloresPares, coloresImpares] = coloresParesImpares(queueColors);

console.log("Colores Pares");
coloresPares.toString();
console.log("\n");
console.log("Colores impares");
coloresImpares.toString();

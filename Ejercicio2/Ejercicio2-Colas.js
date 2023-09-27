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
      console.log(`User: ${item.user}, ticket: ${item.ticket}`);
    }
  }

  getItems() {
    //realizo una copia del array original de la cola
    //por cuestiones de seguridad y asi no modificamos
    //el contendio original a ser necesario
    return [...this.#data];
  }

  dequeueItem(index){
    return this.#data.slice(index, index + 1);
  }
}

//datos de entrada: TICKETS de atención
//datos de salida: nuevo cola sin los teckets falsos
const queue = new Queue();

cola = [ 
  { user:"User1", ticket:true },
  { user:"User1", ticket:true },
  { user:"User2", ticket:true },
  { user:"User3", ticket:false },
  { user:"User4", ticket:true },
  { user:"User5", ticket:false },
  { user:"User6", ticket:false },
  { user:"User7", ticket:true },
  { user:"User8", ticket:true },
  { user:"User9", ticket:true },
  { user:"User10", ticket:false },
  { user:"User11", ticket:true },
];

function retirarColados(cola){
  const colados = new Queue();
  for (const item of cola) {
    if (item.ticket) {
      queue.enqueue(item);
    } else {
      colados.enqueue(item);
    }
  }

  return colados;
}

const colados = retirarColados(cola);

//imprimiendo amabas colas

//cola con tickets TRUE
queue.toString();

console.log("\n");

//cola con tickets FALSE
colados.toString();

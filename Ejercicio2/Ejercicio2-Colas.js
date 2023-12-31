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
  
}

//datos de entrada: TICKETS de atención
//datos de salida: nuevo cola sin los teckets falsos
function ticketsColados(cola) {
  const ticketsReales = new Queue();
  const ticketsColados = new Queue();

  while (!cola.isEmpty()) {
    const item = cola.dequeue();

    if (item.ticket) {
      ticketsReales.enqueue(item);
    } else {
      ticketsColados.enqueue(item);
    }
  }

  while (!ticketsReales.isEmpty()) {
    cola.enqueue(ticketsReales.dequeue());
  }

  return ticketsColados;
}

//cola incial
const tickets = new Queue();
tickets.enqueue({ user: "User1", ticket: true });
tickets.enqueue({ user: "User2", ticket: true });
tickets.enqueue({ user: "User3", ticket: false });
tickets.enqueue({ user: "User4", ticket: true });
tickets.enqueue({ user: "User5", ticket: false });
tickets.enqueue({ user: "User6", ticket: false });
tickets.enqueue({ user: "User7", ticket: true });
tickets.enqueue({ user: "User8", ticket: true });
tickets.enqueue({ user: "User9", ticket: true });
tickets.enqueue({ user: "User10", ticket: false });
tickets.enqueue({ user: "User11", ticket: true });



//imprimiendo cola inicial
console.log("Cola incial");
tickets.toString()
console.log("\n");

const ticketsRetirados = ticketsColados(tickets);

//cola final
console.log("Tickets Reales");
tickets.toString();

//Tickets Retirados
console.log("\nTickets Colados");
ticketsRetirados.toString();

class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculador = new Calculadora();
    this.tipoOperacion = undefined;
    this.valorActual = "";
    this.valorAnterior = "";
    this.signos ={
      sumar: "+",
      restar: "-",
      dividir: "%",
      multiplicar: "x",
      potenciar: "**"

    }
  }
  borrar() {
    this.valorActual = this.valorActual.toString().slice(0, -1); //esto toma todos los valores menos el ultimo 'slice(0, -1)'
    this.imprimirValores(); //y esto devuelve otra vez los valores pero sin el ultimo
  }
  borrarTodo() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.tipoOperacion = undefined;
    this.imprimirValores();
  }
  computar(tipo) {
    this.tipoOperacion !== "igual" && this.calcular();
    this.tipoOperacion = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior; //este "||" asi, significa que si ese valor ya exite, que haga lo otro entonces
    this.valorActual = "";
    this.imprimirValores();
  }

  agregarNumero(numero) {
    if (numero === "." && this.valorActual.includes(".")) return; //!lo que hacemos es que si numero es igual a (punto), y en valor actual ya hay un punto, que no retorne nada.
    this.valorActual = this.valorActual.toString() + numero.toString(); //*el 'toString' es para asegurarnos que siempre estemos trabajando con un string, luego lo transformaremos a int
    this.imprimirValores();
  }

  imprimirValores() {
    this.displayValorActual.textContent = this.valorActual; //esto setea el contenido del html
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ""} `; //este "||" asi, significa que si ese valor ya exite, que haga lo otro entonces
  }
  calcular() {
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);
    //*ahora ya volvemos a tener todo como valores numericos
    if (isNaN(valorActual) || isNaN(valorAnterior)) return; //!esto es por si queremos convertir a 'float' con las funciones de arriba, una string vacia. que es igual a 'NaN'
    this.valorActual = this.calculador[this.tipoOperacion](valorAnterior,valorActual).toString();
  }
}

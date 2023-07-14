const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll(".numero"); //esto selecciona todos los elementos que tengan x clase.
const botonesOperadores = document.querySelectorAll(".operador");

const display = new Display(displayValorAnterior,displayValorActual); //esto va a ir actualizando los valores que le vayamos dando 

botonesNumeros.forEach(boton => {
    boton.addEventListener("click", ()=> display.agregarNumero(boton.innerHTML));//*esto hace que al hacer clic, agrege el valor que ya esta cargado en el boton dentro del html.
});

botonesOperadores.forEach(boton => {
    boton.addEventListener("click", ()=> display.computar(boton.value)); //value = el valor que le agregamos en el html a cada operador
});

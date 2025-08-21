// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigos() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre ==="") {
        alert("por favor, ingresa un nombre valido");
        return;
    }

    console.log("amigo agregado:", nombre);

    input.value = "";

    amigos.push(nombre);
    mostrarAmigos();
    input.value = ""; 
    //limpiar input
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }

}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("la lista esta vacia. Agrega nombres antes de sortear");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let resultado = amigos[indiceAleatorio];
    document.getElementById("resultado").textContent = "El amigo secreto es:" + resultado;
}

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo() {
  const nombreInput = document.getElementById("amigo");
  const nombre = nombreInput.value.trim(); // Elimina espacios en blanco al inicio y al final

  if (!nombre) {
    alert("Debes ingresar un nombre.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Este amigo ya está en la lista.");
    nombreInput.value = "";
    nombreInput.focus();
    return;
  }

  amigos.push(nombre);
  nombreInput.value = "";
  nombreInput.focus();
  mostrarAmigos();
}

function mostrarAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach(amigo => {
    const item = document.createElement("li");
    item.textContent = amigo;
    listaAmigos.appendChild(item);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

  // Opcional: Limpiar la lista después del sorteo
  // amigos.length = 0;
  // mostrarAmigos();
}
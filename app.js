// Mi mejor esfuerzo

const amigos = [];

function agregarAmigo() {
  const nombreInput = document.getElementById("amigo");
  const nombre = nombreInput.value.trim();

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

  // Limpiar la lista de amigos
  amigos.length = 0;
  mostrarAmigos();

  // Reiniciar el juego
  setTimeout(reiniciarJuego, 2000); // Espera 2 segundos antes de reiniciar
}

function reiniciarJuego() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar el resultado
}

  
  // amigos.length = 0;
  // mostrarAmigos();

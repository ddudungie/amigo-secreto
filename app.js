let amigos = [];
let resultado = document.getElementById("resultado");

// Función para agregar un amigo a la lista
function agregarAmigo() {
  let amigoInput = document.getElementById("amigo");
  let nombre = amigoInput.value;

  // 2. Validar que la entrada no esté vacía
  if (nombre.trim() === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);
  // 4. Limpiar el campo de entrada
  amigoInput.value = "";
  mostrarListaAmigos();
}

// Función para mostrar la lista de amigos en la página
function mostrarListaAmigos() {
  // 1. Obtener el elemento de la lista
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  amigos.forEach(nombre => {
    let nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = nombre;
    listaAmigos.appendChild(nuevoAmigo);
  });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  // 1. Validar que haya amigos disponibles para sortear
  if (amigos.length === 0) {
    alert("¡Ya no quedan más amigos para sortear!");
    // Opcional: Oculta el botón de sortear
    document.querySelector(".button-draw").style.display = "none";
    return;
  }
  
  // 2. Limpiar el resultado anterior
  resultado.innerHTML = "";
  
 
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  
  let resultadoItem = document.createElement("li");
  resultadoItem.innerHTML = `<p>¡El amigo secreto sorteado es: ${amigoSorteado}!</p>`;
  resultado.appendChild(resultadoItem);

  // 6. Eliminar el nombre sorteado del array para que no se repita
  amigos.splice(indiceAleatorio, 1);
}
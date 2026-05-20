function getCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

function saveCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(nombre, precio) {
  let carrito = getCarrito();

  carrito.push({ nombre, precio });

  saveCarrito(carrito);

  alert("Agregado al carrito 🛒");
}
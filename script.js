function contraseña() {
const insertedPassword = document.getElementById("password").value;
const linkDeXada = document.getElementById("link");
if (insertedPassword === "123456789") {
  console.log("Hola Xada, tu link de acceso es el siguiente: " + linkDeXada);
} else {
  console.log("Lo siento pero tu contraseña no parece ser válida, porfa corrígela");
}
}
function hola() {
  const parrafo = document.getElementById("p")
  const consola = "hola";
  parrafo.innerHTML = consola;
}
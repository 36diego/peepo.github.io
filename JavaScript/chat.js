
function enviar() {
  const texto = document.getElementById("input").value;
  if (texto.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = texto;
    document.getElementById("chat").appendChild(li);
    document.getElementById("input").value = "";
  }
}

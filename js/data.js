const savedText = localStorage.getItem("textData");

document.getElementById("data").textContent = savedText ? savedText : "No hay datos guardados";

document.getElementById("buttonText").addEventListener("click", () => {
    const inputText = document.getElementById("inputText").value;

    localStorage.setItem("textData", inputText);
});

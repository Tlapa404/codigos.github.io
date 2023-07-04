const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
const codigo = urlParams.get("codigo");
const texto = document.getElementById("textoBoleto");

function redirectToPage() {
    window.location.href = "index.html"; // Reemplaza la URL con la página a la que deseas redirigir
}

if(codigo=="110821"){
    texto.textContent = "Cocinar juntos la receta que elijas";
}
else if(codigo=="300323"){
    texto.textContent = "Que tu novio te invite al cine";
}
else if(codigo=="05"){
    texto.textContent = "Que tu novio te lleve a comer a donde quieras";
}
else{
    redirectToPage();
}
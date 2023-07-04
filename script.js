botonSecreto = document.getElementById("botonSecreto")
textoSecreto = document.getElementById("textoPista");

sleep = function(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function mostrarPista() {
    textoSecreto.style.opacity = 1;
    op = 1;

    for(i=10; i>=0;i--){
        await sleep(200);
        op = i/10;
        textoSecreto.style.opacity = op;
    }
    textoSecreto.style.opacity = 0;
}

botonSecreto.addEventListener("click", mostrarPista);
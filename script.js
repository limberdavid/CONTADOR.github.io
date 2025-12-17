const contadorElement = document.getElementById("contador");
const mensajeElement = document.getElementById("mensaje");

const btnIncrementar = document.getElementById("btnIncrementar");
const btnDecrementar = document.getElementById("btnDecrementar");
const btnResetear = document.getElementById("btnResetear");
const btnIncrementar5 = document.getElementById("btnIncrementar5");
const btnDecrementar5 = document.getElementById("btnDecrementar5");

let contador = parseInt(localStorage.getItem("contador")) || 0;

function actualizar() {
    contadorElement.textContent = contador;
    contadorElement.classList.remove("positivo", "negativo");

    if (contador > 0) {
        contadorElement.classList.add("positivo");
        mensajeElement.innerHTML = `Estado: <strong>positivo (+${contador})</strong>`;
    } else if (contador < 0) {
        contadorElement.classList.add("negativo");
        mensajeElement.innerHTML = `Estado: <strong>negativo (${contador})</strong>`;
    } else {
        mensajeElement.innerHTML = "Estado: <strong>cero</strong>";
    }

    localStorage.setItem("contador", contador);
}

btnIncrementar.onclick = () => {
    contador++;
    actualizar();
};

btnDecrementar.onclick = () => {
    contador--;
    actualizar();
};

btnIncrementar5.onclick = () => {
    contador += 5;
    actualizar();
};

btnDecrementar5.onclick = () => {
    contador -= 5;
    actualizar();
};

btnResetear.onclick = () => {
    contador = 0;
    actualizar();
};

document.addEventListener("keydown", e => {
    if (e.key === "ArrowUp") contador++;
    if (e.key === "ArrowDown") contador--;
    if (e.key === "+") contador += 5;
    if (e.key === "-") contador -= 5;
    if (e.key === "r" || e.key === "R") contador = 0;
    actualizar();
});

actualizar();

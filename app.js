function modificarTitulo() {
    console.log("Activando funcionalidad");
    let textoInput = document.querySelector("#title-input").value;
    let h1Title = document.querySelector("#main-title");
    console.log(textoInput);
    h1Title.textContent = textoInput;
    h1Title.style.color = generateRandomColor();
}

function generateRandomColor() {
    let intensityR = randomIntensity();
    let intensityG = randomIntensity();
    let intensityB = randomIntensity();
    return `rgb(${intensityR},${intensityG},${intensityB})`;
}

const MAX_RANGE = 256;
function randomIntensity() {
    return Math.random() * MAX_RANGE;
}


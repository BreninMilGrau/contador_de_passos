// Variáveis
let stepCount = 0;

// Elementos do DOM
const countElement = document.getElementById("count");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

// Função para atualizar o contador de passos
function updateStepCount() {
    countElement.textContent = stepCount;
}

// Evento de clique no botão "Dar um Passo"
incrementBtn.addEventListener("click", () => {
    stepCount++;
    updateStepCount();
});

// Evento de clique no botão "Zerar"
resetBtn.addEventListener("click", () => {
    stepCount = 0;
    updateStepCount();
});

// Inicializa o contador
updateStepCount();

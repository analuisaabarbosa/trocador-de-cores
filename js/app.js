// array contendo diferentes códigos de cores hexadecimais
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFD733", "#33FFD7", "#9B33FF", "#FF7F33", "#33FFF6", "#F633FF", "#FFD700", "#A52A2A", "#800080", "#00FF00", "#000000", "#808080", "#C0C0C0", "#FF1493", "#1E90FF"];

// seleciona o botão com o id 'btn' do html
const btn = document.getElementById('btn');

// seleciona o elemento com a classe 'color' que exibe o código da cor
const color = document.querySelector('.color');

// adiciona um evento de clique ao botão
btn.addEventListener('click', function () {
    // obtém um índice aleatório baseado no tamanho do array colors
    const randomNumber = getRandomNumber();

    // exibe o número aleatório no console para depuração
    console.log(randomNumber);

    // altera a cor de fundo do body para uma cor aleatória do array
    document.body.style.backgroundColor = colors[randomNumber];

    // altera o texto do elemento com a classe 'color' para a cor escolhida
    color.textContent = colors[randomNumber];
})

// função que gera um número aleatório entre 0 e o comprimento do array colors
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
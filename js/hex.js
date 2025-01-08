// array contendo os valores hexadecimais que podem compor uma cor
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// seleciona o botão com o id 'btn' do html
const btn = document.getElementById('btn');

// seleciona o elemento com a classe 'color' que exibirá o código da cor gerada
const color = document.querySelector('.color');

// adiciona um evento de clique ao botão
btn.addEventListener('click', function () {
    // inicializa a variável com o símbolo '#' que inicia um código de cor hexadecimal
    let hexColor = "#";

    // cria um loop que itera 6 vezes para formar um código hexadecimal de 6 caracteres
    for(let i = 0; i < 6; i++) {
        // concatena um valor aleatório do array 'hex' à variável hexColor
        hexColor += hex[getRandomNumber()];
    }

    // atualiza o texto do elemento com a classe 'color' para exibir o código da cor gerada
    color.textContent = hexColor;

    // altera a cor de fundo do corpo da página para a cor gerada
    document.body.style.backgroundColor = hexColor;
})

// função que gera um número aleatório entre 0 e o comprimento do array 'hex'
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFD733", "#33FFD7", "#9B33FF", "#FF7F33", "#33FFF6", "#F633FF", "#FFD700", "#A52A2A", "#800080", "#00FF00", "#000000", "#808080", "#C0C0C0", "#FF1493", "#1E90FF"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
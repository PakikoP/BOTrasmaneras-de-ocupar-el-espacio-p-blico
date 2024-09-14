const colors = ['#ffffff', '#0091ff', '#ff4e37', '#ccff66', '#33ffcc'];
let currentIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

setInterval(changeBackgroundColor, 5000); // Cambia cada 5 segundos
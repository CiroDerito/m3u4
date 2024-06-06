const cuadrados = document.querySelectorAll('.cuadrado');

cuadrados.forEach(cuadrado => {
    cuadrado.addEventListener('click', () => {
        const randomColor = getRandomColor();
        cuadrado.style.backgroundColor = randomColor;
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

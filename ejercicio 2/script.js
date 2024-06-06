const textarea = document.getElementById('texto');
const contador = document.getElementById('contador');
const limiteCaracteres = 100;

textarea.addEventListener('input', function() {
    const caracteresActuales = textarea.value.length;
    contador.textContent = caracteresActuales;
    
    if (caracteresActuales > limiteCaracteres) {
        contador.style.color = 'red';
    } else {
        contador.style.color = 'black';
    }
});

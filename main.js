import './style.css';
import './src/blackjack';


setTimeout(() => {
    const nombreJugador = prompt('Indica tu nombre : ');
    document.getElementById('nombre-jugador').innerText = nombreJugador;
}, 10);


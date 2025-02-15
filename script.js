const buttonNo = document.querySelector('#no');
const buttonYes = document.querySelector('#yes');

let fontSize = 2;

let messages = [
  'Estas seguro?',
  'Piensalo bien',
  'Piensalo muy bien',
  'Piensalo',
  'Mira el otro botón',
  'porfis',
];

buttonNo.addEventListener('click', () => {
  fontSize += 0.5;
  buttonYes.style.fontSize = `${fontSize}rem`;

  const indexRandom = Math.floor(Math.random() * messages.length);
  buttonNo.textContent = messages[indexRandom];

  // Mueve el botón "No" a una posición aleatoria dentro de la ventana
  const maxX = window.innerWidth - buttonNo.offsetWidth;
  const maxY = window.innerHeight - buttonNo.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  buttonNo.style.position = 'absolute';
  buttonNo.style.left = `${randomX}px`;
  buttonNo.style.top = `${randomY}px`;
});

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex';
});

document.body.style.backgroundColor = '#4B4B4B';
document.body.style.color = 'white'; // Para mejorar la visibilidad

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex';
  document.body.style.backgroundColor = '#4B4B4B'; // Cambia el fondo a gris oscuro
  
  // También cambiar el fondo del mensaje si es necesario
  document.querySelector('#message').style.backgroundColor = '#4B4B4B';
});
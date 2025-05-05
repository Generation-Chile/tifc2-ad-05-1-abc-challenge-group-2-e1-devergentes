 //Cambio de colores al azar
function getRandomColor() {
    const colors = ['green', 'blue', 'red'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  
  // Función para cambiar el color de un elemento h5 al hacer clic
  function changeColorOnClick(event) {
    if (event.target.tagName === 'H5') {
      event.target.style.color = getRandomColor();
    }
  }
  
  // Event listener
document.addEventListener('DOMContentLoaded', function() {
document.addEventListener('click', changeColorOnClick);
  });
function getRandomColor() {
    const colors = ['green', 'blue', 'red'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
  
  
function changeColorOnClick(event) {
if (event.target.tagName === 'H5') {
    event.target.style.color = getRandomColor();
}
}
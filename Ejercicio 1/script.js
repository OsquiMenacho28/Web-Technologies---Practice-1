const coloredElement = document.getElementById("element-container");
const colors = ['red', 'yellow', 'green', 'blue', 'purple', 'white', 'black', 'beige', 'lightblue', 'coral'];
coloredElement.addEventListener('mouseenter', function() {
    var rand = Math.floor(Math.random() * colors.length);
    var newColor = colors[rand];
    coloredElement.style.backgroundColor = newColor;
});
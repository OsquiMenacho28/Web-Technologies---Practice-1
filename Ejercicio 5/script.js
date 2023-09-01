var counter = document.getElementById("lblCounter");
const incrementButton = document.getElementById("increment-button");
var i = 0;
incrementButton.addEventListener('click', function() {
    i++;
    counter.innerText = i;
});
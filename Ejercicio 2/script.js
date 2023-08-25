var menuItem = document.getElementsByClassName("dropdown-button");
var lists = document.getElementsByClassName("dropdown-menu");
for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", function() {
        if (lists[i].style.display === 'none' || lists[i].style.display === '') {
            lists[i].style.display = 'block';
        }
        else {
            lists[i].style.display = 'none';
        }
    });
}
window.addEventListener("click", function(e) {
    for (let i = 0; i < menuItem.length; i++) {
        if (!menuItem[i].contains(e.target)) {
            lists[i].style.display = 'none';
        }
    }
});
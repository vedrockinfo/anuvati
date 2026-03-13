document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

document.onkeydown = function(e) {
    if (e.keyCode == 123) { // F12
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { // Ctrl+Shift+I
        return false;
    }
    if (e.ctrlKey && e.keyCode == 85) { // Ctrl+U
        return false;
    }
};
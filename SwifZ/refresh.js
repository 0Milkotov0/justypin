function refresh() {  
    resetGame();
    myInput.focus();
    document.getElementById('window').scrollTop = 0;
    popup.classList.remove("open-popup");
}

function refreshpage(){
    location.reload();
}


function refresh() {  
    myInput.focus();
    document.getElementById('window').scrollTop = 0;
    popup.classList.remove("open-popup");
    resetGame();
    a=0;
}

function refreshpage(){
    location.reload();
}


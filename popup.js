/* opens popup window */

function popupopen(){
    popup.classList.toggle("open-popup");
 }

/* scroll */
var targetDivision = document.getElementById('window');/* place where you type */
var sussyniqqa= 1
function scroll(charIndex){
let offp= document.querySelectorAll('.window span')[sussyniqqa].offsetTop;
let offw= document.querySelectorAll('.window span')[charIndex].offsetTop;
        if(offw>offp){
            sussyniqqa=charIndex;
            targetDivision.scrollTop += 37;
        }
        if(offw<offp){
            sussyniqqa=charIndex;
            targetDivision.scrollTop = -37;
        }
    }        
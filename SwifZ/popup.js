/* opens popup window */

function popupopen(){
    popup.classList.toggle("open-popup");
 }

/* scroll */
var targetDivision = document.getElementById('window');

let sentencecount=0;
let back=0;

function scroll(charIndex){

    if (charIndex>back && charIndex%55==0){
        sentencecount+=33;
        back=charIndex;
        console.log(back);
    }

    if ( back>charIndex && (charIndex+1)%55==0){
        sentencecount-=33;
        back=0;
        console.log(sentencecount);
    }


    targetDivision.scrollTop = sentencecount;
}
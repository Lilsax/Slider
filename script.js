let  gesuredZone = document.querySelector('.container');
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

document.querySelector('.buttons img:first-of-type').addEventListener('click', handleBackSlide);
document.querySelector('.buttons img:last-of-type').addEventListener('click' , handleForwardSlide );

function handleForwardSlide ()
{
function handleForwardSlide () {
    container= document.querySelector('.container');
    container.style.marginLeft = "-1077px";
    container.style.transition = "margin-left 0.3s";
    container.style.transition = "margin-left 0.3s";
    container.style.marginLeft = '-1077px';
    container.style.transition = 'margin-left 0.3s';
    container.style.transition = 'margin-left 0.3s';
}

function handleBackSlide ()
{
function handleBackSlide () {
    let container = document.querySelector('.container');
    container.style.marginLeft = "0px";
    container.style.marginLeft = '0px';
}

var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;
let  gesuredZone = document.querySelector('.container');

gesuredZone.addEventListener('touchstart', (event)=> {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
@@ -36,18 +31,18 @@ gesuredZone.addEventListener('touchend', (event)=> {
}, false);

function handleGesure() {
    let container =document.querySelector('.container');
    let container = document.querySelector('.container');

    if (touchendX < touchstartX) {
        alert("to the left");
        container.style.marginLeft = "-550px";
        container.style.transition = "margin-left 0.3s";

        container.style.marginLeft = '-550px';
        container.style.transition = 'margin-left 0.3s';
    }

    else if (touchendY > touchstartY) {
        alert("to the righjt");
        container.style.marginLeft = "0px";
        container.style.transition = "margin-left 0.3s";

        container.style.marginLeft = '0px';
        container.style.transition = 'margin-left 0.3s';
    }

}


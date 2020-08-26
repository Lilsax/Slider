
document.querySelector('.buttons img:first-of-type').addEventListener('click', handleBackSlide);
document.querySelector('.buttons img:last-of-type').addEventListener('click' , handleForwardSlide );



function handleForwardSlide ()
{
    container= document.querySelector('.container');
    container.style.marginLeft = "-1077px";
    container.style.transition = "margin-left 0.3s";
    container.style.transition = "margin-left 0.3s";
}

function handleBackSlide ()
{
    let container = document.querySelector('.container');
    container.style.marginLeft = "0px";
}

var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;
let  gesuredZone = document.querySelector('.container');

gesuredZone.addEventListener('touchstart', (event)=> {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gesuredZone.addEventListener('touchend', (event)=> {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesure();
}, false);

function handleGesure() {
    let container =document.querySelector('.container');

    if (touchendX < touchstartX) {
        alert("to the left");
        container.style.marginLeft = "-550px";
        container.style.transition = "margin-left 0.3s";
    }

    else if (touchendY > touchstartY) {
        alert("to the righjt");
        container.style.marginLeft = "0px";
        container.style.transition = "margin-left 0.3s";
    }

}

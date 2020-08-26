let  gesuredZone = document.querySelector('.container');
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

document.querySelector('.buttons img:first-of-type').addEventListener('click', handleBackSlide);
document.querySelector('.buttons img:last-of-type').addEventListener('click' , handleForwardSlide );
let  gesuredZone = document.querySelector('.container');
let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

function handleForwardSlide () {
    container= document.querySelector('.container');
    container.style.marginLeft = "-1077px";
    container.style.transition = "margin-left 0.3s";
    container.style.transition = "margin-left 0.3s";
    container.style.marginLeft = '-1077px';
    container.style.transition = 'margin-left 0.3s';
    container.style.transition = 'margin-left 0.3s';
}

function handleBackSlide () {
    let container = document.querySelector('.container');
    container.style.marginLeft = '0px';
}

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

        container.style.marginLeft = '0px';
        container.style.transition = 'margin-left 0.3s';
    }

}


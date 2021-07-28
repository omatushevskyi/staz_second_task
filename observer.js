const mainElement = document.querySelector('.main_content');
const progressBarTop = document.querySelector('.with-progress-reading-bar');
const progressBarBottom = document.querySelector('.with-progress-reading-bar-bottom');
let inViewport = false;

const observer = new IntersectionObserver(handlerElement);

observer.observe(mainElement);

function handlerElement(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            inViewport = true;
            console.log(inViewport);
        } else {
            inViewport = false;
            console.log(inViewport);
        }
    })
}

function getScrollProgress(el) {
    let progressPercentage = 0;

    if (inViewport) {
        let coords = el.getBoundingClientRect();
        let height = coords.height;
        // console.log('height: ' + coords.height);
        // console.log('top: ' + coords.top);
        if(coords.top < 0){
            progressPercentage = (Math.abs(coords.top) / height) * 100;
            // console.log('percent: ' + progressPercentage);
        }
    }
    return progressPercentage;
}

function showReadingProgress() {
    progressBarTop.style.width = getScrollProgress(mainElement) + '%';
    progressBarBottom.style.width = getScrollProgress(mainElement) + '%';
}

let timeout;

window.onscroll = function () {
    if (timeout) {
        window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(function () {
        showReadingProgress();
    });
}








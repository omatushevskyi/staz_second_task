let fullHeight, innerHeight;

const progressBar = document.querySelector('.with-progress-reading-bar');

window.addEventListener('scroll', fillProgressBar);
window.addEventListener('resize', fillProgressBar);

function fillProgressBar() {
    fullHeight = document.querySelector('.main_content').scrollHeight;
    innerHeight = window.innerHeight;
    progressBar.style.width = (pageYOffset * 100 / (fullHeight - innerHeight)) + '%';
}

fillProgressBar();

// window.addEventListener('scroll', temp);
// window.addEventListener('resize', temp);
//
// function temp(){
//     let heightOfElement = document.querySelector('.main_content').scrollHeight;
//     console.log(heightOfElement);
//     let innerHeightOfElement = window.innerHeight;
//     progressBar.style.width = (pageYOffset * 100 / (heightOfElement - innerHeightOfElement)) + '%';
// }
//
// temp();

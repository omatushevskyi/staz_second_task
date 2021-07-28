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

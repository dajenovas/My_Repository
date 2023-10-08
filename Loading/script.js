const dotElement = document.querySelector('.dot-animation');
let dotCount = 1;

function updateDotAnimation() {
    dotElement.textContent = '.'.repeat(dotCount % 4);
    dotCount++;
}

setInterval(updateDotAnimation, 500);

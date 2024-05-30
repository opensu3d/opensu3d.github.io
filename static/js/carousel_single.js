const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;
const size = images[0].clientWidth;

function updateSlide() {
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    counter++;
    updateSlide();
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    updateSlide();
});

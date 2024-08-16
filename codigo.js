let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Cambia de imagen cada 5 segundos

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide); // Muestra la primera imagen
	
	document.querySelectorAll('.photo-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.backgroundColor = '#6a4f4b'; // Cambia el color al pasar el mouse
    });
    card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = '#5DC2B2'; // Vuelve al color original
    });
});
});
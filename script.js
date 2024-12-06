// Seleção dos elementos do carrossel
const imagesContainer = document.querySelector('.carousel-images');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

// Array com URLs de imagens válidas
const imageUrls = [
    'https://picsum.photos/seed/picsum/600/300', // Gato fofo
    'https://picsum.photos/600/300', // Imagem aleatória
    'https://picsum.photos/id/237/600/300', // Texto personalizado
];

// Função para carregar imagens dinamicamente
function loadImages() {
    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Imagem do Carrossel';
        imagesContainer.appendChild(img);
    });
}

// Lógica do carrossel
let currentIndex = 0;

function updateCarousel() {
    const width = imagesContainer.clientWidth;
    imagesContainer.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    updateCarousel();
});

// Ajustar o carrossel ao redimensionar a janela
window.addEventListener('resize', updateCarousel);

// Inicialização
loadImages();
updateCarousel();

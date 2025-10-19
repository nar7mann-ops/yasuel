// Плавное появление страницы
window.addEventListener('load', () => {
  document.body.style.opacity = 0;
  document.body.style.transition = 'opacity 1.2s ease';
  setTimeout(() => (document.body.style.opacity = 1), 100);
});

// Когда видео загрузилось — убираем чёрный фон
const video = document.getElementById('bg-video');
video.addEventListener('loadeddata', () => {
  video.classList.add('loaded');
  document.body.style.backgroundColor = 'transparent';
});

// ✨ Эффект блёсток
const canvas = document.getElementById('sparkles');
const ctx = canvas.getContext('2d');
let w, h;
let sparkles = [];

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Создание одной блёстки
function createSparkle() {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    size: Math.random() * 2 + 0.5,
    speedY: Math.random() * 0.5 + 0.2,
    opacity: Math.random() * 0.6 + 0.3
  };
}

// Создаём массив блёсток
for (let i = 0; i < 120; i++) {
  sparkles.push(createSparkle());
}


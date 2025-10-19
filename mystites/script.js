// Плавное появление при загрузке
window.addEventListener('load', () => {
  document.body.style.opacity = 0;
  document.body.style.transition = 'opacity 1.2s ease';
  setTimeout(() => (document.body.style.opacity = 1), 100);
});

// Когда видео загрузилось — делаем его видимым и убираем чёрный фон
const video = document.getElementById('bg-video');
video.addEventListener('loadeddata', () => {
  video.classList.add('loaded');
  document.body.style.backgroundColor = 'transparent';
});

// Эффект лёгкого свечения при клике
document.querySelectorAll('.btn, .about-btn').forEach(button => {
  button.addEventListener('click', e => {
    e.target.style.boxShadow = '0 0 60px #ff33ff';
    setTimeout(() => {
      e.target.style.boxShadow = '';
    }, 400);
  });
});
const audio = document.querySelector('audio');
const pageHeight = document.body.clientHeight;

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const volume = 1 - scrollPosition / pageHeight;

  if (volume >= 0 && volume <= 1) {
    audio.volume = volume;
  }
});

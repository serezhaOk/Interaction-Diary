const video = document.getElementById('interactive-video');

video.addEventListener('loadedmetadata', () => {
  video.pause();
  video.currentTime = 0;
});

document.querySelector('.phone').addEventListener('mousemove', (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const percent = x / rect.width;

  if (!isNaN(video.duration) && isFinite(video.duration)) {
    video.currentTime = percent * video.duration;
  }
});

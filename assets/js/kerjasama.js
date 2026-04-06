window.initKerjasamaLogic = function() {
    const track = document.querySelector('.logo-track');

    if (!track) return;

    // Berhenti saat mouse masuk
    track.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
    });

    // Lanjut jalan saat mouse keluar
    track.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
    });
};
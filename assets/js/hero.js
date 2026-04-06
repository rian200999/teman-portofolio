// assets/js/hero.js
window.initHeroLogic = function() {
    // Vanilla JS 3D Tilt Effect untuk bento box
    const tiltElements = document.querySelectorAll('[data-tilt]');
    
    if (tiltElements.length === 0) return;

    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left; // Posisi X mouse di dalam kotak
            const y = e.clientY - rect.top;  // Posisi Y mouse di dalam kotak
            
            const centerX = rect.width / 2; // Titik tengah X
            const centerY = rect.height / 2; // Titik tengah Y
            
            // Hitung rotasi berdasarkan jarak dari tengah (Maks 10 derajat)
            const rotateX = ((y - centerY) / centerY) * -10; 
            const rotateY = ((x - centerX) / centerX) * 10;
            
            // Terapkan kemiringan dan sedikit pembesaran
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        });
        
        el.addEventListener('mouseleave', () => {
            // Balik ke posisi awal dengan transisi halus
            el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
            el.style.transition = 'transform 0.5s ease, border-color 0.3s ease, box-shadow 0.3s ease';
        });
        
        el.addEventListener('mouseenter', () => {
            // Hilangkan transisi saat mouse bergerak di dalam biar responsif
            el.style.transition = 'none'; 
        });
    });
};
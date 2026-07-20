window.initLayananLogic = function() {
    const cards = document.querySelectorAll('.layanan-card');

    if (cards.length === 0) return;

    cards.forEach(card => {
        const glow = card.querySelector('.card-glow');

        card.addEventListener('mousemove', (e) => {
            // Dapatkan kordinat card di layar
            const rect = card.getBoundingClientRect();
            
            // Hitung posisi X dan Y mouse relatif terhadap card
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Pindahkan posisi efek glow (senter)
            glow.style.left = `${x}px`;
            glow.style.top = `${y}px`;
        });

        // Pastikan glow hilang rapi saat mouse keluar (opsional tapi bikin smooth)
        card.addEventListener('mouseleave', () => {
            glow.style.opacity = '0';
            setTimeout(() => {
                glow.style.opacity = ''; // reset ke CSS bawaan
            }, 300);
        });
    });
};
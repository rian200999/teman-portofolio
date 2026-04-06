window.initLayananLogic = function() {
    const cards = document.querySelectorAll('.layanan-card');

    cards.forEach(card => {
        const glow = card.querySelector('.card-glow');

        card.addEventListener('mousemove', (e) => {
            // Dapatkan kordinat card di layar
            const rect = card.getBoundingClientRect();
            
            // Hitung posisi X dan Y mouse relatif terhadap card
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Pindahkan posisi efek glow
            glow.style.left = `${x}px`;
            glow.style.top = `${y}px`;
        });
    });
};
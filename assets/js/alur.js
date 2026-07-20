window.initAlurLogic = function() {
    const alurCards = document.querySelectorAll('.alur-card');

    if (alurCards.length === 0) return;

    alurCards.forEach(card => {
        const icon = card.querySelector('.alur-icon i');

        // Pas mouse masuk ke kartu, ikonnya loncat dikit (subtle bounce)
        card.addEventListener('mouseenter', () => {
            if (icon) {
                icon.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                icon.style.transform = 'scale(1.2) translateY(-5px)';
            }
        });

        // Pas mouse keluar, ikon balik ke ukuran normal dengan mulus
        card.addEventListener('mouseleave', () => {
            if (icon) {
                icon.style.transition = 'transform 0.3s ease';
                icon.style.transform = 'scale(1) translateY(0)';
            }
        });
    });
};
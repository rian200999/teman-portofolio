window.initExclusiveLogic = function () {
    const vipCard = document.querySelector('.exclusive-card');
    const vipGlow = document.querySelector('.vip-glow');

    if (vipCard && vipGlow) {
        vipCard.addEventListener('mousemove', (e) => {
            const rect = vipCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Efek senter mengikuti kursor khusus di area kartu VIP
            vipGlow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(251, 191, 36, 0.15) 0%, rgba(0,0,0,0) 60%)`;
        });

        vipCard.addEventListener('mouseleave', () => {
            // Kembali ke posisi default
            vipGlow.style.background = `radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, rgba(0,0,0,0) 70%)`;
        });
    }
};
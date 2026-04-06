window.initHargaLogic = function() {
    // 1. Animasi Counter untuk Harga
    const priceCounters = document.querySelectorAll('.counter-price');
    
    if (priceCounters.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target');
                        const count = +counter.innerText;
                        const inc = target / 20;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc);
                            setTimeout(updateCount, 25);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCount();
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        priceCounters.forEach(counter => observer.observe(counter));
    }

    // 2. Efek Interaktif Kursor di Kartu Gelap
    const passCards = document.querySelectorAll('.tech-pass-card');
    
    passCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Bikin efek gradient tipis ngikutin mouse
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(52, 211, 153, 0.1) 0%, #011E17 50%)`;
        });

        card.addEventListener('mouseleave', () => {
            // Balikin ke ijo gelap pekat
            card.style.background = '#011E17';
        });
    });
};
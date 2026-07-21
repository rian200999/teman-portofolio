window.initTestimoniLogic = function() {
    // Inisialisasi Swiper
    const swiper = new Swiper('.testimoni-swiper', {
        // Parameter dasar
        slidesPerView: 1, // Default di mobile
        spaceBetween: 30, // Jarak antar kartu
        loop: true,       // Muter terus
        grabCursor: true, // Kursor tangan
        
        // Auto play biar gak sepi
        autoplay: {
            delay: 3500, // Tiap 3.5 detik geser
            disableOnInteraction: false, // Tetep jalan meski abis disentuh user
        },

        // Titik-titik di bawah
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Responsif Breakpoints
        breakpoints: {
            // Ketika lebar layar >= 768px (Tablet)
            768: {
                slidesPerView: 2,
            },
            // Ketika lebar layar >= 1024px (Desktop)
            1024: {
                slidesPerView: 3,
            }
        }
    });

    // Tambahan efek tilt tipis menggunakan vanilla JS (karena Swiper punya struktur DOM yang beda)
    const testiCards = document.querySelectorAll('.testi-card');
    
    testiCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Efeknya aku halusin jadi 2.5 biar nggak pusing pas di-slider
            const rotateX = ((y - centerY) / centerY) * -2.5;
            const rotateY = ((x - centerX) / centerX) * 2.5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            card.style.borderColor = 'var(--tp-light)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
            card.style.borderColor = 'rgba(226, 211, 244, 0.8)';
            card.style.transition = 'transform 0.5s ease, border-color 0.5s ease';
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
    });
};
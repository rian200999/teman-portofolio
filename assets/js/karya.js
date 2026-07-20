window.initKaryaLogic = function() {
    const track = document.getElementById('karya-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (!track || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    const moveCarousel = () => {
        const slides = Array.from(track.children);
        if (slides.length === 0) return;

        // Ambil lebar persis dari 1 elemen .karya-slide
        const slideWidth = slides[0].getBoundingClientRect().width;
        
        // Pindahkan track
        const moveDistance = slideWidth * currentIndex;
        track.style.transform = `translateX(-${moveDistance}px)`;
    };

    // Tombol Next
    nextBtn.addEventListener('click', () => {
        const slides = Array.from(track.children);
        // Hitung berapa kartu yang tampil di layar (misal: Desktop = 3, HP = 1)
        const cardsVisible = Math.round(track.parentElement.offsetWidth / slides[0].getBoundingClientRect().width);
        
        // Cek jangan sampai geser melebihi sisa kartu
        if (currentIndex < slides.length - cardsVisible) {
            currentIndex++;
            moveCarousel();
        }
    });

    // Tombol Prev
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            moveCarousel();
        }
    });

    // Sesuaikan posisi jika layar di-resize (dibesarkan/dikecilkan)
    window.addEventListener('resize', () => {
        // Reset index ke 0 kalau di-resize biar nggak error
        currentIndex = 0;
        moveCarousel();
    });
};
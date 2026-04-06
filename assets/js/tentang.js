window.initTentangLogic = function() {
    // 1. Animasi Flip Card untuk Touchscreen (Mobile)
    const flipCard = document.getElementById('flip-card-tentang');
    if (flipCard) {
        flipCard.addEventListener('click', function() {
            this.classList.toggle('is-flipped');
        });
    }

    // 2. Animasi Number Counter
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Makin kecil makin cepat

    // Menggunakan Intersection Observer biar angkanya gerak pas di-scroll ke layarnya aja
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    
                    // Hitung langkah penambahan
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target; // Pastikan angka akhirnya pas
                    }
                };
                updateCount();
                observer.unobserve(counter); // Jalanin sekali aja
            }
        });
    }, { threshold: 0.5 }); // Jalan kalau 50% section udah kelihatan

    counters.forEach(counter => {
        observer.observe(counter);
    });
};
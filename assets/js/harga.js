window.initHargaLogic = function() {
    // Animasi Counter Angka Harga
    const priceCounters = document.querySelectorAll('.counter-price');
    
    if (priceCounters.length > 0) {
        // Pakai IntersectionObserver biar animasi jalan pas section-nya dilihat aja
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target');
                        const count = +counter.innerText;
                        
                        // Kecepatan nambah angka (makin besar pembagi, makin lambat)
                        const inc = target / 20;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc);
                            setTimeout(updateCount, 30);
                        } else {
                            counter.innerText = target; // Pastikan berhenti pas di angka target
                        }
                    };
                    
                    updateCount();
                    observer.unobserve(counter); // Biar animasinya jalan sekali aja pas pertama kali di-scroll
                }
            });
        }, { threshold: 0.5 }); // Trigger saat setengah (50%) kartu harganya udah masuk layar

        priceCounters.forEach(counter => observer.observe(counter));
    }
};
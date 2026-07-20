window.initKomunitasLogic = function() {
    const kCounters = document.querySelectorAll('.k-counter');
    
    if (kCounters.length === 0) return;

    // Intersection Observer buat cek kalau sectionnya udah masuk layar (kelihatan)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    
                    // Makin gede pembaginya, makin lambat animasinya
                    const inc = target / 50;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 30);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
                
                // Unobserve biar animasinya jalan sekali aja dan nggak ngulang terus pas di-scroll ke atas
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 }); // Trigger saat 50% elemen masuk layar

    kCounters.forEach(c => observer.observe(c));
};
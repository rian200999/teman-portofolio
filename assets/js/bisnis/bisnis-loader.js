document.addEventListener("DOMContentLoaded", async () => {
    // 1. Array file HTML yang mau di-load ke dalam main content
    const sections = [
        'sections/bisnis/hero.html',
        'sections/bisnis/about.html',
        'sections/bisnis/showcase.html',
        'sections/bisnis/pricing.html',
        'sections/bisnis/cta.html'
    ];

    const contentContainer = document.getElementById('bisnis-content');

    // 2. Fungsi Fetch & Inject HTML
    async function loadComponent(url, targetElement) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const html = await response.text();
                if (targetElement) {
                    targetElement.innerHTML += html;
                }
            } else {
                console.error(`Gagal meload ${url}: ${response.status}`);
            }
        } catch (error) {
            console.error(`Error fetch ${url}:`, error);
        }
    }

    // 3. Load Global Navbar & Footer (Sesuaikan URL jika nama filemu beda)
    const navContainer = document.getElementById('navbar-placeholder');
    const footerContainer = document.getElementById('app-footer');
    
    await loadComponent('components/navbar.html', navContainer);
    await loadComponent('components/footer.html', footerContainer);

    // 4. Load Semua Section Bisnis secara berurutan
    for (const section of sections) {
        await loadComponent(section, contentContainer);
    }

    // 5. Inisialisasi AOS (Animasi Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

    // 6. Jalankan interaksi dinamis/animasi custom setelah HTML sukses terpasang
    initBisnisInteractions();
});

function initBisnisInteractions() {
    // Efek Hover Glow untuk About Card
    const aboutCards = document.querySelectorAll('.b2b-about-card');
    aboutCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    
    // Fungsi load komponen eksternal
    async function loadComponent(elementId, componentPath) {
        try {
            const response = await fetch(componentPath);
            if (!response.ok) throw new Error(`Gagal memuat ${componentPath}`);
            const html = await response.text();
            const container = document.getElementById(elementId);
            if(container) { container.innerHTML = html; }
        } catch (error) { console.error(error); }
    }

    // Load Navbar & Footer
    await loadComponent('navbar-placeholder', 'components/navbar.html');
    await loadComponent('footer-placeholder', 'components/footer.html');

    // Load Sections
    await loadComponent('hero-placeholder', 'sections/faq/hero.html');
    await loadComponent('accordion-placeholder', 'sections/faq/accordion.html');
    await loadComponent('cta-placeholder', 'sections/faq/cta.html');

    // Exec navbar internal script
    setTimeout(() => {
        const navbarContainer = document.getElementById('navbar-placeholder');
        if(navbarContainer) {
            const scripts = navbarContainer.querySelectorAll('script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                newScript.text = script.text;
                document.body.appendChild(newScript);
            });
        }

        // --- ACCORDION LOGIC ---
        // Karena div-nya baru dirender, kita taruh listener di dalam setTimeout / setelah fetch
        const faqs = document.querySelectorAll('.faq-item');
        
        faqs.forEach(faq => {
            const header = faq.querySelector('.faq-header');
            
            header.addEventListener('click', () => {
                const isActive = faq.classList.contains('active');
                
                // Tutup semua dulu (bikin efek buka-tutup eksklusif)
                faqs.forEach(item => {
                    item.classList.remove('active');
                });

                // Kalau awalnya belum active, buka. Kalau udah active biarin nutup.
                if(!isActive) {
                    faq.classList.add('active');
                }
            });
        });

    }, 200);

    if (typeof AOS !== 'undefined') { AOS.init({ once: true, duration: 800, offset: 50 }); }
});

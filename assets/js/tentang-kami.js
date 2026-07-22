
document.addEventListener('DOMContentLoaded', async () => {
    
    // Fungsi untuk meload komponen eksternal
    async function loadComponent(elementId, componentPath) {
        try {
            const response = await fetch(componentPath);
            if (!response.ok) throw new Error(`Gagal memuat ${componentPath}`);
            const html = await response.text();
            const container = document.getElementById(elementId);
            if(container) {
                container.innerHTML = html;
            }
        } catch (error) {
            console.error(error);
        }
    }

    // Load Navbar & Footer
    await loadComponent('navbar-placeholder', 'components/navbar.html');
    await loadComponent('footer-placeholder', 'components/footer.html');

    // Load Page Sections
    await loadComponent('hero-placeholder', 'sections/tentang-kami/hero.html');
    await loadComponent('story-placeholder', 'sections/tentang-kami/story.html');
    await loadComponent('manifesto-placeholder', 'sections/tentang-kami/manifesto.html');
    await loadComponent('cta-placeholder', 'sections/tentang-kami/cta.html');

    // Re-evaluasi script internal dari navbar.html (biar auto-active nya jalan)
    const navbarContainer = document.getElementById('navbar-placeholder');
    if(navbarContainer) {
        const scripts = navbarContainer.querySelectorAll('script');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            newScript.text = script.text;
            document.body.appendChild(newScript);
        });
    }

    // Inisialisasi AOS (Animasi Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            duration: 800,
            offset: 50
        });
    }
});


document.addEventListener('DOMContentLoaded', async () => {
    async function loadComponent(elementId, componentPath) {
        try {
            const response = await fetch(componentPath);
            if (!response.ok) throw new Error(`Gagal memuat ${componentPath}`);
            const html = await response.text();
            const container = document.getElementById(elementId);
            if(container) { container.innerHTML = html; }
        } catch (error) { console.error(error); }
    }

    await loadComponent('navbar-placeholder', 'components/navbar.html');
    await loadComponent('footer-placeholder', 'components/footer.html'); 

    await loadComponent('hero-placeholder', 'sections/harga/hero.html');
    await loadComponent('pricing-cards-placeholder', 'sections/harga/pricing-cards.html');
    await loadComponent('payment-flow-placeholder', 'sections/harga/payment-flow.html');
    await loadComponent('addons-placeholder', 'sections/harga/addons.html');
    await loadComponent('cta-katalog-placeholder', 'sections/harga/cta-katalog.html');

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
    }, 100);

    if (typeof AOS !== 'undefined') { AOS.init({ once: true, duration: 800, offset: 50 }); }
});

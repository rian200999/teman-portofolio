document.addEventListener("DOMContentLoaded", async () => {
    const sections = [
        'sections/undangan/hero.html',
        'sections/undangan/about.html',
        'sections/undangan/showcase.html',
        'sections/undangan/pricing.html',
        'sections/undangan/cta.html'
    ];

    const contentContainer = document.getElementById('undangan-content');

    async function loadComponent(url, targetElement) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                targetElement.innerHTML += await response.text();
            }
        } catch (error) {
            console.error(`Error fetch ${url}:`, error);
        }
    }

    const navContainer = document.getElementById('navbar-placeholder');
    const footerContainer = document.getElementById('app-footer');

    await loadComponent('components/navbar.html', navContainer);
    await loadComponent('components/footer.html', footerContainer);

    for (const section of sections) {
        await loadComponent(section, contentContainer);
    }

    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true, offset: 100 });
    }
});
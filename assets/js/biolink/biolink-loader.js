document.addEventListener("DOMContentLoaded", async () => {
    const sections = [
        'sections/biolink/hero.html',
        'sections/biolink/about.html',
        'sections/biolink/showcase.html',
        'sections/biolink/pricing.html',
        'sections/biolink/cta.html'
    ];

    const contentContainer = document.getElementById('biolink-content');

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

    await loadComponent('sections/navbar.html', navContainer);
    await loadComponent('sections/footer.html', footerContainer);

    for (const section of sections) {
        await loadComponent(section, contentContainer);
    }

    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true, offset: 100 });
    }
});
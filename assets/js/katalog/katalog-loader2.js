
const loadSection = async (containerId, filePath) => {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const htmlText = await response.text();
        const container = document.getElementById(containerId);
        if (container) { container.innerHTML += htmlText; }
    } catch (error) { console.error(`Gagal memuat: ${filePath}`, error); }
};

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('components/navbar.html');
        if (response.ok) {
            const html = await response.text();
            document.getElementById('navbar-placeholder').innerHTML = html;
            
            // Re-evaluasi script internal dari navbar.html (biar auto-active nya jalan)
            const scripts = document.getElementById('navbar-placeholder').querySelectorAll('script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                newScript.text = script.text;
                document.body.appendChild(newScript);
            });
        }
    } catch (error) {
        console.error("Gagal meload navbar:", error);
    }
    // Load Sections Khusus Katalog
    await loadSection('katalog-content', 'sections/katalog/hero.html');
    await loadSection('katalog-content', 'sections/katalog/kategori.html');
    await loadSection('katalog-content', 'sections/katalog/showcase.html');
    // await loadSection('katalog-content', 'sections/katalog/cta.html');
    
    // Load Footer (Asumsi pakai footer.html dari halaman utama)
    await loadSection('app-footer', 'components/footer.html');

    // Init Logics
    if (typeof window.initKategoriLogic === 'function') { window.initKategoriLogic(); }
    
    if (typeof AOS !== 'undefined') { AOS.init({ once: true, duration: 800 }); }
});

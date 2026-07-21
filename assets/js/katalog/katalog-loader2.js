
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
    // Load Sections Khusus Katalog
    await loadSection('katalog-content', 'sections/katalog/hero.html');
    await loadSection('katalog-content', 'sections/katalog/kategori.html');
    await loadSection('katalog-content', 'sections/katalog/showcase.html');
    // await loadSection('katalog-content', 'sections/katalog/cta.html');
    
    // Load Footer (Asumsi pakai footer.html dari halaman utama)
    await loadSection('app-footer', 'sections/footer.html');

    // Init Logics
    if (typeof window.initKategoriLogic === 'function') { window.initKategoriLogic(); }
    
    if (typeof AOS !== 'undefined') { AOS.init({ once: true, duration: 800 }); }
});

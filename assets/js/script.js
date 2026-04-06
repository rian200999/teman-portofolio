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
    // 1. Load Sections
    await loadSection('app-content', './sections/hero.html');
    await loadSection('app-content', './sections/layanan.html');
    await loadSection('app-content', './sections/tentang.html');
    await loadSection('app-content', './sections/karya.html'); 
    await loadSection('app-content', './sections/harga.html');
    await loadSection('app-content', './sections/artikel.html');
    await loadSection('app-content', './sections/komunitas.html');
    await loadSection('app-content', './sections/exclusive.html');
    await loadSection('app-content', './sections/testimoni.html');
    await loadSection('app-content', './sections/kerjasama.html');
    await loadSection('app-footer', './sections/footer.html');

    // 2. Init Logics
    if (typeof window.initHeroLogic === 'function') { window.initHeroLogic(); }
    if (typeof window.initLayananLogic === 'function') { window.initLayananLogic(); }
    if (typeof window.initTentangLogic === 'function') { window.initTentangLogic(); }
    if (typeof window.initKaryaLogic === 'function') { window.initKaryaLogic(); } // <--- EKSEKUSI JS KARYA
    if (typeof window.initHargaLogic === 'function') { window.initHargaLogic(); } // <--- EKSEKUSI JS HARGA
    if (typeof window.initArtikelLogic === 'function') { window.initArtikelLogic(); } // <--- EKSEKUSI JS ARTIKEL
    if (typeof window.initKomunitasLogic === 'function') { window.initKomunitasLogic(); } // <--- EKSEKUSI JS KOMUNITAS
    if (typeof window.initExclusiveLogic === 'function') { window.initExclusiveLogic(); } // <--- EKSEKUSI JS EXCLUSIVE
    if (typeof window.initTestimoniLogic === 'function') { window.initTestimoniLogic(); } // <--- EKSEKUSI JS TESTIMONI
    if (typeof window.initKerjasamaLogic === 'function') { window.initKerjasamaLogic(); } // <--- EKSEKUSI JS KERJASAMA
    if (typeof window.initFooterLogic === 'function') { window.initFooterLogic(); } // <--- EKSEKUSI JS FOOTER
    
    // Init AOS
    if (typeof AOS !== 'undefined') { AOS.init({ once: true, duration: 800 }); }
});
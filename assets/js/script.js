const loadSection = async (id, file) => {
    const response = await fetch(`./sections/${file}`);
    const html = await response.text();
    document.getElementById(id).innerHTML += html;
};

document.addEventListener('DOMContentLoaded', async () => {
    // Tunggu sampai HTML Hero masuk ke DOM
    await loadSection('app-content', 'hero.html');
    await loadSection('app-content', 'stats.html');
    await loadSection('app-content', 'path.html');
    await loadSection('app-content', 'features.html');
    await loadSection('app-content', 'interactive.html');
    
    // --- MULAI ZONA WARNA PUTIH ---
    await loadSection('app-content', 'companion.html');
    await loadSection('app-content', 'event.html'); 
    
    // --- ZONA TRANSISI: PUTIH -> PINK SAKURA -> MERAH BJ ---
    await loadSection('app-content', 'articles.html');
    await loadSection('app-content', 'community.html');
    
    // --- ZONA TRANSISI: MERAH BJ -> MAROON ---
    await loadSection('app-content', 'testimonial.html');
    
    // --- ZONA MAROON SOLID ---
    await loadSection('app-content', 'subscriber.html'); // Jangan sampai ketinggalan!
    await loadSection('app-content', 'partners.html');
    
    // --- ZONA TRANSISI: MAROON -> HITAM (FOOTER) ---
    await loadSection('app-content', 'contact.html');


    // Panggil fungsi inisialisasi JS masing-masing section
    if (typeof window.initHeroRotation === 'function') window.initHeroRotation();
    if (typeof window.initStatsCounter === 'function') window.initStatsCounter();
    if (typeof window.initPathSlider === 'function') window.initPathSlider();
    if (typeof window.initPathSelection === 'function') window.initPathSelection();
    if (typeof window.initFeaturesInteractions === 'function') window.initFeaturesInteractions();
    if (typeof window.initInteractiveHub === 'function') window.initInteractiveHub();
    if (typeof window.initCompanion === 'function') window.initCompanion();
    
    // Inisialisasi section baru
    if (typeof window.initEvents === 'function') window.initEvents();
    if (typeof window.initArticles === 'function') window.initArticles();
    if (typeof window.initCommunity === 'function') window.initCommunity();
    if (typeof window.initSubscriber === 'function') window.initSubscriber();
    if (typeof window.initPartners === 'function') window.initPartners();
    if (typeof window.initContact === 'function') window.initContact();

    // Load footer paling akhir
    await loadSection('app-footer', 'footer.html');

    // Inisialisasi animasi AOS setelah semua DOM ke-load
    AOS.init();
});
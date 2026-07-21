
window.initWProController = function() {
    const templatesInfo = {
        'w-pro-1': { title: 'Interactive Manuscript', desc: 'Latar tekstur kertas yang memberikan ilusi seolah sedang membaca naskah asli. Super imersif.', html: 'sections/detail-wordsmith/templates/pro-1.html', css: 'assets/css/katalog/templates/wpr-1.css' },
        'w-pro-2': { title: 'The Publication', desc: 'Tampil layaknya situs portal berita independen skala penuh dengan struktur berita utama (*Headline*).', html: 'sections/detail-wordsmith/templates/pro-2.html', css: 'assets/css/katalog/templates/wpr-2.css' },
        'w-pro-3': { title: 'Novel OS', desc: 'Layar berbentuk simulasi sistem operasi komputer sang penulis (ada folder Drafts, Published, Ideas).', html: 'sections/detail-wordsmith/templates/pro-3.html', css: 'assets/css/katalog/templates/wpr-3.css' },
        'w-pro-4': { title: 'Horizontal Book', desc: 'Sensasi membalik halaman buku! Scroll-nya ke samping menampilkan format dua halaman (*two-page spread*).', html: 'sections/detail-wordsmith/templates/pro-4.html', css: 'assets/css/katalog/templates/wpr-4.css' },
        'w-pro-5': { title: 'Avant Garde Type', desc: 'Tipografi raksasa yang saling tumpang tindih. Khusus untuk penulis kreatif yang mendobrak aturan tradisional.', html: 'sections/detail-wordsmith/templates/pro-5.html', css: 'assets/css/katalog/templates/wpr-5.css' }
    };
    const section = document.getElementById('pro-templates');
    if (!section) return;
    const capsuleBtns = section.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-w-pro-wrapper');
    const titleEl = document.getElementById('w-pro-title');
    const descEl = document.getElementById('w-pro-desc');
    const ctaBtn = document.getElementById('w-pro-cta-btn');
    let activeCssLink = null;

    async function loadTemplate(id) {
        if (!templatesInfo[id]) return;
        const info = templatesInfo[id];
        titleEl.innerText = info.title; descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6283100710499?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Wordsmith%20PRO%20(${info.title})`;
        if (activeCssLink) { activeCssLink.remove(); }
        activeCssLink = document.createElement('link');
        activeCssLink.rel = 'stylesheet'; activeCssLink.href = info.css;
        document.head.appendChild(activeCssLink);
        wrapper.classList.add('fade-out');
        try {
            const res = await fetch(info.html); const html = await res.text();
            setTimeout(() => { wrapper.innerHTML = html; wrapper.classList.remove('fade-out'); wrapper.classList.add('fade-in'); }, 300); 
        } catch(e) { console.error(e); }
    }
    capsuleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            capsuleBtns.forEach(b => b.classList.remove('active')); this.classList.add('active');
            loadTemplate(this.getAttribute('data-id'));
        });
    });
    loadTemplate('w-pro-1');
};

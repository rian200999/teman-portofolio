
window.initWBasicController = function() {
    const templatesInfo = {
        'w-basic-1': { title: 'Typewriter Classic', desc: 'Menggunakan font monospace. Membawa nuansa retro layaknya dokumen yang diketik menggunakan mesin tik jadul.', html: 'sections/detail-wordsmith/templates/basic-1.html', css: 'assets/css/katalog/templates/wb-1.css' },
        'w-basic-2': { title: 'Minimalist Blog', desc: 'Ruang napas lebar dengan font serif tebal. Fokus menyajikan daftar tulisan dengan bersih tanpa distraksi.', html: 'sections/detail-wordsmith/templates/basic-2.html', css: 'assets/css/katalog/templates/wb-2.css' },
        'w-basic-3': { title: 'The Columnist', desc: 'Layout teks dua kolom layaknya lembaran koran atau opini editorial klasik.', html: 'sections/detail-wordsmith/templates/basic-3.html', css: 'assets/css/katalog/templates/wb-3.css' },
        'w-basic-4': { title: 'Author Profile', desc: 'Menonjolkan biografi sang penulis bersanding dengan daftar publikasi (buku/artikel).', html: 'sections/detail-wordsmith/templates/basic-4.html', css: 'assets/css/katalog/templates/wb-4.css' },
        'w-basic-5': { title: 'Quote Centric', desc: 'Menjadikan potongan tulisan (*quote*) andalanmu sebagai *centerpiece* raksasa di tengah layar.', html: 'sections/detail-wordsmith/templates/basic-5.html', css: 'assets/css/katalog/templates/wb-5.css' }
    };
    const section = document.getElementById('basic-templates');
    if (!section) return;
    const capsuleBtns = section.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-w-basic-wrapper');
    const titleEl = document.getElementById('w-basic-title');
    const descEl = document.getElementById('w-basic-desc');
    const ctaBtn = document.getElementById('w-basic-cta-btn');
    let activeCssLink = null;

    async function loadTemplate(id) {
        if (!templatesInfo[id]) return;
        const info = templatesInfo[id];
        titleEl.innerText = info.title; descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6283100710499?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Wordsmith%20Basic%20(${info.title})`;
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
    loadTemplate('w-basic-1');
};

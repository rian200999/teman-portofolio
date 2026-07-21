
window.initCreatorBasicController = function() {
    const templatesInfo = {
        'basic-1': { title: 'Clean Gallery (UI/UX)', desc: 'Minimalis dan elegan. Memberikan ruang napas (white space) yang luas agar desain UI/UX-mu terlihat menonjol.', html: 'sections/detail-creator/templates/basic-1.html', css: 'assets/css/katalog/templates/c-basic-1.css' },
        'basic-2': { title: 'Masonry Art (Graphic)', desc: 'Layout kotak-kotak asimetris ala Pinterest. Sangat cocok untuk memamerkan ratusan karya Graphic Design.', html: 'sections/detail-creator/templates/basic-2.html', css: 'assets/css/katalog/templates/c-basic-2.css' },
        'basic-3': { title: 'Cinematic Reel (Video)', desc: 'Desain lebar (Widescreen 16:9). Memberikan panggung utama untuk *Showreel* Video Editor.', html: 'sections/detail-creator/templates/basic-3.html', css: 'assets/css/katalog/templates/c-basic-3.css' },
        'basic-4': { title: 'Brutalist Bold (Edgy)', desc: 'Gaya Brutalism. Tipografi raksasa, garis tebal, dan *marquee text* berjalan. Buat yang anti-mainstream.', html: 'sections/detail-creator/templates/basic-4.html', css: 'assets/css/katalog/templates/c-basic-4.css' },
        'basic-5': { title: 'Soft Canvas (Illustrator)', desc: 'Nuansa lembut dengan border melengkung (rounded). Sangat memanjakan mata untuk karya Illustrasi.', html: 'sections/detail-creator/templates/basic-5.html', css: 'assets/css/katalog/templates/c-basic-5.css' }
    };

    // FIX: Scope querySelector hanya ke section basic agar tidak tabrakan dengan capsule premium/pro
    const section = document.getElementById('basic-templates');
    if (!section) return;
    
    const capsuleBtns = section.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-creator-wrapper');
    const titleEl = document.getElementById('basic-title');
    const descEl = document.getElementById('basic-desc');
    const ctaBtn = document.getElementById('basic-cta-btn');
    
    let activeCssLink = null;

    async function loadTemplate(id) {
        if (!templatesInfo[id]) return;
        const info = templatesInfo[id];
        
        titleEl.innerText = info.title;
        descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6283100710499?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Creator%20Basic%20(${info.title})`;

        if (activeCssLink) { activeCssLink.remove(); }
        activeCssLink = document.createElement('link');
        activeCssLink.rel = 'stylesheet';
        activeCssLink.href = info.css;
        document.head.appendChild(activeCssLink);

        wrapper.classList.add('fade-out');
        try {
            const res = await fetch(info.html);
            const html = await res.text();
            setTimeout(() => {
                wrapper.innerHTML = html;
                wrapper.classList.remove('fade-out');
                wrapper.classList.add('fade-in');
            }, 300); 
        } catch(e) { console.error('Error loading template', e); }
    }

    capsuleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            capsuleBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadTemplate(this.getAttribute('data-id'));
        });
    });

    loadTemplate('basic-1');
};

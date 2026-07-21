
window.initCreatorProController = function() {
    const templatesInfo = {
        'pro-1': {
            title: 'Agency Vibe',
            desc: 'Desain layaknya studio kreatif *high-end*. Sempurna untuk freelancer senior yang ingin terlihat sebagai "Agensi".',
            html: 'sections/detail-creator/templates/pro-1.html',
            css: 'assets/css/katalog/templates/c-pro-1.css'
        },
        'pro-2': {
            title: 'Immersive OS',
            desc: 'Gaya desktop OS macOS aesthetic. Jendela folder untuk proyek dan navigasi layaknya dock aplikasi nyata.',
            html: 'sections/detail-creator/templates/pro-2.html',
            css: 'assets/css/katalog/templates/c-pro-2.css'
        },
        'pro-3': {
            title: 'Horizontal Odyssey',
            desc: 'Scroll ke samping (Horizontal Scroll). Memberikan pengalaman cinematic yang tiada duanya untuk visual besar.',
            html: 'sections/detail-creator/templates/pro-3.html',
            css: 'assets/css/katalog/templates/c-pro-3.css'
        },
        'pro-4': {
            title: 'The Exhibition',
            desc: 'Tampil layaknya pameran seni digital (Art Gallery). Tipografi offset dan gambar parallax semu.',
            html: 'sections/detail-creator/templates/pro-4.html',
            css: 'assets/css/katalog/templates/c-pro-4.css'
        },
        'pro-5': {
            title: 'Avant Garde',
            desc: 'Super eksperimental. Teks raksasa yang saling menumpuk. Dirancang khusus untuk memukau *Art Director*.',
            html: 'sections/detail-creator/templates/pro-5.html',
            css: 'assets/css/katalog/templates/c-pro-5.css'
        }
    };

    const capsuleBtns = document.querySelectorAll('.c-pro-capsule');
    const wrapper = document.getElementById('mockup-creator-pro-wrapper');
    const titleEl = document.getElementById('c-pro-title');
    const descEl = document.getElementById('c-pro-desc');
    const ctaBtn = document.getElementById('c-pro-cta-btn');
    
    let activeCssLink = null;

    async function loadTemplate(id) {
        const info = templatesInfo[id];
        titleEl.innerText = info.title;
        descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Creator%20PRO%20(${info.title})`;

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

    loadTemplate('pro-1');
};

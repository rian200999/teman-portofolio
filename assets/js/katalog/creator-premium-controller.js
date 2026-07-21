
window.initCreatorPremiumController = function() {
    const templatesInfo = {
        'premium-1': {
            title: 'Glass Portfolio',
            desc: 'Desain transparan nan elegan dengan efek Glassmorphism. Fokus pada pembedahan Case Study UI/UX yang mendalam.',
            html: 'sections/detail-creator/templates/premium-1.html',
            css: 'assets/css/katalog/templates/c-premium-1.css'
        },
        'premium-2': {
            title: 'Exhibition',
            desc: 'Tampilan showcase interaktif. Gambar utama berukuran besar dengan daftar thumbnail yang memanjakan mata.',
            html: 'sections/detail-creator/templates/premium-2.html',
            css: 'assets/css/katalog/templates/c-premium-2.css'
        },
        'premium-3': {
            title: 'Editorial Magz',
            desc: 'Menyerupai layout majalah mode ternama. Tipografi serif dipadukan dengan tata letak multi-kolom yang rapi.',
            html: 'sections/detail-creator/templates/premium-3.html',
            css: 'assets/css/katalog/templates/c-premium-3.css'
        },
        'premium-4': {
            title: 'Dark Studio',
            desc: 'Aura misterius nan mewah. Background gelap dengan lightbox-style grid, cocok untuk Fotografer atau 3D Artist.',
            html: 'sections/detail-creator/templates/premium-4.html',
            css: 'assets/css/katalog/templates/c-premium-4.css'
        },
        'premium-5': {
            title: 'Bento Canvas',
            desc: 'Modifikasi Bento Grid khusus Creator. Kotak-kotak dinamis untuk memuat Dribbble shots, klien, dan skills.',
            html: 'sections/detail-creator/templates/premium-5.html',
            css: 'assets/css/katalog/templates/c-premium-5.css'
        }
    };

    const capsuleBtns = document.querySelectorAll('.c-premium-capsule');
    const wrapper = document.getElementById('mockup-creator-premium-wrapper');
    const titleEl = document.getElementById('c-premium-title');
    const descEl = document.getElementById('c-premium-desc');
    const ctaBtn = document.getElementById('c-premium-cta-btn');
    
    let activeCssLink = null;

    async function loadTemplate(id) {
        const info = templatesInfo[id];
        titleEl.innerText = info.title;
        descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6283100710499?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Creator%20Premium%20(${info.title})`;

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

    loadTemplate('premium-1');
};

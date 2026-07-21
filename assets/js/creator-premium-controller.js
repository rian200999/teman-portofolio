
window.initCreatorPremiumController = function() {
    const templatesInfo = {
        'premium-1': { title: 'Glass Portfolio', desc: 'Desain transparan nan elegan dengan efek *Glassmorphism*. Fokus pada pembedahan *Case Study*.', html: 'sections/detail-creator/templates/premium-1.html', css: 'assets/css/katalog/templates/c-premium-1.css' },
        'premium-2': { title: 'Exhibition', desc: 'Tampilan *showcase* interaktif. Gambar utama berukuran besar dengan daftar *thumbnail*.', html: 'sections/detail-creator/templates/premium-2.html', css: 'assets/css/katalog/templates/c-premium-2.css' },
        'premium-3': { title: 'Editorial Magz', desc: 'Menyerupai layout majalah mode ternama. Tipografi serif dipadukan dengan tata letak multi-kolom.', html: 'sections/detail-creator/templates/premium-3.html', css: 'assets/css/katalog/templates/c-premium-3.css' },
        'premium-4': { title: 'Dark Studio', desc: 'Aura misterius nan mewah. Background gelap dengan *lightbox-style grid*, cocok untuk Fotografer.', html: 'sections/detail-creator/templates/premium-4.html', css: 'assets/css/katalog/templates/c-premium-4.css' },
        'premium-5': { title: 'Bento Canvas', desc: 'Modifikasi Bento Grid khusus *Creator*. Kotak-kotak dinamis untuk memuat *Dribbble shots* dan klien.', html: 'sections/detail-creator/templates/premium-5.html', css: 'assets/css/katalog/templates/c-premium-5.css' }
    };

    const section = document.getElementById('premium-templates');
    if (!section) return;

    const capsuleBtns = section.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-creator-premium-wrapper');
    const titleEl = document.getElementById('c-premium-title');
    const descEl = document.getElementById('c-premium-desc');
    const ctaBtn = document.getElementById('c-premium-cta-btn');
    
    let activeCssLink = null;

    async function loadTemplate(id) {
        if (!templatesInfo[id]) return;
        const info = templatesInfo[id];
        titleEl.innerText = info.title;
        descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Creator%20Premium%20(${info.title})`;

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

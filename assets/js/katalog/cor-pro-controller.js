
window.initCorProController = function() {
    const templatesInfo = {
        'c-pro-1': { title: 'Boardroom', desc: 'Tampilan layar terbelah (*split-screen*) dengan aura eksekutif kelas atas. Super elegan dan modern.', html: 'sections/detail-corporate/templates/pro-1.html', css: 'assets/css/katalog/templates/co-pro-1.css' },
        'c-pro-2': { title: 'The Firm', desc: 'Dirancang menyerupai *website* firma konsultan ternama (seperti McKinsey/BCG). *Trust* seketika naik.', html: 'sections/detail-corporate/templates/pro-2.html', css: 'assets/css/katalog/templates/co-pro-2.css' },
        'c-pro-3': { title: 'Annual Report', desc: 'Presentasi data padat bergaya laporan tahunan (*Annual Report*) perusahaan publik. Sangat berwibawa.', html: 'sections/detail-corporate/templates/pro-3.html', css: 'assets/css/katalog/templates/co-pro-3.css' },
        'c-pro-4': { title: 'Investor Pitch', desc: '*Horizontal Scroll* interaktif. Sempurna untuk level Direktur yang ingin menceritakan sejarah keberhasilannya.', html: 'sections/detail-corporate/templates/pro-4.html', css: 'assets/css/katalog/templates/co-pro-4.css' },
        'c-pro-5': { title: 'Chief Officer', desc: 'Eksklusif, monokromatik, dan menggunakan tipografi berukuran raksasa. Menunjukkan status *C-Level*.', html: 'sections/detail-corporate/templates/pro-5.html', css: 'assets/css/katalog/templates/co-pro-5.css' }
    };
    const section = document.getElementById('pro-templates');
    if (!section) return;
    const capsuleBtns = section.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-cor-pro-wrapper');
    const titleEl = document.getElementById('cor-pro-title');
    const descEl = document.getElementById('cor-pro-desc');
    const ctaBtn = document.getElementById('cor-pro-cta-btn');
    let activeCssLink = null;

    async function loadTemplate(id) {
        if (!templatesInfo[id]) return;
        const info = templatesInfo[id];
        titleEl.innerText = info.title; descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6283100710499?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Corporate%20PRO%20(${info.title})`;
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
    loadTemplate('c-pro-1');
};

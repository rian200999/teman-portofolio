
window.initBProController = function() {
    const templatesInfo = {
        'b-pro-1': { title: 'Master Plan', desc: 'Tampilan peta proyek besar dengan *horizontal scroll* yang menceritakan *milestone* konstruksi.', html: 'sections/detail-builder/templates/pro-1.html', css: 'assets/css/katalog/templates/bpr-1.css' },
        'b-pro-2': { title: 'BIM Viewer', desc: 'Aura teknologi 3D dan simulasi. Memberikan kesan *Building Information Modeling* tingkat tinggi.', html: 'sections/detail-builder/templates/pro-2.html', css: 'assets/css/katalog/templates/bpr-2.css' },
        'b-pro-3': { title: 'The Contractor', desc: 'Layaknya *website company profile* untuk *independent contractor* atau biro konsultan teknik sipil.', html: 'sections/detail-builder/templates/pro-3.html', css: 'assets/css/katalog/templates/bpr-3.css' },
        'b-pro-4': { title: 'Project Vault', desc: 'Visualisasi *maps* dan pin lokasi, menunjukkan portofolio fisik yang tersebar di berbagai region.', html: 'sections/detail-builder/templates/pro-4.html', css: 'assets/css/katalog/templates/bpr-4.css' },
        'b-pro-5': { title: 'Chief Engineer', desc: 'Desain ultra-kaku dan kokoh. Ditujukan untuk level *Project Director* atau *VP of Engineering*.', html: 'sections/detail-builder/templates/pro-5.html', css: 'assets/css/katalog/templates/bpr-5.css' }
    };
    const section = document.getElementById('pro-templates');
    if (!section) return;
    const capsuleBtns = section.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-b-pro-wrapper');
    const titleEl = document.getElementById('b-pro-title');
    const descEl = document.getElementById('b-pro-desc');
    const ctaBtn = document.getElementById('b-pro-cta-btn');
    let activeCssLink = null;

    async function loadTemplate(id) {
        if (!templatesInfo[id]) return;
        const info = templatesInfo[id];
        titleEl.innerText = info.title; descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6283100710499?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Builder%20PRO%20(${info.title})`;
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
    loadTemplate('b-pro-1');
};

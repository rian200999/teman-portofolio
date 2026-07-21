
window.initMarketerBasicController = function() {
    const templatesInfo = {
        'm-basic-1': { title: 'Growth Metrics', desc: 'Fokus pada angka. Menampilkan matriks pencapaian dengan font besar.', html: 'sections/detail-marketer/templates/basic-1.html', css: 'assets/css/katalog/templates/m-basic-1.css' },
        'm-basic-2': { title: 'Social Grid', desc: 'Layout grid 3 kolom ala Instagram. Cocok untuk Social Media Manager.', html: 'sections/detail-marketer/templates/basic-2.html', css: 'assets/css/katalog/templates/m-basic-2.css' },
        'm-basic-3': { title: 'Campaign Canvas', desc: 'Mengkombinasikan hero image besar dengan copywriting persuasif.', html: 'sections/detail-marketer/templates/basic-3.html', css: 'assets/css/katalog/templates/m-basic-3.css' },
        'm-basic-4': { title: 'SEO Minimalist', desc: 'Bersih, berstruktur, banyak bullet points untuk SEO Specialist.', html: 'sections/detail-marketer/templates/basic-4.html', css: 'assets/css/katalog/templates/m-basic-4.css' },
        'm-basic-5': { title: 'Brand Story', desc: 'Elegan dengan font serif untuk menonjolkan Brand Voice.', html: 'sections/detail-marketer/templates/basic-5.html', css: 'assets/css/katalog/templates/m-basic-5.css' }
    };
    const section = document.getElementById('basic-templates');
    if (!section) return;
    const capsuleBtns = section.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-m-basic-wrapper');
    const titleEl = document.getElementById('m-basic-title');
    const descEl = document.getElementById('m-basic-desc');
    const ctaBtn = document.getElementById('m-basic-cta-btn');
    let activeCssLink = null;

    async function loadTemplate(id) {
        if (!templatesInfo[id]) return;
        const info = templatesInfo[id];
        titleEl.innerText = info.title; descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6283100710499?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Marketer%20Basic%20(${info.title})`;
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
    loadTemplate('m-basic-1');
};

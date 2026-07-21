
window.initSProController = function() {
    const templatesInfo = {
        's-pro-1': { title: 'Lab Portal (PI)', desc: 'Berfungsi layaknya website mini untuk Principal Investigator. Menampilkan anggota lab dan publikasi terkini.', html: 'sections/detail-scholar/templates/pro-1.html', css: 'assets/css/katalog/templates/spr-1.css' },
        's-pro-2': { title: 'The Institute', desc: 'Desain ultra-formal dan berwibawa, mencerminkan identitas kelembagaan universitas papan atas.', html: 'sections/detail-scholar/templates/pro-2.html', css: 'assets/css/katalog/templates/spr-2.css' },
        's-pro-3': { title: 'Horizon Scholar', desc: 'Pengalaman *horizontal scroll* yang menceritakan perjalanan akademik dari S1, S2, S3, hingga Post-Doc.', html: 'sections/detail-scholar/templates/pro-3.html', css: 'assets/css/katalog/templates/spr-3.css' },
        's-pro-4': { title: 'Thesis Display', desc: 'Disusun layaknya cover buku/disertasi interaktif. Menyoroti abstrak dan temuan utama secara elegan.', html: 'sections/detail-scholar/templates/pro-4.html', css: 'assets/css/katalog/templates/spr-4.css' },
        's-pro-5': { title: 'Data Driven', desc: 'Tema futuristik untuk peneliti *Data Science* atau Bioinformatika. Elemen grafik mendominasi layar.', html: 'sections/detail-scholar/templates/pro-5.html', css: 'assets/css/katalog/templates/spr-5.css' }
    };
    const section = document.getElementById('pro-templates');
    if (!section) return;
    const capsuleBtns = section.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-s-pro-wrapper');
    const titleEl = document.getElementById('s-pro-title');
    const descEl = document.getElementById('s-pro-desc');
    const ctaBtn = document.getElementById('s-pro-cta-btn');
    let activeCssLink = null;

    async function loadTemplate(id) {
        if (!templatesInfo[id]) return;
        const info = templatesInfo[id];
        titleEl.innerText = info.title; descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Scholar%20PRO%20(${info.title})`;
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
    loadTemplate('s-pro-1');
};

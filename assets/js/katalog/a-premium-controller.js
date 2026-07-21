
window.initAPremiumController = function() {
    const templatesInfo = {
        'a-premium-1': { title: 'Financial Dash', desc: 'Mirip antarmuka aplikasi finansial (*fintech*). Menampilkan kartu-kartu metrik profit margin dan akurasi model.', html: 'sections/detail-analyst/templates/premium-1.html', css: 'assets/css/katalog/templates/ap-1.css' },
        'a-premium-2': { title: 'Asset Breakdown', desc: 'Menyimulasikan diagram lingkaran (*pie chart*) untuk membedah alokasi aset atau distribusi *skill/tools*.', html: 'sections/detail-analyst/templates/premium-2.html', css: 'assets/css/katalog/templates/ap-2.css' },
        'a-premium-3': { title: 'The Report', desc: 'Didesain layaknya laporan pendapatan kuartalan (*earnings report PDF*) perusahaan terbuka.', html: 'sections/detail-analyst/templates/premium-3.html', css: 'assets/css/katalog/templates/ap-3.css' },
        'a-premium-4': { title: 'Data Pipeline', desc: 'Menampilkan *flowchart* atau *pipeline* metodologi analisis data (ETL process) dengan estetis.', html: 'sections/detail-analyst/templates/premium-4.html', css: 'assets/css/katalog/templates/ap-4.css' },
        'a-premium-5': { title: 'Growth Funnel', desc: 'Berfokus pada matriks peningkatan (Upward Trend). Sangat menonjolkan kemampuan optimalisasi.', html: 'sections/detail-analyst/templates/premium-5.html', css: 'assets/css/katalog/templates/ap-5.css' }
    };
    const section = document.getElementById('premium-templates');
    if (!section) return;
    const capsuleBtns = section.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-a-premium-wrapper');
    const titleEl = document.getElementById('a-premium-title');
    const descEl = document.getElementById('a-premium-desc');
    const ctaBtn = document.getElementById('a-premium-cta-btn');
    let activeCssLink = null;

    async function loadTemplate(id) {
        if (!templatesInfo[id]) return;
        const info = templatesInfo[id];
        titleEl.innerText = info.title; descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6283100710499?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Analyst%20Premium%20(${info.title})`;
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
    loadTemplate('a-premium-1');
};

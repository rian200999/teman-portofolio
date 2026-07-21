
window.initABasicController = function() {
    const templatesInfo = {
        'a-basic-1': { title: 'The Ledger', desc: 'Desain layaknya buku besar (buku kas). Menyajikan baris-baris informasi secara presisi layaknya neraca keuangan.', html: 'sections/detail-analyst/templates/basic-1.html', css: 'assets/css/katalog/templates/ab-1.css' },
        'a-basic-2': { title: 'Data Card', desc: 'Layout berbasis kartu (*grid*) yang menyoroti tools (Excel, SQL, Tableau) dan metrik kunci.', html: 'sections/detail-analyst/templates/basic-2.html', css: 'assets/css/katalog/templates/ab-2.css' },
        'a-basic-3': { title: 'The Auditor', desc: 'Sangat bersih, fokus pada teks dan *checklist*. Ideal untuk profesi auditor yang mementingkan detail.', html: 'sections/detail-analyst/templates/basic-3.html', css: 'assets/css/katalog/templates/ab-3.css' },
        'a-basic-4': { title: 'Forecast Minimalist', desc: 'Fokus pada proyeksi dan grafik *sparkline* sederhana untuk merepresentasikan tren pertumbuhan.', html: 'sections/detail-analyst/templates/basic-4.html', css: 'assets/css/katalog/templates/ab-4.css' },
        'a-basic-5': { title: 'Terminal Stats', desc: 'Gaya data analis murni. Menggunakan font monospace (mesin tik) untuk angka agar terlihat sangat akurat.', html: 'sections/detail-analyst/templates/basic-5.html', css: 'assets/css/katalog/templates/ab-5.css' }
    };
    const section = document.getElementById('basic-templates');
    if (!section) return;
    const capsuleBtns = section.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-a-basic-wrapper');
    const titleEl = document.getElementById('a-basic-title');
    const descEl = document.getElementById('a-basic-desc');
    const ctaBtn = document.getElementById('a-basic-cta-btn');
    let activeCssLink = null;

    async function loadTemplate(id) {
        if (!templatesInfo[id]) return;
        const info = templatesInfo[id];
        titleEl.innerText = info.title; descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6283100710499?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Analyst%20Basic%20(${info.title})`;
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
    loadTemplate('a-basic-1');
};

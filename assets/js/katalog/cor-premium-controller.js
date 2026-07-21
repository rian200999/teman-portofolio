
window.initCorPremiumController = function() {
    const templatesInfo = {
        'c-premium-1': { title: 'Corporate Dashboard', desc: 'Menampilkan ringkasan karir dalam bentuk *dashboard* KPI yang sangat disegani oleh HRD dan Manajer.', html: 'sections/detail-corporate/templates/premium-1.html', css: 'assets/css/katalog/templates/co-premium-1.css' },
        'c-premium-2': { title: 'The Pitch Deck', desc: 'Mempresentasikan dirimu layaknya *slide deck* penawaran ke investor atau klien B2B.', html: 'sections/detail-corporate/templates/premium-2.html', css: 'assets/css/katalog/templates/co-premium-2.css' },
        'c-premium-3': { title: 'Executive Summary', desc: 'Navigasi berbasis *tabs* untuk menyembunyikan dan menampilkan data riwayat kerja secara elegan.', html: 'sections/detail-corporate/templates/premium-3.html', css: 'assets/css/katalog/templates/co-premium-3.css' },
        'c-premium-4': { title: 'Interactive CV', desc: 'Diperkaya efek *hover*, kotak bayangan, dan *progress bar* untuk mengkomunikasikan keahlian teknismu.', html: 'sections/detail-corporate/templates/premium-4.html', css: 'assets/css/katalog/templates/co-premium-4.css' },
        'c-premium-5': { title: 'Management Portfolio', desc: 'Kartu proyek/kasus formal dengan struktur "Tantangan, Aksi, Hasil" yang disukai perusahaan multinasional.', html: 'sections/detail-corporate/templates/premium-5.html', css: 'assets/css/katalog/templates/co-premium-5.css' }
    };
    const section = document.getElementById('premium-templates');
    if (!section) return;
    const capsuleBtns = section.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-cor-premium-wrapper');
    const titleEl = document.getElementById('cor-premium-title');
    const descEl = document.getElementById('cor-premium-desc');
    const ctaBtn = document.getElementById('cor-premium-cta-btn');
    let activeCssLink = null;

    async function loadTemplate(id) {
        if (!templatesInfo[id]) return;
        const info = templatesInfo[id];
        titleEl.innerText = info.title; descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Corporate%20Premium%20(${info.title})`;
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
    loadTemplate('c-premium-1');
};


window.initAProController = function() {
    const templatesInfo = {
        'a-pro-1': { title: 'The Terminal', desc: 'Desain layaknya Terminal Bloomberg atau platform *trading* tingkat lanjut dengan indikator naik/turun saham.', html: 'sections/detail-analyst/templates/pro-1.html', css: 'assets/css/katalog/templates/apr-1.css' },
        'a-pro-2': { title: 'Invest Bank', desc: 'Sangat formal, *high-end*, dan berwibawa layaknya portal Investment Banking (Goldman Sachs/JP Morgan style).', html: 'sections/detail-analyst/templates/pro-2.html', css: 'assets/css/katalog/templates/apr-2.css' },
        'a-pro-3': { title: 'Horizontal Ledger', desc: 'Tabel finansial dan riwayat proyek yang digeser secara *horizontal scroll*. Visualisasi tiada dua.', html: 'sections/detail-analyst/templates/pro-3.html', css: 'assets/css/katalog/templates/apr-3.css' },
        'a-pro-4': { title: 'Data Vault', desc: 'Aura Data Scientist *hardcore* (Sci-Fi / Hacker Data). Background gelap dengan elemen komputasi mesin.', html: 'sections/detail-analyst/templates/pro-4.html', css: 'assets/css/katalog/templates/apr-4.css' },
        'a-pro-5': { title: 'CFO Suite', desc: 'Tampilan *split-screen* raksasa untuk Chief Financial Officer. Angka besar, tebal, dan meyakinkan.', html: 'sections/detail-analyst/templates/pro-5.html', css: 'assets/css/katalog/templates/apr-5.css' }
    };
    const section = document.getElementById('pro-templates');
    if (!section) return;
    const capsuleBtns = section.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-a-pro-wrapper');
    const titleEl = document.getElementById('a-pro-title');
    const descEl = document.getElementById('a-pro-desc');
    const ctaBtn = document.getElementById('a-pro-cta-btn');
    let activeCssLink = null;

    async function loadTemplate(id) {
        if (!templatesInfo[id]) return;
        const info = templatesInfo[id];
        titleEl.innerText = info.title; descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6283100710499?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Analyst%20PRO%20(${info.title})`;
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
    loadTemplate('a-pro-1');
};

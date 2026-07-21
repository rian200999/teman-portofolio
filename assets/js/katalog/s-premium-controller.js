
window.initSPremiumController = function() {
    const templatesInfo = {
        's-premium-1': { title: 'Research Dashboard', desc: 'Menampilkan statistik H-Index dan i10-Index layaknya Google Scholar, dipadu dengan riwayat riset.', html: 'sections/detail-scholar/templates/premium-1.html', css: 'assets/css/katalog/templates/sp-1.css' },
        's-premium-2': { title: 'Grant Portfolio', desc: 'Menyoroti pendanaan (Grants) yang berhasil diraih, fasilitas lab, dan proyek riset berskala besar.', html: 'sections/detail-scholar/templates/premium-2.html', css: 'assets/css/katalog/templates/sp-2.css' },
        's-premium-3': { title: 'Conference Deck', desc: 'Format presentasi *slide* yang memamerkan daftar *Keynote Speaker*, simposium, dan presentasi poster.', html: 'sections/detail-scholar/templates/premium-3.html', css: 'assets/css/katalog/templates/sp-3.css' },
        's-premium-4': { title: 'Citation Tracker', desc: 'Elemen visual progresif yang menunjukkan tren kenaikan sitasi dari tahun ke tahun.', html: 'sections/detail-scholar/templates/premium-4.html', css: 'assets/css/katalog/templates/sp-4.css' },
        's-premium-5': { title: 'The Scientist', desc: 'Tampilan bersih ala klinis/medis. Cocok untuk peneliti di bidang Bio-medis, Kimia, atau STEM.', html: 'sections/detail-scholar/templates/premium-5.html', css: 'assets/css/katalog/templates/sp-5.css' }
    };
    const section = document.getElementById('premium-templates');
    if (!section) return;
    const capsuleBtns = section.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-s-premium-wrapper');
    const titleEl = document.getElementById('s-premium-title');
    const descEl = document.getElementById('s-premium-desc');
    const ctaBtn = document.getElementById('s-premium-cta-btn');
    let activeCssLink = null;

    async function loadTemplate(id) {
        if (!templatesInfo[id]) return;
        const info = templatesInfo[id];
        titleEl.innerText = info.title; descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6283100710499?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Scholar%20Premium%20(${info.title})`;
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
    loadTemplate('s-premium-1');
};

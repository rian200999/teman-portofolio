
window.initSBasicController = function() {
    const templatesInfo = {
        's-basic-1': { title: 'The Academic', desc: 'CV Akademik klasik dengan font serif. Membagi profil, edukasi, dan daftar publikasi dengan elegan.', html: 'sections/detail-scholar/templates/basic-1.html', css: 'assets/css/katalog/templates/sb-1.css' },
        's-basic-2': { title: 'Clean Researcher', desc: 'Desain sans-serif minimalis dengan banyak *whitespace*, menonjolkan fokus dan kejelasan rekam jejak.', html: 'sections/detail-scholar/templates/basic-2.html', css: 'assets/css/katalog/templates/sb-2.css' },
        's-basic-3': { title: 'Publication Grid', desc: 'Layout berbasis kartu (card) untuk memamerkan publikasi jurnal terpilih beserta abstrak singkatnya.', html: 'sections/detail-scholar/templates/basic-3.html', css: 'assets/css/katalog/templates/sb-3.css' },
        's-basic-4': { title: 'The Lecturer', desc: 'Didesain bagi pengajar. Menonjolkan modul mata kuliah yang diampu beserta filosofi pengajaran.', html: 'sections/detail-scholar/templates/basic-4.html', css: 'assets/css/katalog/templates/sb-4.css' },
        's-basic-5': { title: 'Classic Journal', desc: 'Memiliki tata letak dua kolom layaknya format *paper* jurnal internasional (IEEE/Nature style).', html: 'sections/detail-scholar/templates/basic-5.html', css: 'assets/css/katalog/templates/sb-5.css' }
    };
    const section = document.getElementById('basic-templates');
    if (!section) return;
    const capsuleBtns = section.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-s-basic-wrapper');
    const titleEl = document.getElementById('s-basic-title');
    const descEl = document.getElementById('s-basic-desc');
    const ctaBtn = document.getElementById('s-basic-cta-btn');
    let activeCssLink = null;

    async function loadTemplate(id) {
        if (!templatesInfo[id]) return;
        const info = templatesInfo[id];
        titleEl.innerText = info.title; descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Scholar%20Basic%20(${info.title})`;
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
    loadTemplate('s-basic-1');
};

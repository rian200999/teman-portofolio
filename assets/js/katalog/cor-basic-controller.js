
window.initCorBasicController = function() {
    const templatesInfo = {
        'c-basic-1': { title: 'The Executive', desc: 'Desain resume 2 kolom klasik yang tak lekang oleh waktu. Sempurna untuk menyajikan banyak informasi dengan rapi.', html: 'sections/detail-corporate/templates/basic-1.html', css: 'assets/css/katalog/templates/co-basic-1.css' },
        'c-basic-2': { title: 'Minimalist Profile', desc: 'Sangat bersih dengan banyak ruang kosong (*white space*). Menunjukkan karakter yang tenang dan fokus.', html: 'sections/detail-corporate/templates/basic-2.html', css: 'assets/css/katalog/templates/co-basic-2.css' },
        'c-basic-3': { title: 'The Consultant', desc: 'Menggunakan font serif yang tegas untuk memancarkan aura intelektual dan ketajaman analisis.', html: 'sections/detail-corporate/templates/basic-3.html', css: 'assets/css/katalog/templates/co-basic-3.css' },
        'c-basic-4': { title: 'Clean Timeline', desc: 'Fokus menceritakan progres karirmu selangkah demi selangkah melalui garis waktu (*timeline*) yang rapi.', html: 'sections/detail-corporate/templates/basic-4.html', css: 'assets/css/katalog/templates/co-basic-4.css' },
        'c-basic-5': { title: 'Grid Resume', desc: 'Mengkotakkan informasi (*boxed layout*) agar mudah dibaca sekilas (*scannable*) oleh HRD sibuk.', html: 'sections/detail-corporate/templates/basic-5.html', css: 'assets/css/katalog/templates/co-basic-5.css' }
    };
    const section = document.getElementById('basic-templates');
    if (!section) return;
    const capsuleBtns = section.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-cor-basic-wrapper');
    const titleEl = document.getElementById('cor-basic-title');
    const descEl = document.getElementById('cor-basic-desc');
    const ctaBtn = document.getElementById('cor-basic-cta-btn');
    let activeCssLink = null;

    async function loadTemplate(id) {
        if (!templatesInfo[id]) return;
        const info = templatesInfo[id];
        titleEl.innerText = info.title; descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Corporate%20Basic%20(${info.title})`;
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
    loadTemplate('c-basic-1');
};


window.initBPremiumController = function() {
    const templatesInfo = {
        'b-premium-1': { title: 'Site Dashboard', desc: 'Menampilkan statistik manajemen proyek: jam kerja tanpa kecelakaan, *budget tracking*, dan progres.', html: 'sections/detail-builder/templates/premium-1.html', css: 'assets/css/katalog/templates/bp-1.css' },
        'b-premium-2': { title: 'CAD Canvas', desc: 'Vibe gelap dengan garis warna neon (Cyan/Green) persis antarmuka *software* AutoCAD.', html: 'sections/detail-builder/templates/premium-2.html', css: 'assets/css/katalog/templates/bp-2.css' },
        'b-premium-3': { title: 'Architectural Folio', desc: 'Elegan, *whitespace* melimpah, dan minimalis. Cocok untuk *Principal Architect*.', html: 'sections/detail-builder/templates/premium-3.html', css: 'assets/css/katalog/templates/bp-3.css' },
        'b-premium-4': { title: 'Safety Log Tracker', desc: 'Layaknya papan pengumuman K3 di lokasi proyek ("X Days without incident").', html: 'sections/detail-builder/templates/premium-4.html', css: 'assets/css/katalog/templates/bp-4.css' },
        'b-premium-5': { title: 'Construction Phases', desc: 'Menjabarkan fase proyek dari Fondasi -> Struktur -> *Finishing* dengan visual bertingkat.', html: 'sections/detail-builder/templates/premium-5.html', css: 'assets/css/katalog/templates/bp-5.css' }
    };
    const section = document.getElementById('premium-templates');
    if (!section) return;
    const capsuleBtns = section.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-b-premium-wrapper');
    const titleEl = document.getElementById('b-premium-title');
    const descEl = document.getElementById('b-premium-desc');
    const ctaBtn = document.getElementById('b-premium-cta-btn');
    let activeCssLink = null;

    async function loadTemplate(id) {
        if (!templatesInfo[id]) return;
        const info = templatesInfo[id];
        titleEl.innerText = info.title; descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6283100710499?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Builder%20Premium%20(${info.title})`;
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
    loadTemplate('b-premium-1');
};


window.initBBasicController = function() {
    const templatesInfo = {
        'b-basic-1': { title: 'The Blueprint', desc: 'Latar belakang dengan motif *grid* milimeter blok. Sangat estetik untuk Arsitek dan Drafter.', html: 'sections/detail-builder/templates/basic-1.html', css: 'assets/css/katalog/templates/bb-1.css' },
        'b-basic-2': { title: 'Safety First (HSE)', desc: 'Identik dengan garis peringatan kuning-hitam. Sangat lugas memamerkan sertifikasi K3 (HSE).', html: 'sections/detail-builder/templates/basic-2.html', css: 'assets/css/katalog/templates/bb-2.css' },
        'b-basic-3': { title: 'Project Grid', desc: 'Menampilkan galeri foto proyek jembatan, gedung, atau alat berat yang pernah ditangani.', html: 'sections/detail-builder/templates/basic-3.html', css: 'assets/css/katalog/templates/bb-3.css' },
        'b-basic-4': { title: 'The Surveyor', desc: 'Bersih ala laporan inspeksi teknis lapangan. *To the point* dengan tabel spesifikasi material.', html: 'sections/detail-builder/templates/basic-4.html', css: 'assets/css/katalog/templates/bb-4.css' },
        'b-basic-5': { title: 'Structural Folio', desc: 'Kotak-kotak dengan *border* solid. Merepresentasikan struktur bangunan yang kuat dan tahan gempa.', html: 'sections/detail-builder/templates/basic-5.html', css: 'assets/css/katalog/templates/bb-5.css' }
    };
    const section = document.getElementById('basic-templates');
    if (!section) return;
    const capsuleBtns = section.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-b-basic-wrapper');
    const titleEl = document.getElementById('b-basic-title');
    const descEl = document.getElementById('b-basic-desc');
    const ctaBtn = document.getElementById('b-basic-cta-btn');
    let activeCssLink = null;

    async function loadTemplate(id) {
        if (!templatesInfo[id]) return;
        const info = templatesInfo[id];
        titleEl.innerText = info.title; descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6283100710499?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Builder%20Basic%20(${info.title})`;
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
    loadTemplate('b-basic-1');
};

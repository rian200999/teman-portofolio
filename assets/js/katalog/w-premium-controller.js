
window.initWPremiumController = function() {
    const templatesInfo = {
        'w-premium-1': { title: 'Editorial Canvas', desc: 'Meniru *layout* majalah sastra bergengsi. Kombinasi gambar dan teks terukir indah dalam satu layar.', html: 'sections/detail-wordsmith/templates/premium-1.html', css: 'assets/css/katalog/templates/wp-1.css' },
        'w-premium-2': { title: 'Copywriter Deck', desc: 'Format khusus Copywriter yang membedah *Pain Point* vs *Solution* dari *copy* yang dibuat.', html: 'sections/detail-wordsmith/templates/premium-2.html', css: 'assets/css/katalog/templates/wp-2.css' },
        'w-premium-3': { title: 'Chapter & Verse', desc: 'Layout dengan navigasi berbentuk Bab (Chapters). Elegan untuk karya fiksi atau esai berseri.', html: 'sections/detail-wordsmith/templates/premium-3.html', css: 'assets/css/katalog/templates/wp-3.css' },
        'w-premium-4': { title: 'Newsletter Style', desc: 'Terinspirasi dari platform populer seperti Substack. Ada form *subscribe* di atas dan daftar arsip tulisan.', html: 'sections/detail-wordsmith/templates/premium-4.html', css: 'assets/css/katalog/templates/wp-4.css' },
        'w-premium-5': { title: 'The Journalist', desc: 'Kumpulan liputan yang dikategorikan dengan label tebal (Tech, Politics, Art). *Scanning* informasi jadi mudah.', html: 'sections/detail-wordsmith/templates/premium-5.html', css: 'assets/css/katalog/templates/wp-5.css' }
    };
    const section = document.getElementById('premium-templates');
    if (!section) return;
    const capsuleBtns = section.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-w-premium-wrapper');
    const titleEl = document.getElementById('w-premium-title');
    const descEl = document.getElementById('w-premium-desc');
    const ctaBtn = document.getElementById('w-premium-cta-btn');
    let activeCssLink = null;

    async function loadTemplate(id) {
        if (!templatesInfo[id]) return;
        const info = templatesInfo[id];
        titleEl.innerText = info.title; descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Wordsmith%20Premium%20(${info.title})`;
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
    loadTemplate('w-premium-1');
};

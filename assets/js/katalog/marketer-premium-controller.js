
window.initMarketerPremiumController = function() {
    const templatesInfo = {
        'm-premium-1': { title: 'Bento Analytics', desc: 'Bento Box dengan simulasi chart dan grafik growth yang memanjakan mata.', html: 'sections/detail-marketer/templates/premium-1.html', css: 'assets/css/katalog/templates/m-premium-1.css' },
        'm-premium-2': { title: 'Conversion Funnel', desc: 'Layout yang mengerucut layaknya marketing funnel sesungguhnya.', html: 'sections/detail-marketer/templates/premium-2.html', css: 'assets/css/katalog/templates/m-premium-2.css' },
        'm-premium-3': { title: 'Case Study Pro', desc: 'Bedah tuntas campaign dengan format Problem -> Solution -> Result.', html: 'sections/detail-marketer/templates/premium-3.html', css: 'assets/css/katalog/templates/m-premium-3.css' },
        'm-premium-4': { title: 'Agency Deck', desc: 'Mirip pitch deck agensi untuk memukau klien B2B.', html: 'sections/detail-marketer/templates/premium-4.html', css: 'assets/css/katalog/templates/m-premium-4.css' },
        'm-premium-5': { title: 'Content Hub', desc: 'Gaya majalah/blog editorial untuk Content Marketer & Copywriter.', html: 'sections/detail-marketer/templates/premium-5.html', css: 'assets/css/katalog/templates/m-premium-5.css' }
    };
    const section = document.getElementById('premium-templates');
    if (!section) return;
    const capsuleBtns = section.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-m-premium-wrapper');
    const titleEl = document.getElementById('m-premium-title');
    const descEl = document.getElementById('m-premium-desc');
    const ctaBtn = document.getElementById('m-premium-cta-btn');
    let activeCssLink = null;

    async function loadTemplate(id) {
        if (!templatesInfo[id]) return;
        const info = templatesInfo[id];
        titleEl.innerText = info.title; descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Marketer%20Premium%20(${info.title})`;
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
    loadTemplate('m-premium-1');
};

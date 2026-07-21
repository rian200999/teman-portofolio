
window.initMarketerProController = function() {
    const templatesInfo = {
        'm-pro-1': { title: 'Marketing Dashboard', desc: 'CV berwujud Admin Panel. Sempurna untuk menunjukkan bahwa kamu master data.', html: 'sections/detail-marketer/templates/pro-1.html', css: 'assets/css/katalog/templates/m-pro-1.css' },
        'm-pro-2': { title: 'ROI Tracker', desc: 'Fokus ke laporan finansial ROAS/ROI kampanye iklan.', html: 'sections/detail-marketer/templates/pro-2.html', css: 'assets/css/katalog/templates/m-pro-2.css' },
        'm-pro-3': { title: 'Interactive Pitch', desc: 'Horizontal scroll layaknya presentasi slide deck memukau.', html: 'sections/detail-marketer/templates/pro-3.html', css: 'assets/css/katalog/templates/m-pro-3.css' },
        'm-pro-4': { title: 'Data Storyteller', desc: 'Timeline interaktif yang dipenuhi integrasi visualisasi data.', html: 'sections/detail-marketer/templates/pro-4.html', css: 'assets/css/katalog/templates/m-pro-4.css' },
        'm-pro-5': { title: 'The Strategist', desc: 'Layar terbelah (Split Screen) antara profil kokoh dan scrollable achievements.', html: 'sections/detail-marketer/templates/pro-5.html', css: 'assets/css/katalog/templates/m-pro-5.css' }
    };
    const section = document.getElementById('pro-templates');
    if (!section) return;
    const capsuleBtns = section.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-m-pro-wrapper');
    const titleEl = document.getElementById('m-pro-title');
    const descEl = document.getElementById('m-pro-desc');
    const ctaBtn = document.getElementById('m-pro-cta-btn');
    let activeCssLink = null;

    async function loadTemplate(id) {
        if (!templatesInfo[id]) return;
        const info = templatesInfo[id];
        titleEl.innerText = info.title; descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6283100710499?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Marketer%20PRO%20(${info.title})`;
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
    loadTemplate('m-pro-1');
};

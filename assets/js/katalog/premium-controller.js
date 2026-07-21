
window.initPremiumController = function() {
    const templatesInfo = {
        'premium-1': {
            title: 'The Architect',
            desc: 'Bento grid tingkat lanjut dengan efek Glassmorphism. Terdapat highlight khusus untuk Case Study.',
            html: 'sections/detail-engineer/templates/premium-1.html',
            css: 'assets/css/katalog/templates/premium-1.css'
        },
        'premium-2': {
            title: 'Code Canvas',
            desc: 'Layout realistis mirip aplikasi VS Code! Ada sidebar file explorer, tabs kode, dan terminal.',
            html: 'sections/detail-engineer/templates/premium-2.html',
            css: 'assets/css/katalog/templates/premium-2.css'
        },
        'premium-3': {
            title: 'SaaS Dashboard',
            desc: 'CV dibikin layaknya Admin Panel. Sempurna untuk memamerkan metrik API, uptime server, atau data analitik.',
            html: 'sections/detail-engineer/templates/premium-3.html',
            css: 'assets/css/katalog/templates/premium-3.css'
        },
        'premium-4': {
            title: 'Timeline Odyssey',
            desc: 'Fokus ke storytelling karir. Ada garis timeline vertikal tebal dengan desain yang sinematik.',
            html: 'sections/detail-engineer/templates/premium-4.html',
            css: 'assets/css/katalog/templates/premium-4.css'
        },
        'premium-5': {
            title: 'Cyber Deck',
            desc: 'Tema Sci-Fi / Hacker HUD dengan garis miring (clip-path), efek neon, dan form kontak ala mainframe.',
            html: 'sections/detail-engineer/templates/premium-5.html',
            css: 'assets/css/katalog/templates/premium-5.css'
        }
    };

    const capsuleBtns = document.querySelectorAll('.premium-capsule');
    const wrapper = document.getElementById('mockup-premium-wrapper');
    const titleEl = document.getElementById('premium-title');
    const descEl = document.getElementById('premium-desc');
    const ctaBtn = document.getElementById('premium-cta-btn');
    
    let activeCssLink = null;

    async function loadTemplate(id) {
        const info = templatesInfo[id];
        
        titleEl.innerText = info.title;
        descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Engineer%20Premium%20(${info.title})`;

        if (activeCssLink) { activeCssLink.remove(); }
        activeCssLink = document.createElement('link');
        activeCssLink.rel = 'stylesheet';
        activeCssLink.href = info.css;
        document.head.appendChild(activeCssLink);

        wrapper.classList.add('fade-out');
        try {
            const res = await fetch(info.html);
            const html = await res.text();
            
            setTimeout(() => {
                wrapper.innerHTML = html;
                wrapper.classList.remove('fade-out');
                wrapper.classList.add('fade-in');
            }, 300); 
            
        } catch(e) {
            console.error('Error loading template', e);
        }
    }

    capsuleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            capsuleBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const targetId = this.getAttribute('data-id');
            loadTemplate(targetId);
        });
    });

    loadTemplate('premium-1');
};

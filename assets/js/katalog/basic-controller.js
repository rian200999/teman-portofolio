
window.initBasicController = function() {
    const templatesInfo = {
        'basic-1': {
            title: 'Terminal V1',
            desc: 'Desain klasik ala hacker dengan struktur layaknya IDE. Fokus pada hierarki bahasa pemrograman.',
            html: 'sections/detail-engineer/templates/basic-1.html',
            css: 'assets/css/katalog/templates/basic-1.css'
        },
        'basic-2': {
            title: 'Minimalist Repo',
            desc: 'Terinspirasi dari layout GitHub. Bersih, to-the-point, menonjolkan riwayat kontribusi (Graph) & proyek.',
            html: 'sections/detail-engineer/templates/basic-2.html',
            css: 'assets/css/katalog/templates/basic-2.css'
        },
        'basic-3': {
            title: 'Tech Card',
            desc: 'Tipografi super besar (bold) dipadukan dengan Bento Grid. Sangat modern dan merepresentasikan UI/UX masa kini.',
            html: 'sections/detail-engineer/templates/basic-3.html',
            css: 'assets/css/katalog/templates/basic-3.css'
        },
        'basic-4': {
            title: 'Split View',
            desc: 'Layout elegan terbelah dua. Sisi kiri statis untuk profil, sisi kanan scrollable untuk detail pengalaman dan karya.',
            html: 'sections/detail-engineer/templates/basic-4.html',
            css: 'assets/css/katalog/templates/basic-4.css'
        },
        'basic-5': {
            title: 'Data Flow',
            desc: 'Nuansa Cyberpunk/Sci-Fi. Menampilkan data layaknya node yang saling terhubung dengan garis (flowchart style).',
            html: 'sections/detail-engineer/templates/basic-5.html',
            css: 'assets/css/katalog/templates/basic-5.css'
        }
    };

    const capsuleBtns = document.querySelectorAll('.capsule-btn');
    const wrapper = document.getElementById('mockup-basic-wrapper');
    const titleEl = document.getElementById('basic-title');
    const descEl = document.getElementById('basic-desc');
    const ctaBtn = document.getElementById('basic-cta-btn');
    
    let activeCssLink = null;

    async function loadTemplate(id) {
        const info = templatesInfo[id];
        
        // Update Title, Desc, CTA
        titleEl.innerText = info.title;
        descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Engineer%20Basic%20(${info.title})`;

        // Load CSS Dynamically (Remove old, add new)
        if (activeCssLink) { activeCssLink.remove(); }
        activeCssLink = document.createElement('link');
        activeCssLink.rel = 'stylesheet';
        activeCssLink.href = info.css;
        document.head.appendChild(activeCssLink);

        // Fetch HTML with fade effect
        wrapper.classList.add('fade-out');
        try {
            const res = await fetch(info.html);
            const html = await res.text();
            
            setTimeout(() => {
                wrapper.innerHTML = html;
                wrapper.classList.remove('fade-out');
                wrapper.classList.add('fade-in');
            }, 300); // Tunggu animasi fade out
            
        } catch(e) {
            console.error('Error loading template', e);
        }
    }

    // Event Listener untuk Capsule
    capsuleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            capsuleBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const targetId = this.getAttribute('data-id');
            loadTemplate(targetId);
        });
    });

    // Load default (basic-1) pertama kali
    loadTemplate('basic-1');
};

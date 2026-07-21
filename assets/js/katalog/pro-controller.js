
window.initProController = function() {
    const templatesInfo = {
        'pro-1': {
            title: 'Enterprise Grid',
            desc: 'Dashboard super padat ala corporate enterprise. Punya activity heatmap dan sidebar navigasi statis.',
            html: 'sections/detail-engineer/templates/pro-1.html',
            css: 'assets/css/katalog/templates/pro-1.css'
        },
        'pro-2': {
            title: 'Terminal OS',
            desc: 'Bukan sekadar terminal biasa, tapi sebuah "Window Manager" layaknya OS sungguhan dengan jendela yang saling bertumpuk (*overlapping*).',
            html: 'sections/detail-engineer/templates/pro-2.html',
            css: 'assets/css/katalog/templates/pro-2.css'
        },
        'pro-3': {
            title: 'Desktop UI',
            desc: 'CV berwujud antarmuka desktop MacOS/Windows. Lengkap dengan Menu Bar atas, Folder di layar, dan Dock aplikasi di bawah.',
            html: 'sections/detail-engineer/templates/pro-3.html',
            css: 'assets/css/katalog/templates/pro-3.css'
        },
        'pro-4': {
            title: 'Agile Board',
            desc: 'Sangat cocok untuk Tech Lead/PM. Pengalaman dan portfolio diubah menjadi kartu-kartu Kanban Board (To Do, In Progress, Done).',
            html: 'sections/detail-engineer/templates/pro-4.html',
            css: 'assets/css/katalog/templates/pro-4.css'
        },
        'pro-5': {
            title: 'Ultra Noir',
            desc: 'Tipografi raksasa nan elegan. Super minimalis, kontras tinggi, memberikan kesan CV dari Silicon Valley Executive.',
            html: 'sections/detail-engineer/templates/pro-5.html',
            css: 'assets/css/katalog/templates/pro-5.css'
        }
    };

    const capsuleBtns = document.querySelectorAll('.pro-capsule');
    const wrapper = document.getElementById('mockup-pro-wrapper');
    const titleEl = document.getElementById('pro-title');
    const descEl = document.getElementById('pro-desc');
    const ctaBtn = document.getElementById('pro-cta-btn');
    
    let activeCssLink = null;

    async function loadTemplate(id) {
        const info = templatesInfo[id];
        
        titleEl.innerText = info.title;
        descEl.innerHTML = info.desc;
        ctaBtn.href = `https://wa.me/6281234567890?text=Halo%20Admin,%20saya%20mau%20pesan%20Template%20Engineer%20PRO%20(${info.title})`;

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

    loadTemplate('pro-1');
};

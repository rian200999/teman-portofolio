window.initArtikelLogic = function() {
    const listWrapper = document.querySelector('.artikel-list-wrapper');
    const revealImg = document.querySelector('.hover-image-reveal');
    const rows = document.querySelectorAll('.artikel-row');

    if (!listWrapper || !revealImg) return;

    // 1. Gambar ngikutin posisi kursor di dalam kotak list
    listWrapper.addEventListener('mousemove', (e) => {
        const rect = listWrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Atur posisi div melayang pake style.left dan top
        revealImg.style.left = `${x}px`;
        revealImg.style.top = `${y}px`;
    });

    // 2. Munculin gambar pas barisnya di-hover
    rows.forEach(row => {
        row.addEventListener('mouseenter', () => {
            // Ambil data-bg dari HTML
            const bg = row.getAttribute('data-bg');
            revealImg.style.background = bg;
            revealImg.style.backgroundSize = 'cover';
            revealImg.classList.add('visible');
        });

        row.addEventListener('mouseleave', () => {
            revealImg.classList.remove('visible');
        });
    });
};
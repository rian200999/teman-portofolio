window.initKaryaLogic = function() {
    const listItems = document.querySelectorAll('.matrix-list-item');
    const screenItems = document.querySelectorAll('.m-screen-item');

    if (listItems.length === 0 || screenItems.length === 0) return;

    listItems.forEach(item => {
        // Bisa pakai 'mouseenter' untuk Desktop, dan 'click' untuk HP
        ['mouseenter', 'click'].forEach(evt => {
            item.addEventListener(evt, function() {
                // Hapus state aktif dari semua list dan layar
                listItems.forEach(li => li.classList.remove('active'));
                screenItems.forEach(screen => screen.classList.remove('active'));

                // Tambahkan state aktif ke elemen yang dituju
                this.classList.add('active');
                
                const targetId = this.getAttribute('data-target');
                const targetScreen = document.getElementById(targetId);
                
                if (targetScreen) {
                    targetScreen.classList.add('active');
                }
            });
        });
    });
};
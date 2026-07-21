window.initColorSwitcher = function() {
    const swatchGroups = document.querySelectorAll('.swatch-group');

    swatchGroups.forEach(group => {
        const targetId = group.getAttribute('data-target');
        const targetMockup = document.getElementById(targetId);
        
        if(!targetMockup) return;

        const swatches = group.querySelectorAll('.swatch');

        swatches.forEach(swatch => {
            swatch.addEventListener('click', function() {
                // Hapus active state dari semua tombol di grup ini
                swatches.forEach(s => s.classList.remove('active'));
                
                // Set active ke tombol yang diklik
                this.classList.add('active');

                // Ambil tema (contoh: 'theme-green')
                const selectedTheme = this.getAttribute('data-theme');

                // Hapus class tema lama yang ada di mockup
                targetMockup.className = targetMockup.className.replace(/\btheme-\S+/g, '');
                
                // Tambahkan tema baru
                targetMockup.classList.add(selectedTheme);
            });
        });
    });
    
    console.log("Color Switcher Online 🎨");
};
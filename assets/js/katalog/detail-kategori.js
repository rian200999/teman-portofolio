// Expose fungsi ke window agar bisa dipanggil setelah HTML fetch selesai
window.initColorSwitcher = function() {
    // Event delegation pada document biar gak peduli kapan tombol warna di-load
    document.removeEventListener('click', handleSwatchClick);
    document.addEventListener('click', handleSwatchClick);
    console.log("Color Switcher Ready 🎨");
};

function handleSwatchClick(e) {
    // Cek apakah elemen yang diklik adalah/didalam .swatch
    const swatch = e.target.closest('.swatch');
    if (!swatch) return;

    const group = swatch.closest('.swatch-group');
    if (!group) return;

    const targetId = group.getAttribute('data-target');
    const targetMockup = document.getElementById(targetId);
    if (!targetMockup) return;

    // 1. Hapus class 'active' dari semua tombol warna di grup ini
    const swatches = group.querySelectorAll('.swatch');
    swatches.forEach(s => s.classList.remove('active'));

    // 2. Tambahkan class 'active' ke tombol yang baru diklik
    swatch.classList.add('active');

    // 3. Ambil tema warna (contoh: 'theme-red')
    const selectedTheme = swatch.getAttribute('data-theme');

    // 4. Hapus class theme-* lama, ganti ke theme baru pada target container
    targetMockup.className = targetMockup.className.replace(/\btheme-\S+/g, '').trim();
    targetMockup.classList.add(selectedTheme);
}
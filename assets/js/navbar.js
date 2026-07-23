// Kita bungkus dalam event listener biar aman dijalankan walau dipanggil via loader
document.addEventListener("DOMContentLoaded", () => {

    function initNavbar() {
        // 1. Auto Active Link (Deteksi Halaman Saat Ini)
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const allNavLinks = document.querySelectorAll('.nav-link, .bottom-link, .dropdown-item');

        allNavLinks.forEach(link => {
            link.classList.remove('active');

            // Logika untuk mencocokkan URL
            const linkHref = link.getAttribute('href');
            if (linkHref === currentPath) {
                link.classList.add('active');

                // Jika yang aktif ada di dalam dropdown, aktifkan juga menu induknya (Layanan Kami)
                if (link.classList.contains('dropdown-item')) {
                    const parentMenu = link.closest('.nav-item-dropdown').querySelector('.nav-link');
                    if (parentMenu) parentMenu.classList.add('active');
                }
            }
        });

        // 2. Hamburger Menu Logic (Untuk Navbar Bawah di Mobile)
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navWrapper = document.getElementById('nav-wrapper');
        const navLinks = document.querySelectorAll('.nav-link');

        if (mobileMenuBtn && navWrapper) {
            const menuIcon = mobileMenuBtn.querySelector('i');

            mobileMenuBtn.addEventListener('click', () => {
                navWrapper.classList.toggle('active');

                // Kunci scroll halaman belakang biar ga geser-geser saat menu buka
                document.body.style.overflow = navWrapper.classList.contains('active') ? 'hidden' : 'auto';

                // Animasi ubah logo hamburger (garis tiga) jadi (X)
                if (navWrapper.classList.contains('active')) {
                    menuIcon.classList.replace('bx-menu', 'bx-x');
                    mobileMenuBtn.classList.add('active');
                } else {
                    menuIcon.classList.replace('bx-x', 'bx-menu');
                    mobileMenuBtn.classList.remove('active');
                }
            });

            // Tutup otomatis saat link di dalam overlay di klik
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navWrapper.classList.remove('active');
                    document.body.style.overflow = 'auto';
                    menuIcon.classList.replace('bx-x', 'bx-menu');
                    mobileMenuBtn.classList.remove('active');
                });
            });
        }
    }

    // Jika navbar sudah ada di DOM (hardcoded), langsung inisialisasi
    if (document.querySelector('.navbar-global')) {
        initNavbar();
    }
    // Jika navbar dimuat belakangan via fetch/AJAX (modular injection), 
    // kita gunakan MutationObserver untuk menunggu navbar masuk ke DOM.
    else {
        const observer = new MutationObserver((mutations, obs) => {
            if (document.querySelector('.navbar-global')) {
                initNavbar();
                obs.disconnect(); // Stop memantau setelah ketemu
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }
});
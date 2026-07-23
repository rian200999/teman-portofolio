document.addEventListener("DOMContentLoaded", () => {

    /* ========================================================
       1. LOGIKA HAMBURGER MENU (Pakai Event Delegation)
       ======================================================== */
    // Event listener dipasang ke document, jadi aman walau navbar di-load belakangan
    document.addEventListener('click', (e) => {

        // Cek apakah yang diklik adalah tombol menu atau icon di dalamnya
        const menuBtn = e.target.closest('#mobile-menu-btn');
        const navWrapper = document.getElementById('nav-wrapper');

        // A. JIKA TOMBOL HAMBURGER DIKLIK
        if (menuBtn && navWrapper) {
            const menuIcon = menuBtn.querySelector('i');

            // Buka/Tutup menu overlay
            navWrapper.classList.toggle('active');

            // Kunci scroll body
            document.body.style.overflow = navWrapper.classList.contains('active') ? 'hidden' : 'auto';

            // Ganti icon
            if (navWrapper.classList.contains('active')) {
                menuIcon.classList.replace('bx-menu', 'bx-x');
                menuBtn.classList.add('active');
            } else {
                menuIcon.classList.replace('bx-x', 'bx-menu');
                menuBtn.classList.remove('active');
            }
        }

        // B. JIKA LINK DI DALAM MENU DIKLIK (Tutup otomatis)
        const navLink = e.target.closest('.nav-link');
        if (navLink && navWrapper && navWrapper.classList.contains('active')) {
            const menuBtnActive = document.getElementById('mobile-menu-btn');
            if (menuBtnActive) {
                const icon = menuBtnActive.querySelector('i');
                icon.classList.replace('bx-x', 'bx-menu');
                menuBtnActive.classList.remove('active');
            }
            navWrapper.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });


    /* ========================================================
       2. LOGIKA ACTIVE LINK (Bulletproof Full URL Match)
       ======================================================== */
    function setActiveLink() {
        // 1. Ambil URL browser saat ini secara lengkap (buang embel-embel # atau ?)
        const currentUrl = window.location.href.split('#')[0].split('?')[0];
        
        const allNavLinks = document.querySelectorAll('.nav-link, .bottom-link, .dropdown-item');

        // Kalau elemen belum ada di DOM, minta observer nunggu
        if (allNavLinks.length === 0) return false;

        allNavLinks.forEach(link => {
            link.classList.remove('active');
            
            // 2. Gunakan properti link.href (otomatis membaca URL lengkap dari browser)
            if (link.href) {
                const linkUrl = link.href.split('#')[0].split('?')[0];
                
                // 3. Bandingkan URL link dengan URL browser
                if (linkUrl === currentUrl) {
                    link.classList.add('active');
                    
                    // Jika link ada di dalam dropdown, aktifkan menu utamanya
                    if (link.classList.contains('dropdown-item')) {
                        const dropdownParent = link.closest('.nav-item-dropdown');
                        if (dropdownParent) {
                            const parentMenu = dropdownParent.querySelector('.nav-link');
                            if (parentMenu) parentMenu.classList.add('active');
                        }
                    }
                }
            }
        });
        
        return true; // Sukses
    }

    /* ========================================================
       3. MUTATION OBSERVER (Mengecek Kapan Navbar Masuk ke DOM)
       ======================================================== */
    // Coba set active link sekarang, kalau gagal (karena belum load), minta bantuan Observer
    if (!setActiveLink()) {
        const observer = new MutationObserver((mutations, obs) => {
            if (document.querySelector('.navbar-global')) {
                setActiveLink();
                obs.disconnect(); // Matikan observer setelah navbar ketemu biar web ringan
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

});
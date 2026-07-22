document.addEventListener('DOMContentLoaded', async () => {
    
    // ==========================================
    // DATA FAQ (Gampang diedit di sini)
    // ==========================================
    const faqData = [
        {
            q: "Apa bedanya Teman Portofolio sama bikin web sendiri?",
            a: "Kalau bikin sendiri, kamu butuh waktu berhari-hari pusing mikirin coding, milih warna, dan nyesuaiin layout di HP. Di sini, kamu tinggal pilih template, kirim data CV, dan voila! Web kamu langsung tayang, responsif, dan siap dikirim ke HRD tanpa harus repot."
        },
        {
            q: "Kalau aku belum ada pengalaman kerja, cocok pakai template yang mana?",
            a: "Tenang saja, buat kamu yang baru lulus atau fresh graduate, kamu bisa pakai kategori The Corporate atau The Creator. Kita bisa ubah bagian pengalaman kerja untuk menampilkan project kampus, pengalaman organisasi, kepanitiaan, atau kegiatan volunteer kamu. HRD sangat menghargai kandidat yang proaktif!"
        },
        {
            q: "Bisa custom domain pakai nama-saya.com nggak?",
            a: "Bisa banget! Kalau kamu mengambil Paket Pro, sudah otomatis termasuk custom domain (.com / .my.id / dll) gratis untuk tahun pertama. Bayangin kamu menaruh link www.namakamu.com di CV, pasti aura profesionalnya langsung kerasa maksimal."
        },
        {
            q: "Apakah ada biaya langganan bulanan atau tahunan?",
            a: "Untuk jasa pembuatan web, kamu cukup bayar satu kali di awal saja, tanpa ada biaya langganan bulanan. Namun, kalau kamu menggunakan custom domain (.com), kamu hanya perlu membayar biaya perpanjangan domain setiap tahunnya ke pihak penyedia domain (harganya terjangkau kok!)."
        },
        {
            q: "Proses pengerjaannya butuh waktu berapa lama?",
            a: "Normalnya pengerjaan butuh waktu 1 sampai 3 hari kerja setelah data kamu lengkap dan pembayaran dikonfirmasi. Kalau kamu butuh cepat untuk melamar kerja besok pagi, coba langsung chat Admin kita via WA, siapa tahu bisa dibantu lebih cepat!"
        },
        {
            q: "Apakah ada garansi revisi kalau desainnya kurang pas?",
            a: "Tentu saja! Kamu berhak mendapatkan revisi sesuai dengan batas maksimal pada paket yang kamu pilih. Kita akan bantu sesuaikan sampai portofolio kamu benar-benar rapi dan siap buat modal cari kerja."
        }
    ];

    // ==========================================
    // FUNGSI LOAD KOMPONEN HTML
    // ==========================================
    async function loadComponent(elementId, componentPath) {
        try {
            const response = await fetch(componentPath);
            if (!response.ok) throw new Error(`Gagal memuat ${componentPath}`);
            const html = await response.text();
            const container = document.getElementById(elementId);
            if(container) { container.innerHTML = html; }
        } catch (error) { console.error(error); }
    }

    // Load Navbar, Footer, & Sections
    await loadComponent('navbar-placeholder', 'components/navbar.html');
    await loadComponent('footer-placeholder', 'components/footer.html');
    await loadComponent('hero-placeholder', 'sections/faq/hero.html');
    await loadComponent('accordion-placeholder', 'sections/faq/accordion.html');
    await loadComponent('cta-placeholder', 'sections/faq/cta.html');

    // Exec navbar internal script (hamburger dll)
    setTimeout(() => {
        const navbarContainer = document.getElementById('navbar-placeholder');
        if(navbarContainer) {
            const scripts = navbarContainer.querySelectorAll('script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                newScript.text = script.text;
                document.body.appendChild(newScript);
            });
        }

        // ==========================================
        // RENDER FAQ DATA KE HTML
        // ==========================================
        const faqContainer = document.getElementById('faq-container');
        if (faqContainer) {
            // Generate HTML dari Array
            faqContainer.innerHTML = faqData.map((item, index) => `
                <div class="faq-item">
                    <div class="faq-header">
                        <h3>${item.q}</h3>
                        <div class="faq-icon"><i class='bx bx-plus'></i></div>
                    </div>
                    <div class="faq-body">
                        <div class="faq-content">
                            ${item.a}
                        </div>
                    </div>
                </div>
            `).join('');

            // Pasang Logika Buka-Tutup Accordion
            const faqs = document.querySelectorAll('.faq-item');
            faqs.forEach(faq => {
                const header = faq.querySelector('.faq-header');
                header.addEventListener('click', () => {
                    const isActive = faq.classList.contains('active');
                    
                    // Tutup semua dulu
                    faqs.forEach(item => item.classList.remove('active'));

                    // Buka yang di-klik
                    if(!isActive) {
                        faq.classList.add('active');
                    }
                });
            });
        }
    }, 200);

    // Inisialisasi AOS Scroll Animation
    if (typeof AOS !== 'undefined') { AOS.init({ once: true, duration: 800, offset: 50 }); }
});
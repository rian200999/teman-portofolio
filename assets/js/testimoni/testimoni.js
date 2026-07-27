// 1. FUNGSI UNTUK LOAD SECTION HTML
async function loadSection(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Gagal memuat ${filePath}`);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

// 2. DATA DUMMY TESTIMONI
const dataTestimoni = [
    {
        nama: "Rian Hidayat",
        posisi: "Software Engineer",
        paket: "Custom", // Basic, Premium, Pro, Custom
        gambar: "https://temanportofolio.com/assets/img/testimonials/rian-hidayat.png",
        link: "https://rianhidayat.temanportofolio.com",
        testimoni: "Semenjak pakai Teman Portofolio, lamaranku yang tadinya sering di-ghosting sekarang mulai dapet panggilan HRD. Tampilan dataku jadi super rapi!"
    },
    // {
    //     nama: "Nabila Putri",
    //     posisi: "Digital Marketer",
    //     paket: "Custom",
    //     gambar: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
    //     link: "#",
    //     testimoni: `"Gila sih ini! Aku request paket custom buat nampilin hasil campaign Ads aku, hasilnya elegan banget. Nggak usah pusing mikirin coding sama sekali."`
    // },
    // {
    //     nama: "Reza Pahlevi",
    //     posisi: "UI/UX Designer",
    //     paket: "Pro",
    //     gambar: "https://images.unsplash.com/photo-1507238692062-71089ae4764b?w=800&q=80",
    //     link: "#",
    //     testimoni: `"Template-nya bener-bener manjain mata. Sebagai desainer, aku lumayan picky soal UI, tapi Teman Portofolio beneran ngasih standar agency kelas atas."`
    // },
    // {
    //     nama: "Andi Saputra",
    //     posisi: "Fresh Graduate",
    //     paket: "Basic",
    //     gambar: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    //     link: "#",
    //     testimoni: `"Buat anak fresh grad yang budget ngepas, ini ngebantu banget. CV gue yang bentuknya PDF kaku sekarang jadi web keren!"`
    // }
];

// LOGIC MUAT LEBIH BANYAK
let itemsPerLoad = 9; // UBAH JADI 9 (Kelipatan 3 biar gridnya selalu pas & rapi)
let currentItems = 0;

function renderTestimoni() {
    const gridContainer = document.getElementById('testimoni-grid');
    const btnLoadMore = document.getElementById('btn-muat-lagi');

    let endItem = currentItems + itemsPerLoad;

    for (let i = currentItems; i < endItem && i < dataTestimoni.length; i++) {
        const item = dataTestimoni[i];

        let badgeClass = 'badge-basic';
        if (item.paket.toLowerCase() === 'premium') badgeClass = 'badge-premium';
        if (item.paket.toLowerCase() === 'pro') badgeClass = 'badge-pro';
        if (item.paket.toLowerCase() === 'custom') badgeClass = 'badge-custom';

        const cardHTML = `
            <div class="ts-card" data-aos="fade-up">
                <!-- Wrapper Gambar Portofolio -->
                <div class="ts-image-wrapper">
                    <img src="${item.gambar}" alt="Portofolio ${item.nama}">
                </div>
                
                <div class="ts-header">
                    <div class="ts-profile">
                        <h3>${item.nama}</h3>
                        <p>${item.posisi}</p>
                        <!-- RATING BINTANG DISINI BIAR MAKIN MENJUAL -->
                        <div class="ts-stars">
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                        </div>
                    </div>
                    <span class="ts-badge ${badgeClass}">${item.paket}</span>
                </div>
                
                <!-- Hapus italic di CSS, ganti pakai tanda kutip elegan -->
                <p class="ts-quote">"${item.testimoni}"</p>
                
                <a href="${item.link}" target="_blank" class="ts-btn-visit">
                    Lihat Web Portofolio <i class='bx bx-right-arrow-alt'></i>
                </a>
            </div>
        `;
        gridContainer.insertAdjacentHTML('beforeend', cardHTML);
    }

    currentItems = endItem;

    if (currentItems >= dataTestimoni.length) {
        btnLoadMore.style.display = 'none';
    }
}

// 4. EKSEKUSI UTAMA
async function initPage() {
    await loadSection('navbar-placeholder', 'components/navbar.html');
    await loadSection('hero-placeholder', 'sections/testimoni/hero.html');
    await loadSection('grid-placeholder', 'sections/testimoni/grid.html');
    await loadSection('layanan-placeholder', 'sections/testimoni/layanan.html');

    renderTestimoni();

    document.getElementById('btn-muat-lagi').addEventListener('click', () => {
        renderTestimoni();
        AOS.refresh();
    });

    await loadSection('footer-placeholder', 'components/footer.html');

    AOS.init({
        duration: 800,
        once: true,
        offset: 50
    });
}

document.addEventListener("DOMContentLoaded", initPage);
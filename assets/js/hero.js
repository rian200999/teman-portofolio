window.initHeroRotation = function () {
    const flashcardData = [
        { level: 'n5', kanji: '始めましょう', romaji: 'Hajimemashou', meaning: '"Mari Kita Mulai"', desc: 'Level: N5 (Dasar)' },
        { level: 'n4', kanji: '家族', romaji: 'Kazoku', meaning: '"Keluarga"', desc: 'Level: N4 (Harian)' },
        { level: 'n3', kanji: '仕事', romaji: 'Shigoto', meaning: '"Pekerjaan"', desc: 'Level: N3 (Terampil)' },
        { level: 'n2', kanji: '準備', romaji: 'Junbi', meaning: '"Persiapan"', desc: 'Level: N2 (Bisnis)' },
        { level: 'n1', kanji: '成功', romaji: 'Seikou', meaning: '"Sukses"', desc: 'Level: N1 (Ahli)' }
    ];

    let currentIndex = 0;

    const updateCard = () => {
        currentIndex = (currentIndex + 1) % flashcardData.length;
        const data = flashcardData[currentIndex];

        const content = document.getElementById('card-content'); // Target isi kartu
        if (!content) return;

        // Animasi isi saja: Fade out & geser dikit
        content.style.opacity = '0';
        content.style.transform = 'translateY(10px)';

        setTimeout(() => {
            // Update Teks
            document.getElementById('kanji-text').innerText = data.kanji;
            document.getElementById('romaji-text').innerText = data.romaji;
            document.getElementById('meaning-text').innerText = data.meaning;
            document.getElementById('level-text').innerText = data.desc;

            // Update Badge Aktif (tetap berjalan)
            document.querySelectorAll('.level-badge').forEach(badge => {
                badge.classList.remove('active');
            });
            const activeBadge = document.getElementById(`badge-${data.level}`);
            if (activeBadge) activeBadge.classList.add('active');

            // Fade In kembali
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        }, 400);
    };

    setInterval(updateCard, 5000);
};
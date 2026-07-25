// 1. Suntikkan script library Google Analytics dari luar
const gtagScript = document.createElement('script');
gtagScript.async = true;
gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-92LE42Q5KF'; // ID kamu
document.head.appendChild(gtagScript);

// 2. Inisialisasi konfigurasi dataLayer
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// Eksekusi tracking
gtag('config', 'G-92LE42Q5KF');
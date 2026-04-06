window.initFooterLogic = function() {
    // Smooth scroll back to top untuk navigasi logo
    const pillLinks = document.querySelectorAll('.pill-links a');
    
    pillLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    console.log("Footer Bento System Online 🟢");
};
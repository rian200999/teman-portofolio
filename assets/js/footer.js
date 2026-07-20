window.initFooterLogic = function() {
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

    console.log("Light Mode Footer Online 🚀");
};
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // デモボタンのデバイス判定
    const demoBtn = document.getElementById('demo-btn');
    if (demoBtn) {
        demoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            const baseUrl = 'https://prototype-memberscard-function.vercel.app';
            const path = isMobile ? '/mini/scan' : '/demo/scan';
            window.location.href = baseUrl + path;
        });
    }
});


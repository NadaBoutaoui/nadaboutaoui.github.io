document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add animation class when element is in viewport
    function handleScrollAnimation() {
        document.querySelectorAll('.animate-on-scroll').forEach((element) => {
            if (isInViewport(element)) {
                element.classList.add('is-visible');
            }
        });
    }

    // Listen for scroll events
    window.addEventListener('scroll', handleScrollAnimation);

    // Trigger once on load
    handleScrollAnimation();
    const carousels = document.querySelectorAll('.project-carousel');
    
    carousels.forEach(carousel => {
        const container = carousel.querySelector('.project-carousel-container');
        const cards = carousel.querySelectorAll('.project-card');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        let currentIndex = 0;

        function showCard(index) {
            if (index < 0) index = cards.length - 1;
            if (index >= cards.length) index = 0;
            container.style.transform = `translateX(-${index * 320}px)`;
            currentIndex = index;
        }

        prevBtn.addEventListener('click', () => showCard(currentIndex - 1));
        nextBtn.addEventListener('click', () => showCard(currentIndex + 1));

        cards.forEach(card => {
            card.addEventListener('click', () => {
                if (card.classList.contains('active')) {
                    card.classList.remove('active');
                    document.body.classList.remove('blur-background');
                } else {
                    cards.forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                    document.body.classList.add('blur-background');
                }
            });
        });
    });

    // Close active card when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.project-card')) {
            document.querySelectorAll('.project-card.active').forEach(card => {
                card.classList.remove('active');
            });
            document.body.classList.remove('blur-background');
        }
    });
    // Add more interactive features here
});
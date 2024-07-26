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

    // Add more interactive features here
});
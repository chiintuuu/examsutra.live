document.addEventListener('DOMContentLoaded', () => {

    // --- Search Filter Logic ---
    const searchInput = document.querySelector('.header-search-input');
    const allCards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        allCards.forEach(card => {
            const cardName = card.dataset.name ? card.dataset.name.toLowerCase() : '';
            if (cardName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // --- Slide-Out Menu Logic ---
    const menuIcon = document.querySelector('.menu-icon');
    const slideOutMenu = document.querySelector('.slide-out-menu');
    const menuOverlay = document.querySelector('.menu-overlay');
    const body = document.querySelector('body');

    function toggleMenu() {
        slideOutMenu.classList.toggle('open');
        menuIcon.classList.toggle('open');
        menuOverlay.classList.toggle('active');
        body.classList.toggle('menu-open');
    }

    menuIcon.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);


    // --- "See More" Button Logic ---
    const seeMoreButtons = document.querySelectorAll('.see-more-btn');

    seeMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentSection = button.closest('.content-section');
            const hiddenCards = parentSection.querySelectorAll('.hidden-card');

            hiddenCards.forEach(card => {
                // Use a style property for a smooth transition
                if (card.style.display === 'block') {
                    card.style.display = 'none';
                } else {
                    card.style.display = 'block';
                }
            });

            // Change button text
            if (button.textContent === 'See More') {
                button.textContent = 'See Less';
            } else {
                button.textContent = 'See More';
            }
        });
    });

});
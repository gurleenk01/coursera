document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const right = document.getElementById('right');

  menuToggle.addEventListener('click', function() {
    right.classList.toggle('active');
  });
});






const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const cards = document.querySelectorAll('.card');
        const noMatchingCardsMessage = document.getElementById('no-matching-cards');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const checkedCategories = [];
                checkboxes.forEach(checkbox => {
                    if (checkbox.checked) {
                        checkedCategories.push(checkbox.value);
                    }
                });

                if (checkedCategories.length === 0) {
                    // If no checkboxes are selected, display all cards
                    cards.forEach(card => {
                        card.style.display = 'block';
                    });
                    noMatchingCardsMessage.style.display = 'none'; // Hide the message
                } else {
                    let anyCardVisible = false; // Flag to track if any card is visible

                    cards.forEach(card => {
                        const categories = card.dataset.category.split(' ');
                        const showCard = categories.some(category => checkedCategories.includes(category));
                        card.style.display = showCard ? 'block' : 'none';

                        if (showCard) {
                            anyCardVisible = true; // At least one card is visible
                        }
                    });

                    // Update the message visibility
                    if (anyCardVisible) {
                        noMatchingCardsMessage.style.display = 'none'; // Hide the message
                    } else {
                        noMatchingCardsMessage.style.display = 'block'; // Show the message
                    }
                }    
            });
        });

        var filterButton = document.getElementsById('filter-button');
        var closeButton = document.getElementById('closeButton');
        var filterList = document.querySelector('.filter');
        
        filterButton.addEventListener('click', function () {
            filterList.style.display = 'block';
            filterButton.style.display = 'none';
            closeButton.style.display = 'block';
        });
        
        closeButton.addEventListener('click', function () {
            filterList.style.display = 'none';
            closeButton.style.display = 'none';
            filterButton.style.display = 'block';
        }); 

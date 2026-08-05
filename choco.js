<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('category-nav');
    const buttons = nav.querySelectorAll('.category-btn');
    const categories = document.querySelectorAll('.menu-category');

    // Display the first category and set the first button as active on load
    const firstCategory = document.querySelector('#cafes');
    const firstButton = nav.querySelector('a[href="#cafes"]');
    if (firstCategory && firstButton) {
        firstCategory.classList.add('active-category');
        firstButton.classList.add('active-btn');
    }

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevents the default anchor jump

            // Remove the 'active' class from all buttons and categories
            buttons.forEach(btn => btn.classList.remove('active-btn'));
            categories.forEach(cat => cat.classList.remove('active-category'));

            // Add the 'active' class to the clicked button
            this.classList.add('active-btn');

            // Find and display the corresponding category
            const targetId = this.getAttribute('href');
            const targetCategory = document.querySelector(targetId);
            if (targetCategory) {
                targetCategory.classList.add('active-category');
            }
        });
    });
=======
document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('category-nav');
    const buttons = nav.querySelectorAll('.category-btn');
    const categories = document.querySelectorAll('.menu-category');

    // Display the first category and set the first button as active on load
    const firstCategory = document.querySelector('#cafes');
    const firstButton = nav.querySelector('a[href="#cafes"]');
    if (firstCategory && firstButton) {
        firstCategory.classList.add('active-category');
        firstButton.classList.add('active-btn');
    }

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevents the default anchor jump

            // Remove the 'active' class from all buttons and categories
            buttons.forEach(btn => btn.classList.remove('active-btn'));
            categories.forEach(cat => cat.classList.remove('active-category'));

            // Add the 'active' class to the clicked button
            this.classList.add('active-btn');

            // Find and display the corresponding category
            const targetId = this.getAttribute('href');
            const targetCategory = document.querySelector(targetId);
            if (targetCategory) {
                targetCategory.classList.add('active-category');
            }
        });
    });
>>>>>>> 216d741b0271a6eba8d6f7cb495ba4166d69a327
});
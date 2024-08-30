document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.content');

    sections[0].classList.add('active');
    menuItems[0].classList.add('active');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            sections.forEach(section => {
                section.classList.remove('active');
            });

            menuItems.forEach(menuItem => {
                menuItem.classList.remove('active');
            });
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
            this.classList.add('active');
        });
    });
});
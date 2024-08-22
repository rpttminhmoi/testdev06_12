document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.section');

    // Hiển thị section đầu tiên mặc định
    sections[0].classList.add('active');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            // Ẩn tất cả các section
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Hiển thị section được chọn
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });
});

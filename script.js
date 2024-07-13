document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');

    menuIcon.addEventListener('click', function() {
        navList.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        if (!menuIcon.contains(event.target) && !navList.contains(event.target)) {
            navList.classList.remove('show');
        }
    });
});

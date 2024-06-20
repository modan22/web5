document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navList = document.getElementById('navbar__list');
    
    // Dynamically create navigation items
    sections.forEach(section => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#${section.id}" class="menu-link">${section.dataset.nav}</a>`;
        navList.appendChild(listItem);
    });

    const navLinks = document.querySelectorAll('.menu-link');
    
    // Function to add 'active' class to the section in viewport
    function setActiveClass() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    // Scroll to sections
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href');
            const section = document.querySelector(sectionId);
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    window.addEventListener('scroll', setActiveClass);
});

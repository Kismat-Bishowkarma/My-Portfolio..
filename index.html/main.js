let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offssetTop;
        let height = sec.offsetHeight;
        let class = sec.getAttribute('class');


        if (top >=offset && top < offset + height) {
            navLinks.forEach(links =>  {
                links.classList.remove('active');
                document.querySelector('header navbar a [href*=' + id + ']').classic.add('active');
            });
        };
    });
};
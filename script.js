let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

const isMobile = window.matchMedia("(max-width: 1050px)").matches;
if (!isMobile) {
    sr.reveal('.navlist', { delay: 200, origin: 'top' });
}
sr.reveal('.logo', { delay: 200, origin: 'top' });
sr.reveal('.main-text', { delay: 500, origin: 'top' });
sr.reveal('.main-img', { delay: 1000, origin: 'top' });
sr.reveal('.icons', { delay: 500, origin: 'top' });
sr.reveal('.heading', { delay: 100, origin: 'top' });
sr.reveal('.box', { delay: 100, origin: 'top' });
sr.reveal('.testimonial-box', { delay: 100, origin: 'top' });
sr.reveal('.testimonial-heading', { delay: 100, origin: 'top' });
sr.reveal('.container', { delay: 100, origin: 'top' });
sr.reveal('.main', { delay: 100, origin: 'top' });
sr.reveal('.wrapper', { delay: 100, origin: 'top' });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const targetOffset = target.offsetTop;
            const scrollOptions = {
                top: targetOffset,
                behavior: 'smooth'
            };
            const distance = Math.abs(targetOffset - window.pageYOffset);
            const duration = Math.min(Math.max(distance / 3, 500), 1500);

            if ('scrollBehavior' in document.documentElement.style) {
                scrollOptions.behavior = 'smooth';
                scrollOptions.block = 'start';
                scrollOptions.inline = 'nearest';
                scrollOptions.duration = duration;
            }

            window.scrollTo(scrollOptions);
        }
    });
});
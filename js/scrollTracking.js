const scrollTrack = () => {
    const fromTop = window.scrollY;
    const pProjects = document.getElementById('projects').offsetTop;
    const pContact = document.getElementById('contact').offsetTop;

    const aLink = document.getElementById('aLink');
    const pLink = document.getElementById('pLink');
    const cLink = document.getElementById('cLink');

    if (fromTop <= 0.5*pProjects) {
        aLink.classList.add('navbar-link-active');
        pLink.classList.remove('navbar-link-active');
        cLink.classList.remove('navbar-link-active');
    }
    else if (fromTop > 0.5*pProjects && fromTop <= 0.75*pContact) {
        aLink.classList.remove('navbar-link-active');
        pLink.classList.add('navbar-link-active');
        cLink.classList.remove('navbar-link-active');
    }
    else if (fromTop > 0.75*pContact) {
        aLink.classList.remove('navbar-link-active');
        pLink.classList.remove('navbar-link-active');
        cLink.classList.add('navbar-link-active');
    }
}

window.addEventListener('scroll', e => {
    scrollTrack();
});

scrollTrack();
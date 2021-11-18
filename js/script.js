addEventListener('scroll', ()=> {
    if (document.scrollingElement.scrollTop >= 1) {
        document.querySelectorAll('header')[1].style.display = 'flex';
        document.querySelectorAll('header')[1].style.animationName = 'anim-header';
    } else {
        document.querySelectorAll('header')[1].style.animationName = 'anim-header-reverse';
    }
})
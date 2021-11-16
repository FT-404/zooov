addEventListener('scroll', ()=> {
    console.log(document.scrollingElement.scrollTop)
    if (document.scrollingElement.scrollTop >= 800) {
        document.querySelector('header').classList.add('scroll');
        console.log('gg')
    } else {
        document.querySelector('header').classList.remove('scroll');
    }
})
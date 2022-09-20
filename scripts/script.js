const burgerMenu = document.querySelector('.burger__menu')
burgerMenu.addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('visible')
})
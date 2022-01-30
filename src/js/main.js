window.onload = () => {
    const animateBlob = KUTE.fromTo(
        '#blob1',
        { path: '#blob1' },
        { path: '#blob2' },
        { repeat: 999, duration: 3000, yoyo: true }
    )

    animateBlob.start()
}

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY
    const menuId = document.getElementById('menu')

    if (scrollPos > 100) {
        menuId.setAttribute('data-show', 'true')
    } else {
        menuId.setAttribute('data-show', 'false')
    }

    console.log(scrollPos)
})
document.addEventListener("DOMContentLoaded",  () => {
    const allLinks = document.querySelectorAll('a')
    allLinks.forEach(link => {
        link.href = '#'
        link.target = ''
        link.addEventListener('click', window.scrollBy(0, 0))
    })
})
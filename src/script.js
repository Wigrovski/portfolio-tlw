const btn = document.getElementById('modalBtn')
const modalMenu = document.getElementById('modal')
const modalClose = document.getElementById('close')

btn.addEventListener('click', () => {
    if (modalMenu.classList = 'hidden') {
        modalMenu.classList = 'block'
    } else { modalMenu.classList = 'hidden' }
})
modalClose.addEventListener('click', () => {
    modalMenu.classList = 'hidden'
})

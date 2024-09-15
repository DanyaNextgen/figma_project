let open_modal = document.querySelector('[data-open]')
let close_modal = document.querySelector('[data-close]')
let dialog = document.querySelector('dialog')
let modal = document.querySelector('.modal')

open_modal.onclick = () => {
    dialog.showModal()
    // modal.classList.add('show')
}

close_modal.onclick = () => {
    dialog.close()
    // modal.classList.remove('show')
}
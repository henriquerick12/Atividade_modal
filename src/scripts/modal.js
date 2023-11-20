/* Desenvolva seu código aqui... */
const modalController = document.querySelector('#modalController');
const buttonOpenModal = document.querySelector('.form__register-link')
const buttonClosed = document.querySelector('.modal__buttons button:first-child')

buttonOpenModal.addEventListener('click', () => {
    modalController.showModal()
})

buttonClosed.addEventListener('click', () => {
    modalController.close()
})



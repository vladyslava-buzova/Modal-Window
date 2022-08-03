// There is class .open-modal in Css (we have to add this class or remove to .modal-overlay)

// select .modal-btn, .modal-overlay, .close-btn
// when click on .modal-btn => add class .open-modal to .modal-overlay
// when click on .close-btn => remove class .open-modal from .modal-overlay

const modalButton = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeButton = document.querySelector('.close-btn');


modalButton.addEventListener('click', () => {
  modalOverlay.classList.add('open-modal')
})

closeButton.addEventListener('click', () => {
  modalOverlay.classList.remove('open-modal')
})

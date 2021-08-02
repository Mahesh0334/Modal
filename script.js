'use strict';
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const openModal = function () {
  modal.classList.remove('hidden'); //shows the hidden modal
  overlay.classList.remove('hidden'); //shows the hidden modal
};

const closeModal = function () {
  overlay.classList.add('hidden'); // on click 'X' on modal thhis line hides the modal again. i.e., display:none.
  modal.classList.add('hidden'); // on click 'X' on modal thhis line hides the modal again. i.e., display:none.
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}

document.addEventListener('keydown', function (e) {
  // closing a mdal using ESC key.
  // console.log(e.key);
  if (e.key === 'Escape') {
    closeModal();
    // if (!modal.classList.contains('hidden')) {
    //   closeModal();
    // }
  }
});

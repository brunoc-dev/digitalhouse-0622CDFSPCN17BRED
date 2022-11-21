const userModal = document.querySelector('div.modal');
const userAvatarBtn = document.querySelector('#user-avatar-btn');
const closeModalBtn = document.getElementById('close-modal-btn');

userAvatarBtn.onclick = () => {
  userModal.classList.add('show-modal');
}

closeModalBtn.onclick = () => {
  userModal.classList.remove('show-modal');
};

userModal.onclick = (event) => {
  if (event.target !== userModal) return

  userModal.classList.remove('show-modal');
};
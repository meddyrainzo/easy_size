export function createModal() {
  const modalBackground = document.createElement('div');
  const modal = document.createElement('div');
  modal.classList.add('react-container');
  modalBackground.appendChild(modal);

  styleModalBackground(modalBackground);
  styleModal(modal);
  modal.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  return modalBackground;
}

export function clearModal(modal: HTMLDivElement) {
  // modal.textContent = '';
}

// STYLES
function styleModalBackground(modalBackground: HTMLDivElement) {
  modalBackground.style.position = 'fixed';
  modalBackground.style.width = '100vw';
  modalBackground.style.height = '100vh';
  modalBackground.style.display = 'flex';
  modalBackground.style.alignItems = 'center';
  modalBackground.style.justifyContent = 'center';
  modalBackground.style.top = '0';
  modalBackground.style.left = '0';
  modalBackground.style.zIndex = '1';
  modalBackground.style.backgroundColor = '#000';
  modalBackground.style.opacity = '94%';
}

function styleModal(modal: HTMLDivElement) {
  modal.style.maxWidth = '64vw';
  modal.style.maxHeight = '80vh';
  modal.style.backgroundColor = 'white';
  modal.style.zIndex = '2';
}

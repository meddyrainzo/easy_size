export function createModalBackground() {
  const modalBackground = document.createElement('div');
  styleModalBackground(modalBackground);

  return modalBackground;
}

export function addModalToBackground(modalBackground: HTMLDivElement) {
  const modal = document.createElement('div');
  modal.classList.add('react-container');
  styleModal(modal);
  modal.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  modalBackground.appendChild(modal);
  modal.animate([{ transform: 'scale(0)' }, { transform: 'scale(1)' }], {
    duration: 400,
  });
}

export function removeModalFromBackground(modalBackground: HTMLDivElement) {
  const modal = modalBackground.firstChild as HTMLDivElement;
  if (!modal) return;
  modal.animate([{ transform: 'scale(1)' }, { transform: 'scale(0)' }], {
    duration: 250,
  });
  setTimeout(() => modalBackground.removeChild(modal), 250);
}

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
  modalBackground.style.opacity = '98%';
}

function styleModal(modal: HTMLDivElement) {
  modal.style.maxWidth = '64vw';
  modal.style.maxHeight = '76vh';
  modal.style.minWidth = '50vw';
  modal.style.backgroundColor = 'white';
  modal.style.zIndex = '2';
}

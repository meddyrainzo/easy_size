import WidgetConfig from './config/WidgetConfig';
import { createWidgetButton } from './createWidgetButton';
import { createModal } from './modal';

type WidgetType = {
  start: () => void;
};

export function Widget({
  widgetButton: {
    selector,
    backgroundColor = '#0DAC50',
    foregroundColor = '#FAFAFA',
    text = 'Surprise me',
  },
}: WidgetConfig) {
  console.log('Inside the widget');
  function showModal(modal: HTMLDivElement) {
    document.querySelector(selector).appendChild(modal);
  }

  function closeModal(modal: HTMLDivElement) {
    document.querySelector(selector).removeChild(modal);
  }

  const main: WidgetType = {
    start: () => {
      const widgetButton = createWidgetButton({
        selector,
        backgroundColor,
        foregroundColor,
        text,
      });

      const modal = createModal();
      widgetButton.addEventListener('click', () => showModal(modal));
      modal.addEventListener('click', () => closeModal(modal));

      document.querySelector(selector).appendChild(widgetButton);
    },
  };
  return main;
}

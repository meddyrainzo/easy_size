import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

import WidgetConfig from './config/WidgetConfig';
import { createWidgetButton } from './createWidgetButton';
import { createModal } from './modal';

type WidgetType = {
  start: () => void;
};

export default function Widget({
  widgetButton: {
    selector,
    backgroundColor = '#0DAC50',
    foregroundColor = '#FAFAFA',
    text = 'Surprise me',
  },
}: WidgetConfig) {
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

      ReactDOM.render(
        <StrictMode>
          <App />
        </StrictMode>,
        modal.firstElementChild
      );
    },
  };
  return main;
}

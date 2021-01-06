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
  attributes,
  image,
  attributeType,
  widgetButton: {
    selector,
    backgroundColor = '#0DAC50',
    foregroundColor = '#FAFAFA',
    text = 'Surprise me',
  },
}: WidgetConfig) {
  let modal: HTMLDivElement | undefined;
  function showModal() {
    if (!modal) {
      modal = createModal();
      modal.addEventListener('click', () => closeModal());

      const selectorElement = document.querySelector(selector);
      selectorElement?.appendChild(modal);

      ReactDOM.render(
        <StrictMode>
          <App
            image={image}
            attributes={attributes}
            attributeType={attributeType}
            selectAttribute={selectAttribute}
          />
        </StrictMode>,
        modal.firstElementChild
      );
    }
    document.querySelector(selector)?.appendChild(modal);
  }

  function closeModal() {
    if (!modal) return;
    document.querySelector(selector)?.removeChild(modal);
    modal = undefined;
  }

  function selectAttribute(attributeId: string) {
    const inputElement = document.getElementById(
      attributeId
    ) as HTMLInputElement;
    inputElement.checked = true;
    closeModal();
  }

  const main: WidgetType = {
    start: () => {
      const widgetButton = createWidgetButton({
        selector,
        backgroundColor,
        foregroundColor,
        text,
      });
      widgetButton.addEventListener('click', () => showModal());
      document.querySelector(selector)?.append(widgetButton);
    },
  };
  return main;
}

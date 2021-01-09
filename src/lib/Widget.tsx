import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from '../react-app/App';

import WidgetConfig from './config/WidgetConfig';
import { createWidgetButton } from './createWidgetButton';
import {
  addModalToBackground,
  createModalBackground,
  removeModalFromBackground,
} from './modal';

type WidgetType = {
  start: () => void;
};

export default function Widget({
  attributes,
  image,
  attributeType,
  cartButtonSelector,
  selectAttribute,
  widgetLaunchButton: {
    selector,
    backgroundColor = '#0DAC50',
    foregroundColor = '#FAFAFA',
    text = 'Surprise me',
  },
}: WidgetConfig) {
  let modalBackground = createModalBackground();

  function selectAttributeAction(attribute: string) {
    selectAttribute(attribute);
    closeModal();
    if (cartButtonSelector) {
      const cartButton = document.querySelector(
        cartButtonSelector
      ) as HTMLButtonElement;
      cartButton.click();
    }
  }

  function showModal() {
    modalBackground.addEventListener('click', () => closeModal());
    addModalToBackground(modalBackground);

    const selectorElement = document.querySelector(selector);
    selectorElement?.appendChild(modalBackground);

    ReactDOM.render(
      <StrictMode>
        <App
          image={image}
          attributes={attributes}
          attributeType={attributeType}
          selectAttribute={selectAttributeAction}
        />
      </StrictMode>,
      modalBackground.firstElementChild
    );
  }

  function closeModal() {
    removeModalFromBackground(modalBackground);
    modalBackground.removeEventListener('click', () => closeModal());
    setTimeout(
      () => document.querySelector(selector)?.removeChild(modalBackground),
      250
    );
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
      widgetButton.animate([{ opacity: '0' }, { opacity: '100' }], {
        duration: 400,
      });
    },
  };
  return main;
}

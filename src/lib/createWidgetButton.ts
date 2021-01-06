import { WidgetButtonConfig } from './config/WidgetButtonConfig';

export function createWidgetButton(widgetButtonConfig: WidgetButtonConfig) {
  const placeHolderButton = document.createElement('button');
  styleWidgetButton(placeHolderButton, widgetButtonConfig);

  return placeHolderButton;
}

// THE STYLES
function styleWidgetButton(
  placeHolderButton: HTMLButtonElement,
  widgetButtonConfig: WidgetButtonConfig
) {
  const { backgroundColor, foregroundColor, text } = widgetButtonConfig;
  placeHolderButton.style.padding = '1em 2em';
  placeHolderButton.style.backgroundColor = backgroundColor;
  placeHolderButton.style.color = foregroundColor;
  placeHolderButton.style.border = `1px solid ${backgroundColor}`;
  placeHolderButton.style.borderRadius = '4px';
  placeHolderButton.style.cursor = 'pointer';
  placeHolderButton.textContent = text;
}

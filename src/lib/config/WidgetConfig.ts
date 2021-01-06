import { WidgetButtonConfig } from './WidgetButtonConfig';
import { WidgetProps } from './WidgetProps';

type WidgetConfig = WidgetProps & {
  widgetButton: WidgetButtonConfig;
  cart_button?: string;
};

export default WidgetConfig;

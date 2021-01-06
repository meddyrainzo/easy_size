import { WidgetButtonConfig } from './WidgetButtonConfig';
import { WidgetProps } from './WidgetProps';

type WidgetConfig = WidgetProps & {
  widgetButton: WidgetButtonConfig;
};

export default WidgetConfig;

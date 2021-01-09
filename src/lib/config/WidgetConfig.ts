import { WidgetButtonConfig } from './WidgetButtonConfig';
import { AppProps } from '../AppProps';

type WidgetConfig = AppProps & {
  cartButtonSelector?: string;
  widgetLaunchButton: WidgetButtonConfig;
};

export default WidgetConfig;

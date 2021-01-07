import { WidgetButtonConfig } from './WidgetButtonConfig';
import { WidgetProps } from './WidgetProps';

type WidgetConfig = WidgetProps & {
  cartButtonSelector?: string;
  selectAttribute?: (attrId: string) => void;
  widgetLaunchButton: WidgetButtonConfig;
};

export default WidgetConfig;

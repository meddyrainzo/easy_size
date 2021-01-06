import { WidgetButtonConfig } from './WidgetButtonConfig';

type WidgetConfig = {
  productName?: string;
  productPrice?: string;
  widgetButton?: WidgetButtonConfig;
  attributes?: string[];
  cart_button?: string;
  image?: string;
  select_attribute?: () => void;
  productDescription?: string;
};

export default WidgetConfig;

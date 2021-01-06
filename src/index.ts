import { Widget } from './lib/widget';

console.log('I am in here');
var widget = Widget({ widgetButton: { selector: '.main' } });
widget.start();

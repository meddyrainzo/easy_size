$(document).ready(function() {
    var configuration = {
        attributes: ['red', 'green', 'blue'],
        image: 'https://i.ytimg.com/vi/xFe_ZYtfsZg/maxresdefault.jpg',
        attributeType: 'colors',
        // selectAttribute,
        widgetButton: {
            selector: '.product-color',
        },
    }
    var widget = Widget(configuration);
    setTimeout(widget.start, 2000);
})
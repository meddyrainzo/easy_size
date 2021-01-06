$(document).ready(function() {
    console.log('I am in here');
    // console.log(Widget());
    var widget = Widget({ widgetButton: { selector: '.main' } });
    widget.start();
})

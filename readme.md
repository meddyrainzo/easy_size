# EasySize frontend task

This is in response to the `EasySize` frontend task. The task is to build a library that embeds a `React` application into any `eCommerce` application.

## How it works

A button is attached to an element on your HTML page. Clicking on this button launches a modal with a react application embeded inside of it. The react application works according to the specification of the task

## Configuration

In order to use the library, the following configurations must be set

- `attributes` -> `mandatory`: This is a string array containing the ids of the attributes you wish to randomly select from
- `attributeType` -> `mandatory`: This is a string that represents the name of the group of attributes being selected. from. For example, "colors", "size", "length" etc.

If the `attributeType` is 'color' or 'colors', the`attributes` sent should correspond to the color of the attribute. (ie the id should be the color)

- `image` -> `mandatory`: This is a string representing the image url of the product
- `widgetButton` -> This is an object that gives flexibility to the button that launches the modal. It can take the following parameters
  - `selector` -> `mandatory`: This is the selector of the element you want to attach the button to
  - `backgroundColor` -> `optional`: This sets tbe background color of the button. Defaults to `#0DAC50`
  - `foregroundColor` -> `optional`: This sets the foreground color of the button. Defaults to `#FAFAFA`
  - `text` -> `optional`: This sets the text of the button. Defaults to `Surprise me`

Example configuration

    var configuration = {
        attributes: ['red', 'black', 'blue'],
        image: 'https://i.ytimg.com/vi/xFe_ZYtfsZg/maxresdefault.jpg',
        attributeType: 'colors',
        widgetButton: {
            selector: '.product-color',
            text: 'Really surprise me!'
        },
    }

### Disclaimer

The path to the image in the sample configuration file is missing the 'public' directory :)

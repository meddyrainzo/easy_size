# EasySize frontend task

This is in response to the `EasySize` frontend task. The task is to build a library that embeds a `React` application into any `eCommerce` application.

## Configuration

In order to use the library, the following configurations must be set

- `attributes` -> `mandatory`: This is a string array containing the selectors of the attributes you wish to randomly select from
- `attributeType` -> `mandatory`: This is a string that represents the name of the group of attributes being selected. from. For example, "colors", "size", "length" etc.

**NOTE**: If the `attributeType` is 'color' or 'colors', the`attributes` sent should correspond to the color of the attribute. (ie the id should be a valid color name). This is a purposeful limitation added

- `image` -> `mandatory`: This is a string representing the image url of the product
- `cartButtonSelector` -> `optional`: If you want the product with the selected attribute to be automagically added to the cart after the random selection is made, then provide the selector to the `Add to cart` button (or something similar) of your application
- `selectAttribute` -> `mandatory`: This is the callback function to select the attribute that was randomly choosen by the library. It is the responsibility of who ever is using the library to write how the attribute should be selected. The library's job is just to randomly select the attribute and give the result to this function.
- `widgetLaunchButton` -> This is an object that gives flexibility to the button that launches the modal. It can take the following parameters
  - `selector` -> `mandatory`: This is the selector of the element you want to attach the button to
  - `backgroundColor` -> `optional`: This sets tbe background color of the button. Defaults to `#0DAC50`
  - `foregroundColor` -> `optional`: This sets the foreground color of the button. Defaults to `#FAFAFA`
  - `text` -> `optional`: This sets the text of the button. Defaults to `Surprise me`

Example configuration

    let configuration = {
        attributes: ['red', 'black', 'blue'],
        image: 'https://i.ytimg.com/vi/xFe_ZYtfsZg/maxresdefault.jpg',
        attributeType: 'colors',
        selectAttribute: function(attr) {
            $(`#${attr}`).prop('checked', true)
        },
        cartButtonSelector: '.cart-btn',
        widgetLaunchButton: {
            selector: '.product-color',
            text: 'Really surprise me!'
        },
    }

## Switching from router to useReducer and useContext

At first glance, solving this with `React-router` seems like the straight forward solution. The trick here is that with `React-router`, the library will be directly altering the routes of the client's site. This means the library will change the route on the client site when it (the library) goes from one it's pages to the other. I doubt this is the intended behavior of the library.

Instead, I chose to solve this using the `useReducer` and `useContext` hooks along with conditionally showing the pages of the librarry's modal depending on the state of the modal (`IDLE` or `IN-PROGRESS`)

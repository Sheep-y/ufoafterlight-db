Sheepy's UFO: Afterlight database
=================================

For project description and downloadable file, see the [main branch](https://github.com/Sheep-y/ufoafterlight-db/).

JavaScript code is in [`res`](https://github.com/Sheep-y/ufoafterlight-db/tree/development/res) folder.
* [`core.js`](https://github.com/Sheep-y/ufoafterlight-db/blob/development/res/core.js) defines the main namespace. It also handles data initialisation, normalisation, and generate entity description.
* [`ui.js`](https://github.com/Sheep-y/ufoafterlight-db/blob/development/res/ui.js) initialises the UI, provide access to url state, and displays search results.
* [`event.js`](https://github.com/Sheep-y/ufoafterlight-db/blob/development/res/event.js) contains event handlers, including first line response to state change, search, and other events.
* [`builder.js`](https://github.com/Sheep-y/ufoafterlight-db/blob/development/res/builder.js) is responsible for building the actual result boxes.
* [`data`](https://github.com/Sheep-y/ufoafterlight-db/tree/development/data) is plain JS, simplified but mostly follows original structure.
* The underscore is a light custom JS library, but the program is mostly ES5.
* [`html`](https://github.com/Sheep-y/ufoafterlight-db/tree/development/html) is HTML 5.
* [`css`](https://github.com/Sheep-y/ufoafterlight-db/blob/development/res/style.css) is CSS 3.

A custom build tool (a Java jar) is included in the [project root](https://github.com/Sheep-y/ufoafterlight-db/tree/development/).
Run it and it will produce [index.html](https://github.com/Sheep-y/ufoafterlight-db/blob/master/index.html) from  [ufoal.html](https://github.com/Sheep-y/ufoafterlight-db/blob/development/ufoal.html), outputting build messages to stdout.
[Images](https://github.com/Sheep-y/ufoafterlight-db/tree/development/img) are embedded as data uri.
Data and license are deflated and Base64 encoded, making a smaller package both for download and for HTTP compression.

It should be easy to rewrite the template for your preferred build tool, or simply change everything to html links.

This program is free and open, licensed under [AGPL v3](http://www.gnu.org/licenses/agpl-3.0.html).
Most text and all icons are copyrighted 2007 ATLAR games.
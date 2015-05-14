# Sheepy's UFO: Afterlight database #

**[&lt;Launch database&gt;](https://cdn.rawgit.com/Sheep-y/ufoafterlight-db/r20150514/index.html)**
**For source code, see [development branch](https://github.com/Sheep-y/ufoafterlight-db/tree/development).**

This database shows the stats and dependency tree of selected technology, equipment, building, station, or training.
It also shows the composition of enemy squads and information on enemy units.

Instead of opening it online, you can also right click the launch link and save it on your drive / memory to use it anywhere.

This is inspired by [Kircket's Tech Tree](http://www.irodemine.com/afterlit/), sparked by a [discussion on Stream](http://steamcommunity.com/app/237950/discussions/0/616188677801999309/#c619568793974409287).
Active development is NOT planned, because this database is a small sidetrack from the author's focus of the [UFO: Afterlight wiki](http://ufoafterblank.wikia.com/) on Wikia.

## Developer's Guide ##

This is a self-contained, interactive, high speed, small footprint database with 9000+ 'rows' of data in 30+ 'tables'.
The [HTML5](http://diveintohtml5.info/) program is [procedural](http://en.wikipedia.org/wiki/Procedural_programming) in essence, has around 1600 lines of code (excluding data).

JavaScript code is in [`res`](https://github.com/Sheep-y/ufoafterlight-db/tree/development/res) folder.
* [`core.js`](https://github.com/Sheep-y/ufoafterlight-db/blob/development/res/core.js) defines the main namespace. It also handles data initialisation and normalisation.
* [`ui.js`](https://github.com/Sheep-y/ufoafterlight-db/blob/development/res/ui.js) initialises the UI, provide access to url state, and find search matches.
* [`event.js`](https://github.com/Sheep-y/ufoafterlight-db/blob/development/res/ui.event.js) contains UI event handlers.
* [`ui.builder.js`](https://github.com/Sheep-y/ufoafterlight-db/blob/development/res/ui.builder.js) builds entry boxes.
* [`ui.event.js`](https://github.com/Sheep-y/ufoafterlight-db/blob/development/res/ui.event.js) has all the actual event handlers.
* [`desc.js`](https://github.com/Sheep-y/ufoafterlight-db/blob/development/res/desc.js) generates description for data.
* [`data`](https://github.com/Sheep-y/ufoafterlight-db/tree/development/data) are plain JS, simplified but mostly use original structure. They were manually converted by regx.
* Except [`mapping.js`](https://github.com/Sheep-y/ufoafterlight-db/tree/development/data/mapping.js) and [`txt_trigger.js`](https://github.com/Sheep-y/ufoafterlight-db/tree/development/data/txt_trigger.js), both hand coded.
* The underscore is a light custom JS library, but the program is mostly ES5.
* [`html`](https://github.com/Sheep-y/ufoafterlight-db/tree/development/html) is HTML 5.
* [`css`](https://github.com/Sheep-y/ufoafterlight-db/blob/development/res/style.css) is CSS 3.

[Images](https://github.com/Sheep-y/ufoafterlight-db/tree/development/img) are [compiled to](http://draeton.github.io/stitches/) [sprite](https://github.com/Sheep-y/ufoafterlight-db/tree/development/img/sprite.png), then [optimised](http://advancemame.sourceforge.net/comp-readme.html), and finally embedded as data uri.
Data and text are [deflated](http://docs.oracle.com/javase/8/docs/api/java/util/zip/DeflaterOutputStream.html) and [Base64 encoded](http://docs.oracle.com/javase/8/docs/api/java/util/Base64.Encoder.html), keeping the program small.
I find this much more efficient and [reliable](http://en.wikipedia.org/wiki/HTTP_compression#Problems_preventing_the_use_of_HTTP_compression) than HTTP compression.

The build tool 'CocoDoc' (a [Java jar](https://docs.oracle.com/javase/tutorial/deployment/jar/basicsindex.html)) is included in the [project root](https://github.com/Sheep-y/ufoafterlight-db/tree/development/).
[Run it](http://stackoverflow.com/a/5774976/893578) and it will loads [build config](https://github.com/Sheep-y/ufoafterlight-db/tree/development/build.cocodoc.conf), which direct it to reads [ufoal.html](https://github.com/Sheep-y/ufoafterlight-db/tree/development/ufoal.html).
If there is no error, it will create (overwrite) [index.html](https://github.com/Sheep-y/ufoafterlight-db/blob/master/index.html).

The build tool is necessary to produce a self-contained deliverable, and to keep it small.
If this is not required, it should be easy to change everything to html links.

This program is free and open, licensed under [AGPL v3](http://www.gnu.org/licenses/agpl-3.0.html).
Most text and icons are copyrighted 2007 ATLAR games.
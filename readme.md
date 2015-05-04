Sheepy's UFO: Afterlight database
=================================

For project description and downloadable file, see the [main branch](https://github.com/Sheep-y/ufoafterlight-db/).

This is a self-contained, interactive, high speed, small footprint database with ~9000 'rows' of data in 30 'tables'.
It uses fair amount of [HTML5](http://diveintohtml5.info/) features, such as [datalist](http://www.w3.org/TR/html5/forms.html#the-datalist-element), [multi-column layout](http://www.w3.org/TR/css3-multicol/#introduction), [gradient](http://www.w3.org/TR/css3-images/#linear-gradients), [pseudo-elements](http://www.w3.org/TR/CSS2/generate.html#before-after-content), [data uri](https://www.ietf.org/rfc/rfc2397.txt), [Storage](http://www.w3.org/TR/webstorage/#the-storage-interface), [History](https://developer.mozilla.org/en-US/docs/Web/API/History), [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element.classList), Array.[forEach](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.18)/[filter](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.20)/[map](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.19), etc.

The program is [procedural](http://en.wikipedia.org/wiki/Procedural_programming) in essence, and has around 1300 lines of code (excluding data).
Despite the small size, this code is not newbie friendly as hinted above.
Comment is sparse and you will meet things like [lookahead regular expression](http://www.rexegg.com/regex-lookarounds.html), [multiple indirect recursion](http://en.wikipedia.org/wiki/Recursion_%28computer_science%29), or [DocumentFragment](https://dom.spec.whatwg.org/#interface-documentfragment).
But you do not need to be able to [hand-edit](https://github.com/Sheep-y/ufoafterlight-db/commit/a423e87411cbe4ab8619b6acb8b34b9f0c87c962#diff-5bd06b100de3471b9811681100a5198b) [minified](https://github.com/Sheep-y/ufoafterlight-db/commit/8a9664d1081ae26e1171b5dca232ab2fc61e8bcc#diff-5bd06b100de3471b9811681100a5198bR19) [code](https://github.com/Sheep-y/ufoafterlight-db/commit/0ceb62b984ef9b8765898afa5a294407632824e7#diff-5bd06b100de3471b9811681100a5198bR7) (perhaps).

Now, if you dare, here is a quick tour.

JavaScript code is in [`res`](https://github.com/Sheep-y/ufoafterlight-db/tree/development/res) folder.
* [`core.js`](https://github.com/Sheep-y/ufoafterlight-db/blob/development/res/core.js) defines the main namespace. It also handles data initialisation and normalisation.
* [`ui.js`](https://github.com/Sheep-y/ufoafterlight-db/blob/development/res/ui.js) initialises the UI, provide access to url state, and find search matches.
* [`event.js`](https://github.com/Sheep-y/ufoafterlight-db/blob/development/res/ui.event.js) contains UI event handlers.
* [`ui.builder.js`](https://github.com/Sheep-y/ufoafterlight-db/blob/development/res/ui.builder.js) builds entry boxes.
* [`ui.event.js`](https://github.com/Sheep-y/ufoafterlight-db/blob/development/res/ui.event.js) has all the actual event handlers.
* [`desc.js`](https://github.com/Sheep-y/ufoafterlight-db/blob/development/res/desc.js) generates description for data.
* [`data`](https://github.com/Sheep-y/ufoafterlight-db/tree/development/data) is plain JS, simplified but mostly follow original structure.
* [`mapping.js`](https://github.com/Sheep-y/ufoafterlight-db/tree/development/data/mapping.js) and [`txt_trigger.js`](https://github.com/Sheep-y/ufoafterlight-db/tree/development/data/txt_trigger.js) are hand coded data.
* The underscore is a light custom JS library, but the program is mostly ES5.
* [`html`](https://github.com/Sheep-y/ufoafterlight-db/tree/development/html) is HTML 5.
* [`css`](https://github.com/Sheep-y/ufoafterlight-db/blob/development/res/style.css) is CSS 3.

[Images](https://github.com/Sheep-y/ufoafterlight-db/tree/development/img) are [compiled to](http://draeton.github.io/stitches/) [sprite](https://github.com/Sheep-y/ufoafterlight-db/tree/development/img/sprite.png), then [optimised](http://advancemame.sourceforge.net/comp-readme.html), and finally embedded as data uri.
Data and text are [deflated](http://docs.oracle.com/javase/8/docs/api/java/util/zip/DeflaterOutputStream.html) and [Base64 encoded](http://docs.oracle.com/javase/8/docs/api/java/util/Base64.Encoder.html), keeping the program small.
This is more efficient and [reliable](http://en.wikipedia.org/wiki/HTTP_compression#Problems_preventing_the_use_of_HTTP_compression) then HTTP compression.

A prototype build tool 'CocoDoc' (a [Java jar](https://docs.oracle.com/javase/tutorial/deployment/jar/basicsindex.html)) is included in the [project root](https://github.com/Sheep-y/ufoafterlight-db/tree/development/).
Run it and it will loads the [build config](https://github.com/Sheep-y/ufoafterlight-db/tree/development/build.cocodoc.conf) which direct it to reads [ufoal.html](https://github.com/Sheep-y/ufoafterlight-db/tree/development/ufoal.html), outputting build messages to stdout.
If there is no error, it will generate (overwrite) [index.html](https://github.com/Sheep-y/ufoafterlight-db/blob/master/index.html).

The build tool is necessary to produce a self-contained deliverable, and to keep it small.
If this is not required, it should be easy to change everything to html links.

This program is free and open, licensed under [AGPL v3](http://www.gnu.org/licenses/agpl-3.0.html).
Most text and icons are copyrighted 2007 ATLAR games.
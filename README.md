# shins
###Shins Is Not Slate

Beautiful static documentation for your API.

![logo](http://mermade.github.io/shins/logo.jpg)

Shins is a port of [Slate](https://github.com/lord/slate) to Javascript / Nodejs, and would
not be possible without all of that hard work.

Version numbers of Shins aim to track the version of Slate they are compatible with.

![screenshot](http://mermade.github.io/shins/screenshot.jpg)

### Usage

* Fork the repository
* Clone the fork
* Edit source/index.html.md
* `npm install`
* `node shins.js` or `node shins.js --minify`
* To check locally: `node arapaho` and browse to [localhost:4567](http://localhost:4567)
* Add, commit and push
* Then (in your fork) press this button

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Or, to deploy to GitHub Pages:

* Change the setting on your fork so Github Pages are served from the root directory
* Browse to `https://{yourname}.github.io/{repository-name}`

### API

````javascript
var shins = require('shins');
var options = {};
options.minify = false;
shins.render(markdownString, options, function(err, html) {
  // ...
});
````

The `err` parameter is the result of the `ejs` rendering step.

### Notes

* Windows is definitely supported
* Syntax highlighting in 169 [languages](https://highlightjs.org/static/demo/) and 77 [themes](https://highlightjs.org/static/demo/) (you can specify the highlighter theme to use by setting `highlighter_theme` in your slate markdown header)
* Multiple language tabs per language are supported
* For converting OpenApi / Swagger specs to Shins or Slate, see [widdershins](http://github.com/mermade/widdershins)

# shins
###Shins Is Not Slate

Beautiful static documentation for your API.

![logo](http://mermade.github.io/shins/logo.jpg)

Shins is a port of [Slate](https://github.com/lord/slate) to Javascript / Nodejs, and would
not be possible without all of that hard work.

![screenshot](http://mermade.github.io/shins/screenshot.jpg)

### Usage

* Fork the repository
* Clone the fork
* Edit source/index.html.md
* `node shins.js`
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
shins.render(markdownString, function(err, html) {
  // ...
});
````

The `err` parameter is the result of the `ejs` rendering step.

### Notes

* Windows is definitely supported
* Syntax highlighting in 166 languages and 68 themes (you can specify the highlighter theme to use by setting `highlighter_theme` in your slate markdown header)
* For converting OpenApi / Swagger specs to Shins or Slate, see [widdershins](http://github.com/mermade/widdershins)

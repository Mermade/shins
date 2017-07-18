# shins
### Shins Is Not Slate

Beautiful static documentation for your API.

![logo](https://github.com/Mermade/shins/blob/master/docs/logo.jpg?raw=true)

Shins is a port of [Slate](https://github.com/lord/slate) to Javascript / Nodejs, and would
not be possible without all of that hard work.

Version numbers of Shins aim to track the version of Slate they are compatible with.

![screenshot](https://github.com/Mermade/shins/blob/master/docs/screenshot.jpg?raw=true)

### Usage

* Fork the repository
* Clone the fork
* Edit source/index.html.md
* `npm install`
* `node shins.js` or 
    * `node shins.js --minify` or
	* `node shins.js --customcss`
* To check locally: `node arapaho` and browse to [localhost:4567](http://localhost:4567)
* Add, commit and push
* Then (in your fork) press this button

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Or, to deploy to GitHub Pages:

* Change the setting on your fork so Github Pages are served from the root directory
* Browse to `https://{yourname}.github.io/{repository-name}`

### API

```javascript
var shins = require('shins');
var options = {};
options.minify = false;
options.customCss = false;
shins.render(markdownString, options, function(err, html) {
  // ...
});
```

or, with Promises:

```javascript
var shins = require('shins');
var options = {};
options.minify = false;
options.customCss = false;
shins.render(markdownString, options)
.then(html => {
  // ...
});
```

The `err` parameter is the result of the `ejs` rendering step.

Setting `customCss` to `true` will include the `pub/css/screen_overrides.css`,`pub/css/print_overrides.css` and `pub/css/theme_override.css` files, in which you can override any of the default Slate theme, to save you from having to alter the main css files directly. This should make syncing up with future Shins / Slate releases easier.

### Notes

* Windows is definitely supported
* Syntax highlighting in 176 [languages](https://highlightjs.org/static/demo/) and 79 [themes](https://highlightjs.org/static/demo/) (you can specify the highlighter theme to use by setting `highlighter_theme` in your slate markdown header)
* Multiple language tabs per language are supported
* For converting [OpenApi / Swagger](https://github.com/OAI/OpenAPI-Specification) or [AsyncAPI](https://github.com/asyncapi/asyncapi) definitions to Shins or Slate, see [widdershins](http://github.com/mermade/widdershins)

### Shins in the wild

Please feel free to add a link to your API documentation here

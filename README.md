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
	* `node shins.js --customcss` or
	* `node shins.js --inline` or
    * `node shins.js --unsafe`
* To add custom logo add `--logo` option with path to your logo image.
* To specify a different output filename from the default `./index.html`, use the `--output` or `-o` option.
* To allow css-style attributes in markdown, specify the `--attr` option.
* To check locally: `node arapaho` and browse to [localhost:4567](http://localhost:4567) - changes to your source `.html.md` files and the `source/includes` directory will automatically be picked up and re-rendered. If you use `--launch` or `-l` your default browser will be opened automatically
* Add, commit and push
* Then (in your fork) press this button

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Or, to deploy to GitHub Pages:

* Change the setting on your fork so Github Pages are served from the root directory
* Browse to `https://{yourname}.github.io/{repository-name}`

To deploy to your own web-server:

If you use the option `--minify` to shins, the only things you need to take to your web host is the generated `index.html` and the contents of the `pub` directory, which should be kept relative to it, so the structure is always:

```
{whatever}/index.html
{whatever}/pub/css/
{whatever}/pub/js/
```

If you use the `--inline` option to shins, then everything is bundled into the `index.html` file and no `pub` directory is required. Fonts are by default loaded from this github repository, but this can be overridden with the `--fonturl` option.

### API

```javascript
var shins = require('shins');
var options = {};
options.minify = false;
options.customCss = false;
options.inline = false;
options.unsafe = false; // setting to true turns off markdown sanitisation
//options.source = filename; // used to resolve relative paths for included files
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
options.inline = false;
options.unsafe = false; // setting to true turns off markdown sanitisation
//options.source = filename; // used to resolve relative paths for included files
options.logo = './my-custom-logo.png'
shins.render(markdownString, options)
.then(html => {
  // ...
});
```

The `err` parameter is the result of the `ejs` rendering step.

Setting `customCss` to `true` will include the `pub/css/screen_overrides.css`,`pub/css/print_overrides.css` and `pub/css/theme_override.css` files, in which you can override any of the default Slate theme, to save you from having to alter the main css files directly. This should make syncing up with future Shins / Slate releases easier.

Setting `inline` to `true` will inline all page resources (except resources referenced via CSS, such as fonts) to output html. This way HTML can be used stand-alone, without needing any other resources. It will also set `minify` to `true`.

Set `logo` path to add your custom logo as absolute path or path relative to process working directory. If `inline` option is on image will be inlined, else it will be copied to `source/images` directory and included via `src` image attribute.

### Updating from Slate

* Note: changes to Slate CSS, Javascript etc may break assumptions made in Shins. Use at your own risk.
* The script `updateFromSlate` assumes you have Ruby Slate checked-out by the side of shins (i.e. in a sibling directory) and will copy .scss files, fonts, Javascript files etc.
* The `buildstyle.js` program can be used to process the .scss files to their .css equivalents. It takes one optional parameter, the `outputStyle` used by `node-sass`. This can be either `nested`, `expanded`, `compact` or `compressed`. Default is `nested`.

### Notes

* Windows is definitely supported
* Syntax highlighting in 176 [languages](https://highlightjs.org/static/demo/) and 79 [themes](https://highlightjs.org/static/demo/) (you can specify the highlighter theme to use by setting `highlighter_theme` in your slate markdown header)
* Multiple language tabs per language are supported
* Static TOC as per Slate v2.0
* [GitHub emoji shortcuts](https://gist.github.com/rxaviers/7360908) are supported
* For converting [OpenApi / Swagger](https://github.com/OAI/OpenAPI-Specification) or [AsyncAPI](https://github.com/asyncapi/asyncapi) definitions to Shins or Slate, see [widdershins](http://github.com/mermade/widdershins)
* `arapaho` has a `--preserve` or `-p` option which will not overwrite your `.html` output file, but still re-render when necessary
* Shins ships with an alternate theme by TradeGecko which is also under the Apache 2.0 license
* Shins additionally supports [AsciiDoc](http://asciidoctor.org/docs/asciidoc-syntax-quick-reference/#include-files) `include::filename[]` syntax as well as `!INCLUDE filename` from [markdown-pp](https://github.com/MikeRalphson/markdown-pp-js) - this is not supported by Slate
* If you are using Node.js 4, please specify the `--harmony` flag

### Shins in the wild

Please feel free to add a link to your API documentation here

* [APIs.guru OpenAPI specification extensions (Semoasa) documentation](https://mermade.github.io/shins/apisguru.html)
* [Signal Biometrics Ox documentation](https://signalbiometrics.github.io/ox-docs/)
* [LeApp daemon API](https://leapp-to.github.io/shins/index.html)

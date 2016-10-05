var fs = require('fs');

var hljs = require('highlightjs/highlight.pack.js');
var md = require('markdown-it')({linkify: true, html: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (__) {}
        }

        return ''; // use external default escaping
    }
});
var yaml = require('js-yaml');
var ejs = require('ejs');

function javascript_include_tag(include) {
    var includeStr = fs.readFileSync('./source/javascripts/'+include+'.inc');
    return includeStr;
}

function partial(include) {
    var includeStr = fs.readFileSync('./source/includes/_'+include+'.md','utf8');
    return md.render(includeStr);
}

var inputStr = fs.readFileSync('./source/index.html.md','utf8');
inputStr = inputStr.split('\r\n').join('\n');
var inputArr = ('\n'+inputStr).split('\n---\n');
var headerStr = inputArr[1];
var header = yaml.safeLoad(headerStr);

console.log(JSON.stringify(header,null,2));

var content = md.render(inputArr[2]);

console.log(inputArr.length==3);

var locals = {};
locals.current_page = {};
locals.current_page.data = header;
locals.yield = function() { return content };
locals.partial = partial;
locals.image_tag = function(image) { return '<img src="/source/images/'+image+'">'; };
locals.stylesheet_link_tag = function(stylesheet,media) { return '<link rel="stylesheet" media="'+media+'" href="/pub/css/'+stylesheet+'.css">' };
locals.javascript_include_tag = javascript_include_tag;

var options = {};
options.debug = false;
ejs.renderFile('./source/layouts/layout.ejs', locals, options, function(err, str){
  if (err) {
    console.log(err);
  }
  else {
    str = str.split('\r').join('');
    fs.writeFileSync('./index.html',str,'utf8');
  }
});

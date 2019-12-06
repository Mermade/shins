// Usage node converter.js --summary postman/postman.json -o output.md
const fs = require('fs');
const converter = require('widdershins');
const apiObj = JSON.parse(fs.readFileSync('postman/postman.json'));
let options = {}; // defaults shown
options.codeSamples = true;
options.httpsnippet = false;
//options.language_tabs = [];
//options.language_clients = [];
//options.loadedFrom = sourceUrl; // only needed if input document is relative
//options.user_templates = './user_templates';
options.templateCallback = function(templateName,stage,data) { return data };
options.theme = 'darkula';
options.search = true;
options.sample = true; // set false by --raw
options.discovery = false;
options.includes = [];
options.shallowSchemas = false;
options.tocSummary = false;
options.headings = 2;
options.yaml = false;
//options.resolve = false;
//options.source = sourceUrl; // if resolve is true, must be set to full path or URL of the input document
converter.convert(apiObj,options,function(err,str){
    console.log(str)
  // str contains the converted markdown
});
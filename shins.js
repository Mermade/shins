'use strict';

var fs = require('fs');
var shins = require('./index.js');

var inputStr = fs.readFileSync('./source/index.html.md','utf8');
var options = {};

if (process.argv.length > 2) {
	if (process.argv[2] == '--minify') options.minify = true;
}

shins.render(inputStr,options,function(err,str){
  if (err) {
    console.log(err);
  }
  else {
    str = str.split('\r').join('');
    fs.writeFileSync('./index.html',str,'utf8');
  }
});

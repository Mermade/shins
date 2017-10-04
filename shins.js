#!/usr/bin/env node

'use strict';

var fs = require('fs');
var shins = require('./index.js');

var options = {};
var inputName = './source/index.html.md';

if (process.argv.length > 2) {
    for (var i=2;i<process.argv.length;i++) {
        var opt = process.argv[i];
        if (opt.startsWith('--')) {
            if (opt == '--minify') options.minify = true;
            if (opt == '--customcss') options.customCss = true;
            if (opt == '--inline') options.inline = true;
        }
        else {
            inputName = opt;
        }
    }
}

var inputStr = fs.readFileSync(inputName,'utf8');

shins.render(inputStr,options,function(err,str){
    if (err) {
       console.log(err);
    }
    else {
        str = str.split('\r').join('');
        fs.writeFileSync('./index.html',str,'utf8');
    }
});

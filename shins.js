#!/usr/bin/env node

'use strict';

const fs = require('fs');
const options = require('tiny-opts-parser')(process.argv);
const shins = require('./index.js');

if (options.customcss) options.customCss = true; // backwards compatibility

var inputName = './source/index.html.md';

if (options._.length > 2) {
    inputName = options._[2];
}

var inputStr = fs.readFileSync(inputName,'utf8');
options.source = inputName;

shins.render(inputStr,options,function(err,str){
    if (err) {
       console.log(err);
    }
    else {
        str = str.split('\r').join('');
        fs.writeFileSync('./index.html',str,'utf8');
    }
});


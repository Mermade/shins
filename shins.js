#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const options = require('tiny-opts-parser')(process.argv);
const shins = require('./index.js');

var inputName = (options._.length > 2) ? options._[2] : './source/index.html.md';
options.source = inputName;
options.cli = true;

if (options.help) {
    console.log('Usage: node shins [options] [input-markdown-filename]');
    console.log();
    console.log('-h,--help   show help and exit');
    console.log('-a,--attr   allow css attributes in markdown');
    console.log('--customcss include custom override css files');
    console.log('--fonturl   url to fonts when --inline is set, defaults to github repo');
    console.log('--inline    inline css and javascript resources');
    console.log('-l,--layout specify path to template file in .ejs format')
    console.log('--logo      specify path to custom logo file');
    console.log('--logo-url  url to link to from logo image');
    console.log('--css       specify path to additional css file')
    console.log('--minify    minify output html');
    console.log('-o,--output specify output html file');
    console.log('--unsafe    do not sanitise input markdown');
    console.log('--no-links  do not automatically convert links in text to anchor tags');
    console.log('--srcdir    source directory.  default: ' + options.srcdir);
    console.log('--pubdir    pub directory.  default: ' + options.pubdir);
    console.log('--overwrite Overwrite any files in output directory');
    console.log('--debug     display console debug output');
    process.exit(0);
}

shins.processOptions(options);

var inputStr = fs.readFileSync(inputName,'utf8');

shins.render(inputStr,options,function(err,str){
    if (err) {
       console.log(err);
    }
    else {
        str = str.split('\r').join('');
        fs.writeFileSync(options.output||'./index.html',str,'utf8');
    }
});


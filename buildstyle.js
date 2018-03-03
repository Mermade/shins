#!/bin/env node

'use strict';

var fs = require('fs');
var sass = require('node-sass');
var assetFunctions = require('node-sass-asset-functions');

var outputStyle = process.argv.length > 2 ? process.argv[2] : 'nested';

function sassRender(infile,outfile) {
	sass.render({
		file: infile,
		outputStyle : outputStyle,
		functions: assetFunctions({
			http_fonts_path: '../../source/fonts'
		})
	}, function(err, result) {
		if (err) console.error(err)
		else {
			fs.writeFile(outfile,result.css.toString(),'utf8',function(err){
                if (err) console.warn(err.message);
            });
        }
	});
}

sassRender('./source/stylesheets/screen.css.scss','./pub/css/screen.css');
sassRender('./source/stylesheets/print.css.scss','./pub/css/print.css');

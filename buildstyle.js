var fs = require('fs');
var sass = require('node-sass');
var assetFunctions = require('node-sass-asset-functions');

function sassRender(infile,outfile) {
	sass.render({
		file: infile,
		functions: assetFunctions({
			http_fonts_path: '../../source/fonts'
		})
	}, function(err, result) { 
		if (err) console.error(err)
		else {
			fs.writeFile(outfile,result.css.toString(),'utf8');
   		}
	});
}

sassRender('./source/stylesheets/screen.css.scss','./pub/css/screen.css');
sassRender('./source/stylesheets/print.css.scss','./pub/css/print.css');

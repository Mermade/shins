var fs = require('fs');
var shins = require('./index.js');

var inputStr = fs.readFileSync('./source/index.html.md','utf8');
var result = shins.render(inputStr,function(err,str){
  if (err) {
    console.log(err);
  }
  else {
    str = str.split('\r').join('');
    fs.writeFileSync('./index.html',str,'utf8');
  }
});

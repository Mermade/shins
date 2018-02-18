'use strict';
const fs = require('fs');
const path = require('path');

const express = require('express');
const ejs = require('ejs');
const compression = require('compression');
const args = require('tiny-opts-parser')(process.argv);

const shins = require('./index.js');

let includesModified = false;
let lastGenTime = {};
if (args.p) args.preserve = true;

let app = express();
app.use(compression());

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

fs.watch('source/includes', function(eventType, filename) {
    includesModified = true;
});

function getLastGenTime(fpath) {
    if (lastGenTime[fpath]) return lastGenTime[fpath];
    return 0;
}

function check(req,res,fpath) {
    fpath = fpath.split('/').join('');
    var srcStat = fs.statSync(path.join(__dirname,'source',fpath+'.md'));
    var dstStat = {mtime:getLastGenTime(fpath)};
    if (!args.preserve) {
        try {
            dstStat = fs.statSync(path.join(__dirname,fpath));
        }
        catch (ex) { }
    }
    if (includesModified || (srcStat.mtime>dstStat.mtime)) {
        includesModified = false;
        lastGenTime[fpath] = new Date();
        console.log('Rebuilding '+fpath);
        let source = path.join(__dirname,'source',fpath+'.md');
        fs.readFile(source,'utf8',function(err,markdown){
            if (markdown) {
                let options = {};
                if (req.query["customcss"]) {
                    options.customCss = true;
                }
                if (req.query["inline"]) {
                    options.inline = true;
                }
                if (req.query["minify"]) {
                    options.minify = true;
                }
                options.source = source;
                shins.render(markdown,options,function(err,html){
                    if (err) {
                        console.warn(err);
                        res.send(err);
                    }
                    else {
                        res.send(html);
                        if (!args.preserve) {
                            fs.writeFile(path.join(__dirname,fpath),html,'utf8',function(){});
                        }
                    }
                });
            }
        });
    }
    else {
        res.render(path.join(__dirname,fpath));
    }
}

app.get('/', function(req,res) {
    check(req,res,'index.html');
});
app.get('*.html', function(req,res) {
    check(req,res,req.path);
});
app.use("/",  express.static(__dirname));

var myport = process.env.PORT || 4567;
if (args._.length>2) myport = args._[2];

var server = app.listen(myport, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Arapaho server listening at http://%s:%s', host, port);
});

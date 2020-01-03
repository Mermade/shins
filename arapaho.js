#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const express = require('express');
const ejs = require('ejs');
const compression = require('compression');
const args = require('tiny-opts-parser')(process.argv);
const opn = require('opn');
const chokidar = require('chokidar');

const shins = require('./index.js');

let includesModified = false;
let lastGenTime = {};
if (args.p) args.preserve = args.p;
if (args.l) args.launch = args.l;
if (args.h) args.help = args.h;

if (args.help) {
    console.log('Usage: node arapaho [port] [-l|--launch] [-p|--preserve] [shins-options]');
    process.exit(0);
}

let app = express();
app.use(compression());

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

if (fs.existsSync('source/includes')) {
    chokidar.watch('source/includes', {}).on('all',function() {
        includesModified = true;
    });
}

function getLastGenTime(fpath) {
    if (lastGenTime[fpath]) return lastGenTime[fpath];
    return 0;
}

function check(req,res,fpath) {
    fpath = fpath.split('/').join('');
    let srcStat = fs.statSync(path.join(__dirname,'source',fpath+'.md'));
    let dstStat = {mtime: getLastGenTime(fpath)};
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
                let options = Object.assign({},args);
                if (req.query.customcss) {
                    options.customCss = true;
                }
                if (req.query.inline) {
                    options.inline = true;
                }
                if (req.query.minify) {
                    options.minify = true;
                }
                if (req.query.attr) {
                    options.attr = true;
                }
                options.unsafe = true;
                options.source = source;
                shins.render(markdown,options,function(err,html){
                    if (err) {
                        console.warn(err);
                        res.send(err);
                    }
                    else {
                        let newHtml = html.replace(/"js/g, "\"pub/js");
                        newHtml = newHtml.replace(/"css/g, "\"pub/css");
                        newHtml = newHtml.replace(/"images/g, "\"pub/images");
                        res.send(newHtml);
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

let myport = process.env.PORT || 4567;
if (args._.length>2) myport = args._[2];

const server = app.listen(myport, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Arapaho server listening at http://%s:%s', host, port);
    if (args.launch) {
        console.log('Launching...');
        opn('http://' + (host === '::' ? 'localhost' : 'host') + ':' + port + '/');
    }
});

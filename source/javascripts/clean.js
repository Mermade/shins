const fs = require("fs");
const mkdirp = require('mkdirp');
const ncp = require('ncp').ncp;
function rmDir(dir, rmSelf) {
    let files;
    // eslint-disable-next-line no-undefined
    rmSelf = (rmSelf === undefined) ? true : rmSelf;
    dir = dir + "/";
    try { files = fs.readdirSync(dir); } catch (e) { console.log("!Oops, directory not exist."); return; }
    if (files.length > 0) {
        files.forEach(function(x) {
            if (fs.statSync(dir + x).isDirectory()) {
                rmDir(dir + x);
            } else {
                fs.unlinkSync(dir + x);
            }
        });
    }
    if (rmSelf) {
        // check if user want to delete the directory ir just the files in this directory
        fs.rmdirSync(dir);
    }
}

console.log('cleaning the pub directory...');
rmDir('pub');
console.log('creating the new directories...');
mkdirp.sync('./pub/css');
mkdirp.sync('./pub/fonts');
mkdirp.sync('./pub/images');
mkdirp.sync('./pub/js');

ncp('./source/fonts', './pub/fonts', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('Done copying font files!!');
});
ncp('./source/images', './pub/images', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('Done copying images files!!');
});


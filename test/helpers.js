const fs = require("fs");
const path = require("path");
const shins = require("../index");
const jetpack = require("fs-jetpack");

const source = fs.readFileSync(path.join(__dirname, "../source/index.html.md"), "utf8");

const render = async function(source, options) {
    return new Promise((resolve, reject) => {
        shins.render(source, options, (err, html) => {
            if (err) return reject(err);
            html = html.split("\r").join("");
            fs.writeFileSync(options.output || "./index.html", html, "utf8");
            resolve(html);
        });
    });
};

const compare = (src, dest, shouldDiffer) => {
    const s = jetpack.inspect(src, { checksum: "md5" });
    const d = jetpack.inspect(dest, { checksum: "md5" });
    if (shouldDiffer) {
        expect(s.md5).not.toEqual(d.md5);
    } else {
        expect(s.md5).toEqual(d.md5);
    }
};

module.exports = {
    source: source,
    render: render,
    compare: compare,
}

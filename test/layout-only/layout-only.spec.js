const fs = require("fs");
const path = require("path");
const util = require("util");
const jetpack = require("fs-jetpack");
const shins = require("../../index");
const source = require('../helpers').source;
const compare = require('../helpers').compare;
const render = require('../helpers').render;

const output_dir = path.join(__dirname, "output");
const tmp_dir = path.join(__dirname, ".tmp");

describe('embedded custom layout.ejs tests', () => {
    const title = "<title>New Layout</title>";
    const custom_layout = path.join(tmp_dir, "layout.ejs");

    beforeEach(() => {
        jetpack.remove(output_dir);
        jetpack.remove(tmp_dir);
        jetpack.dir(output_dir);
        jetpack.dir(tmp_dir);
        const newLayout = fs.readFileSync(path.join(__dirname, '../../source/layouts/layout.ejs'), 'utf8').replace(/<title.*\/title>/, title);
        fs.writeFileSync(custom_layout, newLayout);
    });

    afterEach(() => {
        jetpack.remove(output_dir);
        jetpack.remove(tmp_dir);
    });

    it('can specify a custom layout.ejs file only', async () => {
        let options = shins.processOptions({
            layout: custom_layout,
            inline: true,
            output: path.join(output_dir, "index.html"),
        });
        let html = await render(source, options);
        expect(jetpack.exists(output_dir)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/index.html`)).toEqual("file");
        expect(html.indexOf(title)).not.toBe(-1);
    });

    it('can specify a custom layout.ejs file only with --minify', async () => {
        let options = shins.processOptions({
            layout: custom_layout,
            minify: true,
            output: path.join(output_dir, "index.html"),
        });
        let html = await render(source, options);
        expect(jetpack.exists(output_dir)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/index.html`)).toEqual("file");
        expect(jetpack.exists(`${output_dir}/pub`)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/source`)).toEqual("dir");
        expect(html.indexOf(title)).not.toBe(-1);
    });

});

const fs = require("fs");
const path = require("path");
const jetpack = require("fs-jetpack");
const shins = require("./index");
const source = require('./test/helpers').source;
const compare = require('./test/helpers').compare;
const render = require('./test/helpers').render;

const output_dir = path.join(__dirname, "output");
const tmp_dir = path.join(__dirname, ".tmp");

beforeEach(() => {
    jetpack.remove(output_dir);
    jetpack.remove(tmp_dir);
    jetpack.dir(output_dir);
    jetpack.dir(tmp_dir);
});

afterEach(() => {
    jetpack.remove(output_dir);
    jetpack.remove(tmp_dir);
});

describe("cloned shins --inline and --minify tests", () => {

    it('creates inline output in "./output/index.html" directory', async () => {
        let options = shins.processOptions({
            inline: true,
            output: path.join(output_dir, "index.html")
        });
        await render(source, options);
        expect(jetpack.exists(output_dir)).toEqual("dir");
        expect(jetpack.list(`${options.outdir}`).length).toEqual(1);
    });

    it('creates minified output in "./output/pub" and "./output/source" directories', async () => {
        let options = shins.processOptions({
            minify: true,
            output: path.join(output_dir, "index.html")
        });
        await render(source, options);
        expect(jetpack.exists(output_dir)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/index.html`)).toEqual("file");
        expect(jetpack.exists(`${output_dir}/pub`)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/source`)).toEqual("dir");
    });

});

describe("cloned shins --customcss tests", () => {

    it('creates override output in "./output/pub/css/*_overrides.css" files', async () => {
        let options = shins.processOptions({
            customcss: true,
            output: path.join(output_dir, "index.html"),
        });
        await render(source, options);
        expect(jetpack.exists(output_dir)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/index.html`)).toEqual("file");
        expect(jetpack.exists(`${output_dir}/pub`)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/source`)).toEqual("dir");
        compare(`pub/css/screen_overrides.css`, `${output_dir}/pub/css/screen_overrides.css`);
        compare(`pub/css/print_overrides.css`, `${output_dir}/pub/css/print_overrides.css`);
        compare(`pub/css/theme_overrides.css`, `${output_dir}/pub/css/theme_overrides.css`);
    });

    it('creates override output in "./output/index.html" file with --inline active', async () => {
        let options = shins.processOptions({
            customcss: true,
            inline: true,
            output: path.join(output_dir, "index.html"),
        });
        const html = await render(source, options);
        expect(jetpack.exists(output_dir)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/index.html`)).toEqual("file");
        expect(html.indexOf("place your custom print CSS overrides here")).not.toBe(-1);
        expect(html.indexOf("place your custom screen CSS overrides here")).not.toBe(-1);
        expect(html.indexOf("place your custom theme CSS overrides here")).not.toBe(-1);
    });
});

describe("cloned shins --css tests", () => {

    it('can include local css in "./output/pub/css/" directory', async () => {
        let options = shins.processOptions({
            css: "pub/css/tradegecko.min.css",
            output: path.join(output_dir, "index.html"),
        });
        await render(source, options);
        expect(jetpack.exists(output_dir)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/index.html`)).toEqual("file");
        expect(jetpack.exists(`${output_dir}/pub`)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/source`)).toEqual("dir");
        compare(`pub/css/tradegecko.min.css`, `${output_dir}/pub/css/tradegecko.min.css`);
    });

    it('can include local css in "./output/index.html" directory when --inline', async () => {
        let options = shins.processOptions({
            css: "pub/css/tradegecko.min.css",
            output: path.join(output_dir, "index.html"),
            inline: true,
        });
        const html = await render(source, options);
        let search = fs.readFileSync(`pub/css/tradegecko.min.css`, "utf8").substr(0, 100);
        expect(html.indexOf(search)).not.toBe(-1);
    });

    it('can include remote css in "./output/index.html" directory', async () => {
        let options = shins.processOptions({
            css: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap-grid.css",
            output: path.join(output_dir, "index.html"),
        });
        const html = await render(source, options);
        expect(jetpack.exists(output_dir)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/index.html`)).toEqual("file");
        expect(jetpack.exists(`${output_dir}/pub`)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/source`)).toEqual("dir");
        expect(html.indexOf(options.css)).not.toBe(-1);
    });

    it('can include remote css in "./output/index.html" with --inline', async () => {
        let options = shins.processOptions({
            css: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap-grid.css",
            output: path.join(output_dir, "index.html"),
            inline: true,
        });
        const html = await render(source, options);
        expect(jetpack.exists(output_dir)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/index.html`)).toEqual("file");
        expect(html.indexOf(options.css)).not.toBe(-1);
    });
});

describe("cloned shins --fonturl tests", () => {

    it('can include remote fonts in "./output" directory', async () => {
        let options = shins.processOptions({
            fonturl: "https://fonts.googleapis.com/css?family=Robot",
            output: path.join(output_dir, "index.html"),
            inline: true // NOTE: fonturl doesn't appear to work with minify
        });
        const html = await render(source, options);
        expect(jetpack.exists(output_dir)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/index.html`)).toEqual("file");
        expect(html.indexOf(options.fonturl)).not.toBe(-1);
    });

});

describe("cloned shins --logo tests", () => {

    it('creates inline output with logo in "./output" directory', async () => {
        const custom_logo = path.join(tmp_dir, "custom-logo.png");
        jetpack.copy(path.join(__dirname, "source/images/logo.png"), custom_logo);
        let options = shins.processOptions({
            inline: true,
            logo: custom_logo,
            output: path.join(output_dir, "index.html")
        });
        const html = await render(source, options);
        expect(jetpack.exists(output_dir)).toEqual("dir");
        expect(jetpack.list(`${options.outdir}`).length).toEqual(1);
        expect(html.indexOf('alt="custom-logo.png"')).not.toBe(-1);
    });

    it('creates minified output with logo in "./output" directory', async () => {
        const custom_logo = path.join(tmp_dir, "custom-logo.png");
        jetpack.copy(path.join(__dirname, "source/images/logo.png"), custom_logo);
        let options = shins.processOptions({
            minify: true,
            logo: custom_logo,
            output: path.join(output_dir, "index.html")
        });
        const html = await render(source, options);
        expect(jetpack.exists(output_dir)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/index.html`)).toEqual("file");
        expect(jetpack.exists(`${output_dir}/pub`)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/source`)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/images/custom_logo.png`)).toEqual("file");
        expect(html.indexOf("images/custom_logo.png")).not.toBe(-1);
        compare(custom_logo, `${output_dir}/images/custom_logo.png`);
    });

});

describe("cloned shins --overwrite tests", () => {

    it('does not overwrite changed files in the "./output/pub" directory without --overwrite', async () => {
        let options = shins.processOptions({
            minify: true,
            output: path.join(output_dir, "index.html")
        });
        await render(source, options);
        expect(jetpack.exists(output_dir)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/index.html`)).toEqual("file");
        expect(jetpack.exists(`${output_dir}/pub`)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/source`)).toEqual("dir");
        fs.writeFileSync(`${output_dir}/pub/css/print.css`, "UPDATED");
        await render(source, options);
        expect(jetpack.exists(output_dir)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/index.html`)).toEqual("file");
        expect(jetpack.exists(`${output_dir}/pub`)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/source`)).toEqual("dir");
        compare(`pub/css/print.css`, `${output_dir}/pub/css/print.css`, true);
        options.overwrite = true;
        await render(source, options);
        expect(jetpack.exists(output_dir)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/index.html`)).toEqual("file");
        expect(jetpack.exists(`${output_dir}/pub`)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/source`)).toEqual("dir");
        compare(`pub/css/print.css`, `${output_dir}/pub/css/print.css`);
    });

});

describe('cloned shins --layout tests', () => {
    const title = "<title>New Layout</title>";
    const custom_layout = path.join(tmp_dir, "layout.ejs");

    beforeEach(() => {
        const newLayout = fs.readFileSync(path.join(__dirname, 'source/layouts/layout.ejs'), 'utf8').replace(/<title.*\/title>/, title);
        console.log(`Writing ${custom_layout}`);
        fs.writeFileSync(custom_layout, newLayout);
    });

    it('creates inline output with custom layout in "./output" directory', async () => {
        let options = shins.processOptions({
            layout: custom_layout,
            output: path.join(output_dir, "index.html"),
        });
        const html = await render(source, options);
        expect(jetpack.exists(output_dir)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/index.html`)).toEqual("file");
        expect(jetpack.exists(`${output_dir}/pub`)).toEqual("dir");
        expect(jetpack.exists(`${output_dir}/source`)).toEqual("dir");
        expect(html.indexOf(title)).not.toBe(-1);
    });

    it('creates inline output with custom layout in "./output" directory with --inline', async () => {
        let options = shins.processOptions({
            layout: custom_layout,
            output: path.join(output_dir, "index.html"),
            inline: true,
        });
        const html = await render(source, options);
        expect(jetpack.exists(output_dir)).toEqual("dir");
        expect(jetpack.list(`${options.outdir}`).length).toEqual(1);
        expect(html.indexOf(title)).not.toBe(-1);
    });

});

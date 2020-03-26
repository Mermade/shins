# Atomic API Docs

## Run locally

```
npm install
node arapaho
```

Browse to [localhost:4567](http://localhost:4567) - changes to your source `.html.md` files and the `source/includes` directory will automatically be picked up and re-rendered. If you use `--launch` or `-l` your default browser will be opened automatically.

## Edit docs

> Edit source/index.html.md

## Build

`node shins.js --unsafe`

## Build Styles

If you make changes to the stylesheets in `/source/stylesheets` you'll need to rebuild the styles.

`node buildstyles.js`

## Release

Merge code to `master` branch. Since it uses GitHub pages, changes will be automatically applied.

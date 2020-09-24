# GrapesJS Page-Break Block

This block is used to separate conditional pages that will be printed on separate sheets.

## Summary

* Plugin name: `grapesjs-page-break`
* Blocks
  * `page-break`

## Options

|Option|Description|Default|
|-|-|-
|`blockLabel`|Label of the page-break block|`Page-Break`|
|`blockPageBreak`|Object to extend the default page-break block|`{}`|
|`category`|Category label|`Extra`|

## Download

* UNPKG
  * `https://unpkg.com/grapesjs-page-break`
* NPM
  * `npm i grapesjs-page-break`
* GIT
  * `git clone https://github.com/levonet/grapesjs-plugin-page-break.git`

## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-page-break.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      // ...
      plugins: ['grapesjs-page-break'],
      pluginsOpts: {
        'grapesjs-page-break': { /* options */ }
      }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import yourPluginName from 'grapesjs-page-break';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: ['grapesjs-page-break'],
  pluginsOpts: {
    ['grapesjs-page-break']: { /* options */ }
  }
});
```

## Development

Clone the repository

```sh
$ git clone https://github.com/levonet/grapesjs-plugin-page-break.git.git
$ cd grapesjs-plugin-page-break
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

## License

MIT

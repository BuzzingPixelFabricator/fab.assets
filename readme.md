# Fabricator Assets Loading Component

While this component is designed with the [BuzzingPixel Fabricator Build Process](https://github.com/tjdraper/buzzing-pixel-fabricator) in mind, it can be used anywhere (in theory).

Asset loading is the concept of loading JavaScript or CSS resources after the page has loaded, and running a callback function once the assets have successfully loaded.

## `FAB.assets.load();`

Method takes one argument: an object.

### `obj.root`

Type: String

If you are loading the assets from a site other than your local site, set the root to the site.

### `obj.js`

Type: String|Array

A string or array of strings of JavaScript to load.

### `obj.css`

Type: String|Array

A string or array of strings of the CSS to load.

### `obj.failure`

Type: Function

A callback function that is fired if asset(s) fail to load.

### `obj.success`

Type: Function

A callback function that is fired when the asset(s) load successfully.

```
FAB.assets.load({
    root: 'https://cdn.site.com/',
    js: 'assets/js/lib/myCSS.min.js',
    css: 'assets/css/lib/myJS.min.js',
    failure: function() {
        console.log('fail');
    },
    success: function() {
        console.log('success');
    }
});
```
# Fabricator Assets Loading Component

While this component is designed with the [BuzzingPixel Fabricator Build Process](https://github.com/tjdraper/buzzing-pixel-fabricator) in mind, it can be used anywhere (in theory).

Asset loading is the concept of loading JavaScript or CSS resources after the page has loaded, and running a callback function once the assets have successfully loaded.

## Installing

With Fabricator and NPM, simply require this library into your project and restart the Fabricator Grunt build process.

`npm install fab.assets --save`

If you are not using Fabricator, you will need to in some manner compile `src/FAB.assets.js` into your build process or put it somewhere where you can link it into your projects.

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

## License

Copyright 2017 TJ Draper, BuzzingPixel, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

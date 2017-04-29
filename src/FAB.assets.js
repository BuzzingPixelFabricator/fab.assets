/*----------------------------------------------------------------------------*\
    # Copyright 2017, BuzzingPixel, LLC

    # This program is free software: you can redistribute it and/or modify
    # it under the terms of the Apache License 2.0.
    # http://www.apache.org/licenses/LICENSE-2.0
\*----------------------------------------------------------------------------*/

// Make sure FAB is defined
window.FAB = window.FAB || {};

(function(F, D) {
    'use strict';

    /**
     * Load specified assets
     *
     * @param {Object} options
     *     @param {String} [options.root]
     *     @param {String|Array} [options.js]
     *     @param {String|Array} [options.css]
     *     @param {Boolean} [options.async]
     *     @param {Function} [options.failure]
     *     @param {Function} [options.success]
     */
    var Load = function(options) {
        // Set variables
        var head = D.getElementsByTagName('head')[0];
        var root = options.root || '/';
        var js = typeof options.js === 'string' ? [options.js] : options.js;
        var css = typeof options.css === 'string' ? [options.css] : options.css;
        var async = options.async === true;
        var i;
        var counter = 0;
        var error = false;
        var check = function() {
            if (counter !== 0) {
                return;
            }

            if (error && typeof options.failure === 'function') {
                options.failure();
            } else if (! error && typeof options.success === 'function') {
                options.success();
            }
        };

        // Add all JS items to the counter
        for (i in js) {
            if (js.hasOwnProperty(i)) {
                counter++;
            }
        }

        // Add all CSS items to the counter
        for (i in css) {
            if (css.hasOwnProperty(i)) {
                counter++;
            }
        }

        // Load JS scripts
        for (i in js) {
            if (js.hasOwnProperty(i)) {
                var scriptTag = D.createElement('script');

                scriptTag.async = async === true;

                scriptTag.onload = function() {
                    counter--;
                    check();
                };

                scriptTag.onerror = function() {
                    counter--;
                    error = true;
                    check();
                };

                scriptTag.src = root + js[i];

                head.appendChild(scriptTag);
            }
        }

        // Load CSS links
        for (i in css) {
            if (css.hasOwnProperty(i)) {
                var link = D.createElement('link');

                link.addEventListener('load', function() {
                    counter--;
                    check();
                }, false);

                link.addEventListener('error', function() {
                    counter--;
                    error = true;
                    check();
                }, false);

                link.rel = 'stylesheet';
                link.href = root + css[i];

                head.appendChild(link);
            }
        }
    };

    F.assets = {
        /**
         * Load specified assets
         *
         * @param {Object} options
         *     @param {String} [options.root]
         *     @param {String|Array} [options.js]
         *     @param {String|Array} [options.css]
         *     @param {Boolean} [options.async]
         *     @param {Function} [options.failure]
         *     @param {Function} [options.success]
         */
        load: function(options) {
            new Load(options); // jshint ignore: line
        }
    };
})(window.FAB, document);
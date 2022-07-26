(
    function (global) {
        System.config({
            paths: {
                "npm":"node_modules/"
            },
            map: {
                "rxjs": "npm:rxjs",
                "@angular/core": "npm:@angular/core/bundles/core.umd.js",
                "@angular/common": "npm:@angular/common/bundles/core.umd.js",
                "@angular/platform-browser": "npm:@angular/platform-browser/bundles/platform-browser.umd.js",
                "@angular/compiler": "npm:@angular/compiler/bundles/compiler.umd.js",
                "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js"
            },
            packages: {
                "src": {
                    defaultExtension:"js"
                },
                "rxjs": {
                    main: "index.js",
                    defaultExtension:"js"
                },
                "rxjs/operators": {
                    main: "index.js"
                }
            }
        });
    }
)();
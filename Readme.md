# How to make use of DevExpress HTML5 components within the PowerBI sandbox

This repo uses the trial version of DevExpress components, which was added with:

    npm install --save devextreme

#### "ReferenceError: DevExpress is not defined", solved via src/window.js , which adjusts the window object ahead of loading the DevExpress component - to solve the exception "DevExpress is undefined".

    // adapted from ignatvilesov's advice:
    // https://github.com/whileoneloop/kendo-ui-power-bi-visual/commit/0f6ef60c390f82cf24a3edb34c4572fd01d66d7d

    Object.defineProperties(window, {
        'devicePixelRatio': {
            get: function () {
                return window.window.devicePixelRatio;
            }
        },
        'innerWidth': {
            get: function () {
                return window.window.innerWidth;
            }
        }
    });

    var DevExpress = { };
    window.DevExpress = DevExpress;
    window.window.DevExpress = DevExpress;

#### Note on use of fonts

Fonts have been converted to base64 to allow them to be embedded in the custom visual package.

This can be done with:

    base64 dxicons.ttf > dxicons_ttf_base64.txt

And then modifying the css file:

    @font-face {
        font-family: 'DXIcons';
        src: url(data:font/woff;charset=utf-8;base64,<<woff base64 string>>) format('woff'), url(data:font/truetype;charset=utf-8;base64,<<ttf base64 string>>) format('truetype');    
        font-weight: normal;
        font-style: normal;
    }

#### How to run:

Start a PowerBI pro free trial if not already done:

    https://app.powerbi.com/signupredirect?pbi_source=web

Install PowerBI tools from:

https://github.com/microsoft/powerbi-visuals-tools

In this repo, install npm dependencies (jquery, its types, and the devextreme module) with:

    npm install

Then run a dev instance for PowerBI to connect to and display the visual:

    pbiviz start

... Or create and upload a package manually in your Powerbi interface with:

    pbiviz package

Login to PowerBI, enable developer custom visuals, create a new report, drag on a developer/custom visual widget.  View the console output in the browser window displaying your developer visual.

#### Other resources:

1. https://github.com/microsoft/powerbi-visuals-tools
1. https://github.com/Microsoft/PowerBI-visuals
1. https://github.com/Microsoft/PowerBI-visuals-sampleUsingExternalLibraries

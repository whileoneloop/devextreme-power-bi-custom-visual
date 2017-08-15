# How to make use of DevExpress HTML5 components within the PowerBI sandbox

This repo uses the trial version of DevExpress components, added with npm install devextreme.

#### Please note: the component is throwing the following exception when contained within the PowerBI 'visualsandbox':

Uncaught ReferenceError: DevExpress is not defined
at Object.<anonymous> (<anonymous>:551:13589)
at t (<anonymous>:546:120)
at Object.window.DevExpress (<anonymous>:546:1644)
at t (<anonymous>:546:120)
at Object.<anonymous> (<anonymous>:546:450)
at t (<anonymous>:546:120)
at Object.<anonymous> (<anonymous>:546:341)
at t (<anonymous>:546:120)
at Object.<anonymous> (<anonymous>:546:306)
at t (<anonymous>:546:120)

This may be related to issues reported using external libraries with PowerBI:

https://github.com/Microsoft/PowerBI-visuals/issues/163
https://github.com/Microsoft/PowerBI-visuals/issues/217
https://github.com/Microsoft/PowerBI-visuals/issues/165

#### How to reproduce:

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

Login to PowerBI, enable developer custom visuals, create a new report, drag on a developer/custom visual widget.  View the console output in the browser window displaying your developer visual, the "DevExpress is not defined" exception should be present.

#### Other resources:

    https://github.com/microsoft/powerbi-visuals-tools
    https://github.com/Microsoft/PowerBI-visuals
    https://github.com/Microsoft/PowerBI-visuals-sampleUsingExternalLibraries

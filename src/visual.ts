/*
 *  Power BI Visual CLI
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../../node_modules/devextreme/dist/ts/dx.all.d.ts" />

module powerbi.extensibility.visual {
    "use strict";
    export class Visual implements IVisual {
        private target: HTMLElement;
        private updateCount: number;
        private settings: VisualSettings;

        constructor(options: VisualConstructorOptions) {
            console.log('Visual constructor', options);
            this.target = options.element;
            this.updateCount = 0;
        }

        public update(options: VisualUpdateOptions) {
            this.settings = Visual.parseSettings(options && options.dataViews && options.dataViews[0]);
            console.log('Visual update', options);
            this.target.innerHTML = `<p>Update count: <em>${(this.updateCount++)}</em></p><div id="treeList"></div>`;

            console.log('before treelist create call...');

            let employees = [
                { id: '1', fullName: "John Heart", position: "CEO" },
                { id: '1_1', parentId: '1', fullName: "Samantha Bright",  position: "COO" },
                { id: '2_1', parentId: '2', fullName: "Robert Reagan", position: "CMO" },
                { id: '2', fullName: "Greta Sims", position: "HR Manager" }
            ];
            $(function(){
                (<any>window).$("#treeList").dxTreeList({
                    dataSource: employees
                });
            });
            /*
            try {
                let dataSource = new kendo.data.TreeListDataSource({
                    data: [ { name: "Jane Doe" }, { name: "John Doe" } ]
                });

                (<any>window).$("#treeList").kendoTreeList({
                    columns: [ "name" ],
                    dataSource: dataSource
                });
            }
            catch (e) {
                console.error(e);
            }*/
            console.log('after treelist create call...');
            //console.log('before treegrid call...');
            // let t = null;
            // try {
            //     t = (<any>window).TreeGrid("<treegrid Data_Url='Grid2.xml'></treegrid>", 'Main');
            // }
            // catch (e) {
            //     console.error(e);
            // }
            // console.log('after treegrid call.', t);
        }

        private static parseSettings(dataView: DataView): VisualSettings {
            return VisualSettings.parse(dataView) as VisualSettings;
        }

        /**
         * This function gets called for each of the objects defined in the capabilities files and allows you to select which of the
         * objects and properties you want to expose to the users in the property pane.
         *
         */
        public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
            return VisualSettings.enumerateObjectInstances(this.settings || VisualSettings.getDefault(), options);
        }
    }
}
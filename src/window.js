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
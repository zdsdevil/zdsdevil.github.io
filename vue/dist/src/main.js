'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueAmap = require('vue-amap');

var _vueAmap2 = _interopRequireDefault(_vueAmap);

var _App = require('./App.vue');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueAmap2.default);
_vueAmap2.default.initAMapApiLoader({
    key: '911fe5dcb6e74da0011d2c27df758b5c',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    uiVersion: '1.0'
});
_vueAmap.lazyAMapApiLoaderInstance.load().then(function () {
    undefined.map = new AMap.Map('amapContainer', {
        center: new AMap.LngLat(121.59996, 31.197646)
    });
});
new _vue2.default({
    el: '#app',
    render: function render(h) {
        return h(_App2.default);
    }
});
//# sourceMappingURL=main.js.map
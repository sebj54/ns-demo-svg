import Vue from "nativescript-vue";

import Home from "./components/Home";

Vue.registerElement('SvgImage', () => require('@sergeymell/nativescript-svg').SVGImage)

new Vue({
    render: h => h('frame', [h(Home)]),
}).$start();

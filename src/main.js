import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dataV from "@jiaminghi/data-view";
import "leaflet/dist/leaflet.css";
// 引入Leaflet对象 挂载到Vue上，便于全局使用，也可以单独页面中单独引用
import * as L from "leaflet";
import "leaflet.pm";
import "leaflet.pm/dist/leaflet.pm.css";
// import 'echarts-gl';      //引入echarts地图库
// 引入全局css
import "./assets/scss/style.scss";
// 按需引入vue-awesome图标
import Icon from "vue-awesome/components/Icon";
import "vue-awesome/icons/chart-bar.js";
import "vue-awesome/icons/chart-area.js";
import "vue-awesome/icons/chart-pie.js";
import "vue-awesome/icons/chart-line.js";
import "vue-awesome/icons/align-left.js";
// 地图组件
import "xdh-map/lib/xdhmap.css";
import * as XdhMap from "xdh-map";

//引入echart
//4.x 引用方式
import echarts from "echarts";
//5.x 引用方式为按需引用
//希望使用5.x版本的话,需要在package.json中更新版本号,并切换引用方式
//import * as echarts from 'echarts'

import VueParticles from "vue-particles";

Vue.use(VueParticles);
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

Vue.use(XdhMap);

// 全局注册
Vue.component("icon", Icon);
Vue.use(dataV);

Vue.L = Vue.prototype.$L = L;

/* leaflet icon */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

require("echarts/extension/bmap/bmap");
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

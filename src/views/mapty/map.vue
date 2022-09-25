<template>
  <div id="map"></div>
</template>

<script>
// const map = L.map("map", {
//   center: [40.02404009136253, 116.50641060224784], // 地图中心
//   zoom: 14, //缩放比列
//   zoomControl: false, //禁用 + - 按钮
//   doubleClickZoom: false, // 禁用双击放大
//   attributionControl: false, // 移除右下角leaflet标识
// });
import "leaflet/dist/leaflet.css";
// 引入Leaflet对象 挂载到Vue上，便于全局使用，也可以单独页面中单独引用
import * as L from "leaflet";
export default {
  name: "map",
  data() {
    return {};
  },
  methods: {
    init() {
      //   let map = L.map("map", {
      //     minZoom: 3,
      //     maxZoom: 14,
      //     center: [120.2, 30.1666],
      //     zoom: 6,
      //     zoomControl: false,
      //     attributionControl: false,
      //     crs: L.CRS.EPSG3857,
      //   });
      let map = L.map("map").setView([23.41, 116.63], 14);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap",
      }).addTo(map);
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style scoped></style>

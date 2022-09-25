<template>
  <div class="body">
    <div class="sidebar">
      <!-- <img src="logo.png" alt="Logo" class="logo" /> -->

      <ul class="workouts">
        <form class="form hidden">
          <span>
            练江是广东东部沿海的一条河流，发源于普宁市，源头为五峰山寒妈径，流经汕头市潮南区，
            在汕头市潮阳区海门镇海门湾入海。是潮阳区、潮南区、普宁市的母亲河。练江全长72公里，
            流域面积达1353平方公里，其中在汕头市潮阳区长约40公里，流域面积约839平方公里
          </span>

          <span>
            由于缺乏水源以及生活污水、污染企业废水直排（练江沿岸有众多的再生纸制造企业，印染企业以及废旧电子电器拆解等企业），生活垃圾直倒，造成练江污染严重，整条江几乎成了“黑江”，水质为劣五类。
            是粤东五大河流中污染指数最严重的河流。更加重中加重的是，人口大区潮阳区、潮南区，
            以及现中国人口第一县级市普宁市都没有污水处理厂。由于污染严重，水体不能饮用，也威胁着流域内居民的健康。
            特别是练江流域内以电子洋垃圾闻名全球的贵屿镇要靠向外地买水来饮用，而且群众癌症发病率高。
          </span>
          <!-- <div class="form__row">
            <label class="form__label">Type</label>
            <select class="form__input form__input--type">
              <option value="running">Running</option>
              <option value="cycling">Cycling</option>
            </select>
          </div>
          <div class="form__row">
            <label class="form__label">Distance</label>
            <input class="form__input form__input--distance" placeholder="km" />
          </div>
          <div class="form__row">
            <label class="form__label">Duration</label>
            <input
              class="form__input form__input--duration"
              placeholder="min"
            />
          </div>
          <div class="form__row">
            <label class="form__label">Cadence</label>
            <input
              class="form__input form__input--cadence"
              placeholder="step/min"
            />
          </div>
          <div class="form__row form__row--hidden">
            <label class="form__label">Elev Gain</label>
            <input
              class="form__input form__input--elevation"
              placeholder="meters"
            />
          </div>
          <button class="form__btn">OK</button> -->
        </form>
      </ul>

      <!-- <p class="copyright">
        练江监测站信息显示
      </p> -->
    </div>
    <div id="map"></div>
  </div>
</template>

<script>
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
      let map = L.map("map").setView([23.2628, 116.4831], 12);
      let form = document.querySelector(".form");
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 15,
        attribution: "© OpenStreetMap",
        attributionControl: false,
      }).addTo(map);

      L.tooltip({ permanent: false });
      L.marker([23.2189, 116.6189])
        .addTo(map)
        .bindPopup("监测站信息")
        .bindTooltip("监测站01")
        .openTooltip();
      L.marker([23.2628, 116.4831])
        .addTo(map)
        .bindPopup("监测站");
      L.marker([23.2628, 116.5849])
        .addTo(map)
        .bindPopup("监测站");
      L.marker([23.2054, 116.5468])
        .addTo(map)
        .bindPopup("监测站");
      L.marker([23.1834, 116.5308])
        .addTo(map)
        .bindPopup("监测站");
      /*     var popup = L.popup();
      function onMapClick(e) {
        popup
          .setLatLng(e.latlng)
          .setContent("You clicked the map at " + e.latlng.toString())
          .openOn(map);
      }
      map.on("click", onMapClick); */
      console.log(`L`, L);

      map.on(`click`, function() {
        // mapEvent = mapE;
        form.classList.remove(`hidden`);
        // inputDistance.focus();
      });
    },
  },
  mounted() {
    this.init();
  },
  destroyed() {
    this.map = null;
  },
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

// .map-body-box {
//   margin-top: 16px;
//   display: flex;
//   flex-direction: column;

//   //第一行图表布局
//   .map-box {
//     display: grid;
//     // 设置行的尺寸
//     // grid-template-columns: 3fr 3fr 5fr 3fr 2fr;
//     // 3fr占可用空间的30%
//     grid-template-columns: 4fr 6fr;
//     grid-template-rows: 420px auto;
//     // grid-template-columns: repeat(2, 50%);
//   }
//   .map {
//     flex: 1;
//     height: 100%;
//     background-color: var(--color-light--1);
//   }

//   // 底部数据
//   .bottom-box {
//     margin-top: 5px;
//     display: grid;
//     // grid-template-columns: repeat(2, 50%);
//     grid-template-columns: 7fr 3fr;
//     grid-template-rows: 510px auto;
//     // grid-template-columns: 400px;
//   }
// }

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

.body {
  font-family: "Manrope", sans-serif;
  color: #ececec;
  font-weight: 400;
  line-height: 1.6;
  height: 100vh;
  overscroll-behavior-y: none;

  background-color: #fff;
  padding: 2.5rem;

  display: flex;
}

/* GENERAL */
a:link,
a:visited {
  color: #ffb545;
}

/* SIDEBAR */
.sidebar {
  flex-basis: 30rem;

  background-color: #2d3439;
  //   padding: 3rem 5rem 4rem 5rem;
  padding: 1rem 3rem 2rem 3rem;

  display: flex;
  flex-direction: column;
}

// .logo {
//   height: 5.2rem;
//   align-self: center;
//   margin-bottom: 4rem;
// }

.workouts {
  list-style: none;
  height: 77vh;
  overflow-y: scroll;
  overflow-x: hidden;
}

.workouts::-webkit-scrollbar {
  width: 0;
}

.workout {
  background-color: #42484d;
  border-radius: 5px;
  padding: 1.5rem 2.25rem;
  margin-bottom: 1.75rem;
  cursor: pointer;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 0.75rem 1.5rem;
}
.workout--running {
  border-left: 5px solid #00c46a;
}
.workout--cycling {
  border-left: 5px solid #ffb545;
}

.workout__title {
  font-size: 1.7rem;
  font-weight: 600;
  grid-column: 1 / -1;
}

.workout__details {
  display: flex;
  align-items: baseline;
}

.workout__icon {
  font-size: 1.8rem;
  margin-right: 0.2rem;
  height: 0.28rem;
}

.workout__value {
  font-size: 1.5rem;
  margin-right: 0.5rem;
}

.workout__unit {
  font-size: 1.1rem;
  color: var(--color-light--1);
  text-transform: uppercase;
  font-weight: 800;
}

.form {
  background-color: #42484d;
  border-radius: 5px;
  padding: 1rem 1rem;
  //   padding: 5px 5px;
  //   margin-bottom: 5px;
  margin-top: 2rem;
  margin-bottom: 2rem;

  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem 2.5rem;

  /* Match height and activity boxes */
  height: auto;
  transition: all 0.5s, transform 1ms;
}

.form.hidden {
  transform: translateY(-30rem);
  height: 0;
  padding: 0 2.25rem;
  margin-bottom: 0;
  opacity: 0;
}

.form__row {
  display: flex;
  align-items: center;
}

.form__row--hidden {
  display: none;
}

.form__label {
  flex: 0 0 50%;
  font-size: 1.5rem;
  font-weight: 600;
}

.form__input {
  width: 100%;
  padding: 0.3rem 1.1rem;
  font-family: inherit;
  font-size: 1.4rem;
  border: none;
  border-radius: 3px;
  background-color: rgb(214, 222, 224);
  transition: all 0.2s;
}

.form__input:focus {
  outline: none;
  background-color: #fff;
}

.form__btn {
  display: none;
}

.copyright {
  //   margin-top: auto;
  margin-bottom: 0.2rem;
  font-size: 1rem;
  text-align: center;
  color: var(--color-light--1);
}

.twitter-link:link,
.twitter-link:visited {
  color: var(--color-light--1);
  transition: all 0.2s;
}

.twitter-link:hover,
.twitter-link:active {
  color: var(--color-light--2);
}

/* MAP */
#map {
  flex: 1;
  height: 100%;
  background-color: #2d3439;
}

/* Popup width is defined in JS using options */
.leaflet-popup .leaflet-popup-content-wrapper {
  background-color: #2d3439;
  color: var(--color-light--2);
  border-radius: 5px;
  padding-right: 0.6rem;
}

.leaflet-popup .leaflet-popup-content {
  font-size: 1.5rem;
}

.leaflet-popup .leaflet-popup-tip {
  background-color: #2d3439;
}

.running-popup .leaflet-popup-content-wrapper {
  border-left: 5px solid #00c46a;
}
.cycling-popup .leaflet-popup-content-wrapper {
  border-left: 5px solid #ffb545;
}
</style>

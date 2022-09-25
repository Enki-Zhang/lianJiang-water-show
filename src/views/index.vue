<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="decorationColor" />
            <div class="title">
              <span class="title-text">练江可视化平台</span>
              <dv-decoration-6
                class="dv-dec-6"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
              />
            </div>
            <dv-decoration-8
              class="dv-dec-8"
              :reverse="true"
              :color="decorationColor"
            />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex aside-width">
            <div class="react-left ml-4 react-l-s">
              <span class="react-left"></span>
              <span class="text">数据分析1</span>
            </div>
            <div class="react-left ml-3">
              <span class="text">数据分析2</span>
            </div>
          </div>
          <div class="d-flex aside-width">
            <div class="react-right bg-color-blue mr-3">
              <span class="text fw-b">lian-jiang-big-screen</span>
            </div>
            <div class="react-right mr-4 react-l-s">
              <span class="react-after"></span>
              <span class="text"
                >{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span
              >
            </div>
          </div>
        </div>
        <!-- 中心内容 -->
        <div class="body-box">
          <!-- 第三行数据 -->
          <div class="content-box">
            <div>
              <dv-border-box-7>
                <!-- 顶部左边图表 -->
                <topLeft />
              </dv-border-box-7>
            </div>

            <!-- 顶部右边 原地图图表 -->
            <div>
              <dv-border-box-7>
                <centerLeft2 />
              </dv-border-box-7>
            </div>
            <!-- 顶部右边 地图数据 添加路由跳转-->

            <div @click="showMap">
              <top-right></top-right>
            </div>
          </div>

          <!-- 底部图表 第四行数据 -->
          <div class="bottom-box">
            <dv-border-box-8>
              <bottomLeft />
            </dv-border-box-8>
            <dv-border-box-7>
              <bottom-right />
            </dv-border-box-7>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drawMixin from "../utils/drawMixin";
import { formatTime } from "../utils/index.js";
import centerLeft2 from "./centerLeft2";
import bottomLeft from "./bottomLeft";
import TopRight from "./topRight.vue";
import TopLeft from "./topLeft.vue";
import BottomRight from "./bottomRight.vue";

export default {
  mixins: [drawMixin],
  data() {
    return {
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      decorationColor: ["#568aea", "#000000"],
    };
  },
  components: {
    centerLeft2,
    TopRight,
    bottomLeft,
    TopLeft,
    BottomRight,
  },
  mounted() {
    this.timeFn();
    this.cancelLoading();
  },
  beforeDestroy() {
    clearInterval(this.timing);
  },
  methods: {
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), "HH: mm: ss");
        this.dateYear = formatTime(new Date(), "yyyy-MM-dd");
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000);
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    showMap() {
      this.$router.push({
        name: `map`,
      });
      console.log(`展示Map`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
</style>

<template>
  <div id="topLeft">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-line" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">该流域主要污染物</span>
        </div>
      </div>
      <div>
        <TopLeftChart />
      </div>
    </div>
  </div>
</template>

<script>
import TopLeftChart from "../components/echart/Top/TopLeftChart/chart.vue";
export default {
  components: {
    TopLeftChart,
  },
};
</script>

<style lang="scss" scoped>
$box-height: 390px;
$box-width: 100%;
#topLeft {
  padding: 20px 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 5px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .chart-box {
    margin-top: 16px;
    width: 170px;
    height: 120px;

    .active-ring-name {
      padding-top: 10px;
    }
  }
}
</style>

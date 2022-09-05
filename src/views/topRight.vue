<template>
  <div id="topRight">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <!-- <icon name="chart-pie" class="text-icon"></icon> -->
        </span>
        <div class="d-flex">
     
        </div>
      </div>
      <div class="d-flex jc-center">
        <top-right />
      </div>
    </div>
  </div>
</template>

<script>
import TopRight from "../components/echart/Top/TopRight/TopRight.vue";
export default {
  components: {
    TopRight,
  },
};
</script>

<style lang="scss" scoped>
#topRight {
  $box-width: 300px;
  $box-height: 200px;
  padding: 5px;

  height: $box-height;
  min-width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 10px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .dv-dec-1 {
    position: relative;
    width: 100px;
    height: 20px;
    top: -3px;
  }
  .chart-box {
    margin-top: 16px;
    width: 170px;
    height: 160px;
    .active-ring-name {
      padding-top: 10px;
    }
  }
}
</style>
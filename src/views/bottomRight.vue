<template>
  <!-- 底部右边数据 -->
  <div id="bottomRight">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-pie" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">水质评价</span>
          <dv-decoration-3 class="dv-dec-3" />
        </div>
      </div>
      <div class="d-flex jc-center">
        <!-- 区分引入id的大小写 -->
        <bottomRightChart />
      </div>
    </div>
  </div>
</template>

<script>
import bottomRightChart from "../components/echart/bottom/bottomRightChart";
export default {
  components: {
    bottomRightChart,
  },
};
</script>

<style lang="scss" scoped>
// 背景盒子
$box-width: 100%;
$box-height: 500px;
#bottomRight {
  padding: 16px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 10px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .dv-dec-3 {
    position: relative;
    width: 100px;
    height: 20px;
    // right: 10px;
    top: -3px;
  }
}
</style>



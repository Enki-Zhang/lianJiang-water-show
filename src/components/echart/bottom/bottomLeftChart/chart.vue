<template>
  <div>
    <!-- 汕头总水质 -->
    <Echart
      :options="options"
      id="bottomLeftChart"
      height="480px"
      width="100%"
    ></Echart>
  </div>
</template>

<script>
import Echart from "@/common/echart";
export default {
  data() {
    return {
      options: {},
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    cdata: {
      handler() {
        this.options = {
          legend: { top: "5%" },
          tooltip: {},
          dataset: {
            source: [
              ["PH", "溶解氧", "浊度", "氯氮", "总磷", "CODcr"],

              ["1", 7.33, 5.22, 2.31, 2.25, 0.9],
              ["211", 0.38, 4.26, 1.85, 1.56, 0.81],
              ["421", 0.5, 4.4, 0, 2.9, 2.19],
              ["631", 0, 4.32, 1.71, 3.33, 0.9],
              ["841", 1.24, 3.14, 2.46, 8.62, 0.81],
              ["1051", 0, 4.06, 0.96, 5, 0],
              ["1261", 0.61, 4.33, 4, 2.65, 0],
              ["1471", 0, 3.27, 0.59, 2.17, 0.8],
              ["1681", 0, 2.2, 2.86, 2.7, 0],
              ["1891", 0.68, 2.5, 1.09, 1.83, 0],
              ["2101", 1.01, 3, 0, 1.98, 0.55],
              ["2311", 12.18, 8.29, 6.93, 10.74, 7.41],
              ["2521", 4.03, 3.31, 2.65, 4.72, 3.74],
              ["2731", 3.52, 4.6, 1.29, 1.77, 1.05],
              ["2941", 0.77, 6.21, 2.4, 4.12, 3.23],
              ["3151", 0, 5.65, 3.92, 2.73, 1.95],
              ["3361", 0, 2.61, 1.98, 3.33, 3.92],
              ["3571", 0, 3.48, 2.32, 0, 0],
              ["3781", 1.54, 3.41, 0.78, 0, 0],
              ["3991", 0, 1.75, 0.19, 0, 1.12],
              ["4201", 1.37, 4, 1.13, 4.44, 1.95],
            ],
          },
          xAxis: { type: "category" },
          yAxis: {},
          // Declare several bar series, each will be mapped
          // to a column of dataset.source by default.
          series: [
            { type: "line" },
            { type: "bar" },
            { type: "bar" },
            { type: "bar" },
            { type: "bar" },
          ],
        };
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
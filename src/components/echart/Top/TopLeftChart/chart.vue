<template>
  <div>
    <!-- 该区域污染物 -->
    <Echart
      :options="options"
      id="topLeftChart"
      height="410px"
      width="100%"
    ></Echart>
  </div>
</template>

<script>
// 引入封装组件
import Echart from "@/common/echart";
export default {
  // 定义配置数据
  data() {
    return {
      options: {},
    };
  },
  // 声明组件
  components: {
    Echart,
  },
  // 接收数据
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
          legend: {
            data: ["铅", "镉", "总氮"],
          },
          xAxis: {
            type: "category",
            data: ["I", "Ⅱ", "Ⅲ", "Ⅳ", "V", "劣V"],
          },
          yAxis: [
            { type: "value" },
            {
              type: "value",
              // name: "%",

              nameTextStyle: {
                color: "#ccc",
                padding: [0, 0, 10, -30],
              },
              splitNumber: 5,
              splitLine: {
                show: true,
                lineStyle: {
                  type: "dashed",
                  width: 1,
                  // 使用深浅的间隔色
                  color: ["#566471", "#566471"],
                },
              },
              axisLabel: {
                show: true,
                textStyle: {
                  fontSize: 12,
                },
              },
            },
          ],

          // 了解数据的详细信息
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
            textStyle: {
              color: "#fff",
              align: "left",
              fontSize: 14,
            },
            axisLine: {
              //x坐标轴轴线
              show: true,
              lineStyle: {
                //x坐标轴轴线样式
                color: "#000", //'#ccc' | 'rgb(128, 128, 128)' | 'rgba(128, 128, 128, 0.5)'，设置标签颜色
              },
            },

            backgroundColor: "rgba(0,0,0,0.8)",
          },

          series: [
            {
              name: "镉",
              data: [107, 0, 0, 0, 0, 37],
              // 设置堆叠柱状图 stack类型相同的将堆叠
              // stack: "BB",
              type: "bar",
            },
            {
              name: "铅",
              data: [107, 0, 0, 0, 0, 37],
              // stack: "BB",
              type: "bar",
            },
            {
              name: "总氮",
              data: [107, 0, 0, 0, 0, 34],
              // stack: "AA",
              type: "bar",
            },
          ],
        };
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>
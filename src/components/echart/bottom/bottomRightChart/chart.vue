<template>
  <!-- 底部右边图表 -->
  <div>
    <Echart
      :options="options"
      id="bottomRightChart"
      height="500px"
      width="500px"
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
        let color = [
          "#0E7CE2",
          "#FF8352",
          "#E271DE",
          "#F8456B",
          "#00FFFF",
          "#4AEAB0",
        ];
        let echartData = [
          {
            name: "年份",
            value: "2022",
          },
          {
            name: "检测站数量",
            value: "22",
          },
          {
            name: "检测指标数量",
            value: "6",
          },
        ];
        let formatNumber = function (num) {
          let reg = /(?=(\B)(\d{3})+$)/g;
          return num.toString().replace(reg, ",");
        };
        this.options = {
          // backgroundColor: "#364686",
          color: color,
          title: [
            {
              text: "水质等级",
              x: "center",
              //
              top: "42%",
              textStyle: {
                color: "#fff",
                fontSize: 20,
                fontWeight: "100",
              },
            },
            {
              text: "劣Ⅴ",
              x: "center",
              top: "50%",
              textStyle: {
                fontSize: 20,
                color: "#00f0ff",
                foontWeight: "500",
              },
            },
          ],
          polar: {
            radius: ["44%", "50%"],
            center: ["50%", "50%"],
          },
          angleAxis: {
            max: 100,
            show: false,
          },
          radiusAxis: {
            type: "category",
            show: true,
            axisLabel: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
          series: [
            {
              type: "pie",
              radius: ["55%", "67%"],
              center: ["50%", "50%"],
              data: echartData,
              hoverAnimation: false,
              itemStyle: {
                normal: {
                  borderColor: "#364684",
                  borderWidth: 2,
                },
              },
              labelLine: {
                // 指示线的长度
                normal: {
                  length: 30,
                  length2: 30,
                  lineStyle: {
                    color: "#e6e6e6",
                  },
                },
              },
              label: {
                normal: {
                  formatter: (params) => {
                    return (
                      "{icon|●}{name|" +
                      params.name +
                      "}\n{value|" +
                      formatNumber(params.value) +
                      "}"
                    );
                  },
                  padding: [0, -70, 30, -70],
                  rich: {
                    icon: {
                      fontSize: 16,
                      align: "left",
                      padding: [4, 0, 0, 0],
                    },
                    name: {
                      fontSize: 14,
                      align: "left",
                      padding: [4, 0, 0, 0],
                      color: "#fff",
                    },
                    value: {
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#fff",
                      align: "left",
                    },
                  },
                },
              },
            },
            {
              name: "",
              type: "pie",
              startAngle: 90,
              radius: "50%",
              hoverAnimation: false,
              center: ["50%", "50%"],
              itemStyle: {
                normal: {
                  labelLine: {
                    show: false,
                  },
                  color: new this.$echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                    {
                      offset: 1,
                      color: "rgba(50,171,241, 1)",
                    },
                    {
                      offset: 0,
                      color: "rgba(55,70,130, 0)",
                    },
                  ]),
                  // borderWidth: 1,
                  // borderColor: '',
                  shadowBlur: 10,
                  // shadowColor: 'rgba(55,70,130, 1)'
                },
              },
              data: [
                {
                  value: 100,
                },
              ],
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

<style lang="scss" scoped>
</style>
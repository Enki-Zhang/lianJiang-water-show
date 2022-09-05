<template>
  <!-- 该区域主要污染物 -->
  <div>
    <Echart
      id="centreLeft2Chart"
      ref="centreLeft2ChartRef"
      :options="options"
      height="380px"
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
      type: Array,
      // default: () => [],
      default: () => ({}),
    },
  },
  watch: {
    cdata: {
      handler() {
        this.options = {
          //  设置整个背景颜色 默认为图表主题色
          // backgroundColor: '#fff',
          title: {
            // text: "订单量（个）",
            left: "18px",
            top: "0",
            textStyle: {
              color: "#999",
              fontSize: 12,
              fontWeight: "400",
            },
          },
          color: ["#5B8FF9", "#FFA18E", "#5AD8A6"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              crossStyle: {
                color: "#999",
              },
              lineStyle: {
                type: "dashed",
              },
            },
          },
          grid: {
            left: "25",
            right: "25",
            bottom: "14",
            top: "45",
            containLabel: true,
          },
          legend: {
            data: [
              "溶解氧",
              "氨氮",
              "总磷",
              "总氮",
              "硫化物",
              "挥发酚",
              "六价铬",
              "铅",
              "镉",
            ],
            left: "20px",
            top: 0,
            icon: "path://M0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
            textStyle: {
              color: "#333",
            },
            itemWidth: 10,
            itemHeight: 10,
          },
          xAxis: {
            type: "category",
            data: ["1", "2", "3", "4", "5"],
            splitLine: {
              show: false,
            },
            axisTick: {
              show: true,
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: "rgba(0,0,0,0.5)",
              },
            },
          },
          yAxis: {
            type: "value",
            max: "8",
            // max: max_value>=100? max_value + 100: max_value+10,
            // max: max_value > 100 ? max_value * 2 : max_value + 10,
            // interval: 10,
            // nameLocation: "center",
            axisLabel: {
              color: "#999",
              textStyle: {
                fontSize: 12,
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#F3F4F4",
              },
            },
            axisLine: {
              show: false,
            },
          },
          series: [
            {
              name: "溶解氧",
              type: "line",
              smooth: true,
              data: [2.14, 2.08, 5.56, 2.07, 2.03],
            },
            {
              name: "氨氮",
              type: "line",
              smooth: true,
              data: [1.9, 1.87, 1.58, 1.89, 1.93],
            },
            {
              name: "总磷",
              type: "line",
              smooth: true,
              data: [0.125, 1.32, 0.099, 1.17, 0.841],
            },
            {
              name: "总氮",
              type: "line",
              smooth: true,
              data: [6.81, 3.24, 3.02, 7.62, 6.2],
            },
            {
              name: "硫化物",
              type: "line",
              smooth: true,
              data: [0.293, 0.105, 0.01, 0.101, 0.092],
            },
            {
              name: "挥发酚",
              type: "line",
              smooth: true,
              data: [0.0002, 0.001, 0.0002, 0.001, 0.0009],
            },
            {
              name: "六价铬",
              type: "line",
              smooth: true,
              data: [0.002, 0.002, 0.002, 0.002, 0.002],
            },
            {
              name: "铅",
              type: "line",
              smooth: true,
              data: [0.005, 0.006, 0.0005, 0.0005, 0.011],
            },
            {
              name: "镉",
              type: "line",
              smooth: true,
              data: [0.0004, 0.0004, 0.0004, 0.0004, 0.0008],
            },
          ],
        };
      },
      immediate: true,
      deep: true,
    },
  },
  // methods: {
  //   // 开启定时器
  //   startInterval() {
  //     const _self = this;
  //     // 应通过接口获取配置时间，暂时写死5s
  //     const time = 2000;
  //     if (this.intervalId !== null) {
  //       clearInterval(this.intervalId);
  //     }
  //     this.intervalId = setInterval(() => {
  //       _self.reSelectMapRandomArea();
  //     }, time);
  //   },
  //   // 重新随机选中地图区域
  //   reSelectMapRandomArea() {
  //     const length = 9;
  //     this.$nextTick(() => {
  //       try {
  //         const map = this.$refs.centreLeft2ChartRef.chart;
  //         let index = Math.floor(Math.random() * length);
  //         while (index === this.preSelectMapIndex || index >= length) {
  //           index = Math.floor(Math.random() * length);
  //         }
  //         map.dispatchAction({
  //           type: 'mapUnSelect',
  //           seriesIndex: 0,
  //           dataIndex: this.preSelectMapIndex,
  //         });
  //         map.dispatchAction({
  //           type: 'showTip',
  //           seriesIndex: 0,
  //           dataIndex: index,
  //         });
  //         map.dispatchAction({
  //           type: 'mapSelect',
  //           seriesIndex: 0,
  //           dataIndex: index,
  //         });
  //         this.preSelectMapIndex = index;
  //       } catch (error) {
  //         console.log(error)
  //       }
  //     });
  //   },
  //   handleMapRandomSelect() {
  //     this.$nextTick(() => {
  //       try {
  //         const map = this.$refs.centreLeft2ChartRef.chart;
  //         const _self = this;
  //         setTimeout(() => {
  //           _self.reSelectMapRandomArea();
  //         }, 0);
  //         // 移入区域，清除定时器、取消之前选中并选中当前
  //         map.on('mouseover', function (params) {
  //           clearInterval(_self.intervalId);
  //           map.dispatchAction({
  //             type: 'mapUnSelect',
  //             seriesIndex: 0,
  //             dataIndex: _self.preSelectMapIndex,
  //           });
  //           map.dispatchAction({
  //             type: 'mapSelect',
  //             seriesIndex: 0,
  //             dataIndex: params.dataIndex,
  //           });
  //           _self.preSelectMapIndex = params.dataIndex;
  //         });
  //         // 移出区域重新随机选中地图区域，并开启定时器
  //         map.on('globalout', function () {
  //           _self.reSelectMapRandomArea();
  //           _self.startInterval();
  //         });
  //         this.startInterval();
  //       } catch (error) {
  //         console.log(error)
  //       }
  //     });
  //   },
  // },
};
</script>

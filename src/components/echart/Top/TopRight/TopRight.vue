<template>
  <my-map  :zoom="12" :center="[116.3759, 23.2776]">
    <my-map-marker v-if="markers" :data="markers">
      <!-- <template v-slot="{marker}">
        坐标：{{marker.coordinate}} <br>
        数据项个数：{{marker.items.length}} <br>
        集群: {{marker.cluster}} <br>
      </template> -->
    </my-map-marker>
       <!-- <my-map-layers :layers="layers" :margin="10"></my-map-layers> -->
  </my-map>
</template>
<script>
//  import Baidu from '$ui/map/sources/preview/Baidu.png'
  // import Amap from '$ui/map/sources/preview/Amap.png'

  export default {
       data() {
         
      return {
        markers: null,
        // layers: [
        //   {
        //     title: '百度',
        //     adapter: 'Baidu',
        //     preview: Baidu
        //   },
        //   // {
        //   //   title: '高德',
        //   //   adapter: 'Amap',
        //   //   preview: Amap
        //   // },

        // ]
      }
    },
    
    methods: {
      createMarkers() {
        const markers = []
        // const center = this.center
        // for (let i = 0; i < count; i++) {
        //   markers.push({
        //     coordinate: center.map(n => n + Math.random() - Math.random())
        //   })
        // }

        // 练江监测站地理位置标记
        markers.push({coordinate:[116.6189, 23.2189]})
        markers.push({coordinate:[116.4831,23.2628]})
        markers.push({coordinate:[116.5849,23.2648]})
        markers.push({coordinate:[116.5468,23.2054]})
        markers.push({coordinate:[116.5308,23.1834]})
        markers.push({coordinate:[116.4961,23.2025]})
        markers.push({coordinate:[116.4586,23.2219]})
        markers.push({coordinate:[116.4210,23.2266]})
        markers.push({coordinate:[116.3889,23.2236]})
        markers.push({coordinate:[116.4792,23.2638]})
        markers.push({coordinate:[116.4532,23.2678]})
        markers.push({coordinate:[116.4386,23.2897]})
        markers.push({coordinate:[116.4078,23.3216]})
        markers.push({coordinate:[116.3731,23.3281]})
        markers.push({coordinate:[116.3458,23.3400]})
        markers.push({coordinate:[116.3759,23.2776]})
        markers.push({coordinate:[116.3736,23.2398]})
        markers.push({coordinate:[116.3519,23.2956]})
        markers.push({coordinate:[116.3424,23.2897]})
        markers.push({coordinate:[116.3126,23.2618]})
        markers.push({coordinate:[116.2915,23.2607]})
        markers.push({coordinate:[116.3153,23.3044]})

        return markers
      }
    },
    created() {
      setTimeout(() => {
        this.markers = this.createMarkers()
      }, 0)
    }
  }
</script>


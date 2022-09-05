<template>
  <div class="hello">
     <vue-particles class="lizi"
        color="#409EFF"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
      <div class="content">
        <router-link to='/ll' class="title">{{ msg }}</router-link>
      </div>
      
 
    <p>
      <!-- 练江，南海水系河流。发源于广东省普宁市大南山五峰尖西南麓杨梅坪的白水磜，大小支流17条， 由南北汇入干流。
      干流全长71公里，流域面积1346.6平方公里。因河道弯曲、婉蜒如练而得名。 河源称为寒妈径，入海口在汕头市潮
      阳区海门湾。上游称流沙河，在普宁晖含墟与支流白坑湖水汇合后始 称练江。历史上练江水运也比较重要，新中国
      建立前其支流的白坑湖水至陈店可通木船，陈店以下44公里 可通小汽轮。为使练江与榕江、韩江的航运连贯起来，
      明代在棉城修建棉城运河（后溪）长7.5公里，连 系练江和牛田洋。这样船只不必绕过外海，便可安全快捷到达海阳等地，
      效益巨大。水文特征：练江干流多年平均径流深1156毫米，多年平均径流量5.874亿立方米，洋尾山水闸过闸流量488-929立方米每秒。
      练江流程短、落差小，加上河道弯曲、排洪不畅，建国前常泛滥成灾。天旱时咸潮上涌，造成广泛的咸害。2*世纪50年代以后进行了
      综合整治，在上游及各支流建水库进行蓄水；干流裁弯取直16处，河流长度缩短23.4公里；山前截洪排洪，有效地控制了水旱灾。
      海门建桥闸，消除了咸害。 历史上练江水运也比较重要，新中国建立前其支流的白坑湖水至陈店可通木船，陈店以下44公里可通小
      汽轮。为使练江与榕江、韩江的航运连贯起来，明代在棉城修建棉城运河（后溪）长7.5公里，连系练江和牛田洋。这样船只不必绕过
      外海，便可安全快捷到达揭阳、海阳等地，效益巨大。 -->
      <!-- <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>. -->
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      msg : "练江可视化"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#particles-js{
      position: absolute;
      overflow: hidden;
    }
.lizi{
 width: 100vw;
height: 100vh;

}
/* .hello{
 
  
  
} */
.content{
  
  z-index: 1;
  /* margin: 50%; */
  /* left: ; */

  position:absolute;
  top:50%;
  height:150px;
  margin-top:-75px;
  left:50%;
}
.title {
  font-family: "Lucida Console", "Courier New", monospace;
  /* margin: 40px 0 0; */
   position: relative;
  z-index: 1;
  /* margin-top: 200px; */
  
  
 
  /* text-align: center;
   */
 
  color: #fafafa;
  font-size: 8em;
}
p {
   color: #342c28;
   text-align: center;
}

a {
  color: #42b983;
}
</style>

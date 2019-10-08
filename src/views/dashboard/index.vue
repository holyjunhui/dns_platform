<template>
  <div ref='chartname'>
    <MyComponents v-model="form.permissions"></MyComponents>
    <button @click="handleClick">获取</button>
    <div ref="demo"></div>
    <div ref="bar"></div>
    <hr>

    <div ref="mapbox" id="mapbox"></div>
  </div>
</template>
<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import G2 from "@antv/g2";
import MyComponents from "@/components/MyComponents";
import { setTimeout } from "timers";
export default {
  name: "Dashboard",
  data() {
    return {
      form: {
        permissions: 274
      }
    };
  },
  components: {
    MyComponents
  },
  mounted() {
    this.initMapbox()
    this.initRingChart();
    this.initBar()
    setTimeout(() => {
      console.log("hastime");
      return (this.form.permissions = 22);
    }, 3000);
  },
  computed: {},
  methods: {
    initMapbox(){
      mapboxgl.accessToken = "pk.eyJ1IjoiaG9seWh1aSIsImEiOiJjanppMW41dHoxMWFqM2x0Nm43bjl0cW5yIn0.gq7AZgLKA1sJGMZPqFBUGQ"
      const map = new mapboxgl.Map({
        container: "mapbox",
        style:"mapbox://styles/mapbox/streets-v11",
        zoom:9
      })
    },
    handleClick() {
      console.log("this.click", this.form);
    },
    initRingChart() {
      const data = [
        { genre: "Sports", sold: 275 },
        { genre: "Strategy", sold: 115 },
        { genre: "Action", sold: 120 },
        { genre: "Shooter", sold: 350 },
        { genre: "Other", sold: 150 }
      ];
      //init chart
      const chart = new G2.Chart({
        container: this.$refs.demo,
        width: 600,
        height: 300
      });
      chart.source(data);
      chart
        .interval()
        .position("genre*sold")
        .color("genre");
      chart.render();
    },
    initBar(){
      var data = [{
    year: '1991',
    value: 3
  }, {
    year: '1992',
    value: 4
  }, {
    year: '1993',
    value: 3.5
  }];

  const chart = new G2.Chart({
    container:this.$refs.bar,
    width:600,
    height:400
  })
  chart.source(data)
  chart.scale("value",{
    min:0
  })
  chart.scale("year",{
    range:[0,1]
  })
  chart.tooltip({
    crosshairs:{
      type:'line'
    }
  })
  chart.line().position('year*value')
  chart.point().position('year*value').size(4).shape('circle').style({
    stroke:'#fff',
    lineWidth:1
  })
  chart.render()
    }
  }
};
</script>
<style lang="scss" scoped>
#mapbox {
  width: 100vw;
  height: 600px;
}
</style>
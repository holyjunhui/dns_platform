<template>
  <div ref='chartname'>
    <MyComponents v-model="form.permissions"></MyComponents>
    <button @click="handleClick">获取</button>
    <div ref="demo"></div>
  </div>
</template>
<script>
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
    this.initRingChart();
    setTimeout(() => {
      console.log("hastime");
      return (this.form.permissions = 22);
    }, 3000);
  },
  computed: {},
  methods: {
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
    }
  }
};
</script>

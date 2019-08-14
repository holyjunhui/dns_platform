<template>
<el-select filterable placeholder="请选择">
<RecycleScroller
    class="scroller"
    :items="list"
    :item-size="32"
    key-field="name"
  >
    <template v-slot="{item}" class="user">
     <el-option :label="item.id" :value="item.id">

     </el-option>
    </template>
  </RecycleScroller>
</el-select>

<!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->
<!-- <Virtual ref="virtual"></Virtual> -->

  <!-- <ul class="scroller">
    <li v-for="item in list" :key="item.name">
      {{item.name}}
    </li>
  </ul> -->
</template>
 
<script>
import Virtual from './virtual'
export default {
  // props: {
  //   list: Array,
  // },
  components:{
    Virtual
  },
  name:"fff",
  data(){
    return{
      list:[],
       dialogVisible: false
    }
  },
   methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    },
  mounted(){
    for(let i = 0;i<100000;i++){
      this.list.push({
        id:i,
        name:i,
        age:i
      })
    }
  }
}
</script> 
 
<style scoped>
.scroller {
  height: 300px;
  overflow-y: scroll;
}
 
.user {
  height: 32%;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style> 
<template>
  <div class="app-wrapper" :class="classObj">
    <SideBar class="sidebar-container"/>
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <NavBar/>
      </div>
      <AppMain/>
    </div>
  </div>
</template>
<script>
import { NavBar, SideBar, AppMain } from './components'
import { mapGetters } from 'vuex'
export default {
  name:'Layout',
  components:{
    NavBar,
    SideBar,
    AppMain
  },
  computed:{
    sidebar() {
      return this.$store.state.app.sidebar
    },
    fixedHeader() {
      return false
    },
    classObj() {
      return {
        hideSidebar:!this.sidebar.opened,
        withoutAnimation:this.sidebar.withoutAnimation
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  
  }
  .drawer-bg {

  }
  .fixed-header {
    position: fixed;
    top: 0;
    right:0;
    z-index:9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }
  
</style>

<template>
  <div>
    <!-- //todo logo组件 -->
    <!-- <Logo></Logo> -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :unique-openal="false"
        :collapse-trasition="false"
        mode="vertical"
      >
        <SidebarItem
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";
export default {
  name: "SideBar",
  components: {
    SidebarItem
  },
  data() {
    return {
      message:'lijunhui'
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      console.log("sidebarthis",this.$router)
      console.log("toutetete",this.$route)

      return this.$router.options.routes;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
};
</script>
<style lang="scss">
.sidebar {
  position: absolute;
  top: 0;
  left: 0;
}
</style>

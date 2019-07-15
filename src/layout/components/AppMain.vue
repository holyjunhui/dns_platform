<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key"></router-view>
    </transition>
  </section>
</template>
<script>
export default {
  name:"AppMain",
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
<style scoped>
.app-main{
  min-height: calc(100vh - 50px);
  height: calc(100vh - 50px);
  width: 100%;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

</style>

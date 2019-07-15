<template>
  <div class="navbar">
    <Hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleClick"></Hamburger>
    <BreadCrumb class="breadcrumb-container"></BreadCrumb>
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img src="../../icons/svg/002.jpg" alt="" class="user-avatar">
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu class="user-drapdown" slot="dropdown">
            <router-link to="/">
              <el-dropdown-item>
                Home
              </el-dropdown-item>
            </router-link>
            <a href="www.baidu.com" target="_blank">
              <el-dropdown-item>baidu</el-dropdown-item>
            </a>
            <el-dropdown-item divided>
              <span style="display:block" @click="loginout">Login Out</span>
            </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import BreadCrumb from '@/components/Breadcrumb'
export default {
  name:"NavBar",
  components:{
    Hamburger,
    BreadCrumb
  },
  computed:{
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleClick(){
      this.$store.dispatch('app/toggleSideBar')
    },
    async loginout(){
      await this.$store.dispatch('user/loginout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
    .hamburger-container {
      line-height: 46px;
      height: 100%;
      float:left;
      margin-left: 20px;
      margin-right: 16px;
      cursor:pointer;
      transition: background .3s;
      &:hover {
        background: rgba(0,0,0,.025)
      }
    }
    .breadcrumb-container {
      float: left;
    }
    .right-menu{
      float: right;
      height: 100%;
      line-height: 50px;
      &.focus {
        outline:none
      }
      .rigth-menu-item {
        display: inline-block;
        padding: 0 8px;
        height: 100%;
        font-size: 18px;
        color: #5a5e66;
        vertical-align:text-bottom;
      }
      .avatar-container {
        margin-right: 35px;
        .avatar-wrapper {
          margin-top: 5px;
          position: relative;
          .user-avatar {
            cursor:pointer;
            width: 40px;
            height: 40px;
            border-radius: 20px;
          }
          .el-icon-caret-bottom {
            cursor: pointer;
            position: absolute;
            top: 25px;
            right: -20px;
            font-size: 12px;
          }
        }
      }
    }
  }
  
</style>

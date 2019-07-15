<template>
  <div class="login-container">
    <el-form class="login-form" :model="loginForm" ref="loginForm" :rules="loginRules">
      <div class="title-container">
        <h3 class="title">DNS PLATFORM</h3>
      </div>

      <el-form-item label="账户:" prop="username" class="input-container">
        <el-input type="text" class="input-wrap" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="密码:" prop="password" class="input-container">
        <el-input 
         class="input-wrap" 
         v-model="loginForm.password"
         ref="password"
         :type="passwordType"
          name="password"
          @keyup.enter.native = "handleLogin"
         autocomplete="on"
         ></el-input>
         <span class="show-pwd" @click="showPwd">
           <svg-icon :icon-class="passwordType === 'password'?'eye':'eye-open'"></svg-icon>
         </span>
      </el-form-item>

      <el-button :loading="loading" class="login" type="primary" @click.native.prevent="handleLogin">Login</el-button>
    </el-form>
  </div>
</template>
<script>

export default {
  name: "Login",
  data() {
    return {
      redirect:undefined,
      loading:false,
      loginForm: {
        username: "lijunhui",
        password: 123
      },
      loginRules: {
        username:[
          {required:true,message:'请输入账号',trigger:'blur'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger:'blur'}
        ]
      },
      passwordType:'password'
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        console.log("routesss",route)
        this.redirect = route.query && route.query.redirect
      },
      immediate:true
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate((valid) =>{
        // console.log("valuid",valid);
        if(valid){
          this.loading = true
          // console.log("disptch",this.$store)
          this.$store.dispatch('user/login',this.loginForm)
          .then(() => {
            this.$router.push({path:this.redirect || '/'})
            this.loading = false
          })
          .catch(()=>{
            this.loading = false
          })
        }else {
          console.log("error")
          return false
        }
      })
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      console.log("log", this.$refs.password)
      this.$refs.password.focus();
    }
  }
};
</script>

<style lang="scss">
$bg: gray;
$title-color: #eee;
$width: 520px;
.login-container {
  min-height: 100vh;
  margin:0 auto;
  width: 100%;
  background: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    margin: 0 auto;
    text-align: center;
    width: $width;
    padding: 160px 35px 0;
    overflow: hidden;
  }
  .input-container {
    display: flex;
    justify-content: center;
    align-items: center;

    label {
      color:#fff;
      margin-right: 10px;
    }
  }
  .login {

  }
  .title-container {
    position: relative;
    .title {
      color: $title-color;
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 60px;
      padding: 10px 0;
    }
  }
  .show-pwd {
    position: absolute;
    // top: 10px;
    right: 10px;
    cursor: pointer;
    color: grey;
    
  }
}
</style>

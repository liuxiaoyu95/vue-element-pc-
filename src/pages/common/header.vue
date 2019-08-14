<template>
    <el-menu :router="true" :unique-opened="true" :default-active="$route.path" mode="horizontal" class="el-menu-vertical-demo">
        <el-menu-item index="/index">
            首页
        </el-menu-item>
        <el-menu-item index="/user/consult">
            我的咨询
        </el-menu-item>
        <el-menu-item index="/user/rtcvisitshow">
            我的视频问诊
        </el-menu-item>
        <el-menu-item index="/user/chufang">
            我的处方
        </el-menu-item>
        <el-menu-item index="/user/pcard">
            我的病历
        </el-menu-item>
        <el-menu-item index="/diseaseknowledge">
            疾病知识
        </el-menu-item>
        <el-menu-item index="/user/userinfo">
            个人资料
        </el-menu-item>
        <el-menu-item>
                <a href="#" @click.prevent="gologin">登录/注册</a>
        </el-menu-item>
        <el-menu-item>
                <a href="#" @click.prevent="logout">退出</a>
        </el-menu-item>
    </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        navselected: '',
      }
    },
    created() {

    },
    // 判断路由
    mounted() {
      this.path = this.$route.path;
      // console.log(this.$route.path)
    },
    watch: {
      $route(to, from) {
        this.path = to.path
      }
    },
    methods: {
      gologin() {
        // 跳转回登录页面
        this.$router.push({ name: 'login' });
      },
      logout() {
        this.$confirm('是否确定退出?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 清除 window.localStorage
          window.localStorage.removeItem('token');
          // 跳转回登录页面
          this.$router.push({ name: 'login' });
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });
        })
      }
    }
  }
</script>

<style>
</style>

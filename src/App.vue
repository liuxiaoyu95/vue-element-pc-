<template>
    <div id="app">
        <div v-show="!(path ==='/login')">
            <el-container>
                <el-header>
                    <Header/>
                </el-header>
                <el-container>
                    <el-aside width="200px">
                        <Userbar v-show="!(path ==='/index') && !(path ==='/diseaseknowledge')"/>
                    </el-aside>
                    <el-main>
                    </el-main>
                </el-container>
                <el-footer>
                    <Footer/>
                </el-footer>
            </el-container>
        </div>
        <router-view/>
    </div>
</template>

<script>
  import Header from '@/pages/common/header'
  import Footer from '@/pages/common/footer'
  import Userbar from '@/pages/common/userbar'

  export default {
    name: 'App',
    data() {
      return {
        path: ''
      }
    },
    components: {
      Header,
      Footer,
      Userbar
    },
    // 判断路由
    mounted() {
      this.path = this.$route.path;
      // console.log(this.$route.path)
    },
    watch: {
      $route(to, from) {
        console.log('app to',to)
        console.log('app from',from)
        this.path = to.path
      }
    }
  }
</script>
<style>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        height: 100%;
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        height: 100%;
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }
</style>

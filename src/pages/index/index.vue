<template>
    <div class="index">
        {{msg}}
    </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'home界面'
      }
    },
    components: {
    }
  }
</script>

<style scoped>
    .el-container {
        height: 100%;
    }

    .el-header {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        /* line-height: 200px; */
        height: 100%;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
    }

    .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
</style>
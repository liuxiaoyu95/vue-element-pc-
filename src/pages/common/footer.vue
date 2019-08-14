<template>
  <el-row>
    <el-col :span="4">
      <div class="grid-content bg-purple">logo</div>
    </el-col>
    <el-col :span="16">
      <div class="mytitle">底部</div>
    </el-col>
    <el-col :span="4">
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
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
.mytitle {
  color: #fff;
  font-size: 24px;
}

.logout {
  text-align: right
}

.logout a {
  color: pink
}
</style>

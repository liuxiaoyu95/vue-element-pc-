<template>
    <div class="consult">
        {{msg}}
    </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'consult界面'
      }
    },
  }
</script>

<style lang='less' scoped>
    @color: skyblue;
    .consult {
        width: 100vw;
        height: 100vh;
        background-color: @color;
    }
</style>
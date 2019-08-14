<template>
  <div id="login">
    {{login | cutStrByLength(3)}}
    <el-button round @click='api'>登录(数据请求)</el-button>
    <el-button round @click='mock'>数据渲染</el-button>
    <table>
      <tr>
        <th>id</th>
        <th>name</th>
      </tr>
      <tr v-for="item,index in userData" :key="index">
        <td>{{index}}</td>
        <td>{{item.name}}</td>
      </tr>
      <tr v-if="userData.length === 0">
        <td>暂无数据</td>
      </tr>
    </table>
  </div>
</template>
<script>
  import '@/assets/css/base.css';
  import {login} from '@/api/modules/login';
  import Mock from 'mockjs';

  export default {
    name: 'login',
    data() {
      return {
        list: '',
        login: "登录界面",
        userData: []
      };
    },
    methods: {
      api() {
        const loading = this.$loading({
          lock: true,
          text: '数据请求中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });

        //数据请求
        login({postId: 1})
          .then(response => {
            loading.close();
            this.$notify({
              title: '请求',
              message: '数据请求成功!',
              type: 'success',
              offset: 80,
              duration: '3000'
            });
            this.$router.push({name:'index'})
            console.log(response);
          }, err => {
            console.log('请求失败');
          });
      },
      mock(){
        const lxy_data = Mock.mock({
          'lxy_data|1-39':[
            {
              'name':'@cname'
            }
          ]
        })
        this.userData = lxy_data.lxy_data
        console.log(Mock.mock('@now'));
        console.log(lxy_data);
      }
    },
    mounted() {

    }
  };
</script>
<style lang='less' scoped>
  @color: pink;
  #login {
    background-color: @color;
  }
</style>

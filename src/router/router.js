import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login.vue'
import Index from '@/pages/index/index.vue'

import Header from '@/pages/common/header.vue';
import Footer from '@/pages/common/footer.vue';
import Userbar from '@/pages/common/userbar.vue';

import Consult from '@/pages/user/consult.vue'
import Rtcvisitshow from '@/pages/user/rtcvisitshow.vue'
import Chufang from '@/pages/user/chufang.vue'
import Pcard from '@/pages/user/pcard.vue'
import UserInfo from '@/pages/user/userinfo.vue'
import Diseaseknowledge from '@/pages/diseaseknowledge/diseaseknowledge.vue'

const User = {
  template: '<router-view></router-view>',
}

Vue.use(Router)

const routerLink = [
  {path: '/', redirect: {name: 'index'}},
  {path: '/login', name: 'login', component: Login},
  {path: '/index', name: 'index', component: Index},
  {path: '/header', name: 'header', component: Header},
  {path: '/footer', name: 'footer', component: Footer},
  {path: '/userbar', name: 'userbar', component: Userbar},
  {path: '/diseaseknowledge', name: 'diseaseknowledge', component: Diseaseknowledge},
  {path: '/user', name: 'user', component: User, children: [
      {path: '/', name: 'userinfo', component: UserInfo, meta: { requireAuth: true}},
      {path: '/user/consult', name: 'consult', component: Consult, meta: { requireAuth: true}},
      {path: '/user/rtcvisitshow', name: 'rtcvisitshow', component: Rtcvisitshow, meta: { requireAuth: true}},
      {path: '/user/chufang', name: 'chufang', component: Chufang, meta: { requireAuth: true}},
      {path: '/user/pcard', name: 'pcard', component: Pcard, meta: { requireAuth: true}},
      {path: '/user/userinfo', name: 'userinfo', component: UserInfo, meta: { requireAuth: true}}
    ]},
    {path: '**', redirect: '/index'} // 错误路由
  ]

export default routerLink

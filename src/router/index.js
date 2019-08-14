import Vue from 'vue'
import Router from 'vue-router'
//页面路由
import routerLink from './router.js';

Vue.use(Router);
let router = new Router({
  // mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    //返回之前页面滚动到之前访问的位置
    if (savedPosition) {
      //当点击浏览器回退前进功能的时候,savedPosition会记录之前已经浏览的位置
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: routerLink
})

window.localStorage.setItem('loginOk', 'true');
//全局守卫,页面加载的时候,监控路由是否相同
router.beforeEach((to, from, next) => {
  console.log('to.meta.requireAuth',to);
  console.log('from.meta.requireAuth',from);
  if (to.meta.requireAuth) {
    let token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath    // 将跳转的路由path作为参数，登录成功后跳转到该路由
        }
      })
    }
  } else {
    next()
  }
});

//后置钩子,进入组件之后会调用钩子函数
router.afterEach((to, from) => {
  console.log('进入路由组件完成阶段的后置钩子');
})

export default router


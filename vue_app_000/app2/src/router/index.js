import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '../components/login'
import choose from '../components/choose'
import sy from '../components/sy.vue'
import person from '../components/person.vue'
import de from '../components/de.vue'
import zhishi from '../components/zhishi.vue'
import ren from '../components/ren.vue'
import vzhishi from '../components/vzhishi.vue'
import zan from '../components/zan.vue'
import vzan from '../components/vzan.vue'
Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/choose',
      name: 'choose',
      component: choose
    },
    {
      path: '/sy',
      name: 'sy',
      component: sy
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },
    {
      path: '/de',
      name: 'de',
      component: de
    },
    {
      path: '/zhishi',
      name: 'zhishi',
      component:zhishi
    },
    {
      path: '/ren',
      name: 'ren',
      component:ren
    },
    {
      path: '/vzhishi',
      name: 'vzhishi',
      component:vzhishi
    },
    {
      path: '/zan',
      name: '/zan',
      component:zan
    },
    {
      path: '/vzan',
      name: '/vzan',
      component:vzan
    }
  ]
});
//全局路由守卫
router.beforeEach((to,from,next)=>{
  console.log('navigation-guards');
  const nextRoute=['ren'];
  let isLogin=global.isLogin;//是否登录
  //为登录状态
  if(nextRoute.indexOf(to.name)>=0){
    if(!isLogin){
      console.log('what fuck');
      router.push({name:'login'})
    }
  }
  //已登录状态，当路由到login时，跳转home
  if(to.name==='login'){
    if(isLogin){
      router.push({name:'sy'});
    }
  }
  next();

});
export default router;

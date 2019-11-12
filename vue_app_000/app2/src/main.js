// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'

Vue.config.productionTip = false

//功能:引入第三方的组件库mint-ui
//1:完整引入mint-ui组件库中所有组建
import MintUI from "mint-ui"
//2:单引入mint-ui库中样式文件import 
import "mint-ui/lib/style.css"
//3:将mint-ui注册vue实例
Vue.use(MintUI)
//4:引入字体图标文件
// import"./font/iconfont.css"
/* eslint-disable no-new */
//6:用vant
 import Vant from 'vant';
 import 'vant/lib/index.css';
 Vue.use(Vant);
//5:引入axios模块
import axios from "axios"
//6:配置服务器基础路径(我们的服务器昨天写的是4000  端口号3001是自己的)
axios.defaults.baseURL="http://127.0.0.1:4000/"
//7:配置保留session信息
axios.defaults.withCredentials=true
//8:axios注册vue
Vue.prototype.axios=axios  //下载 在脚手架中 npm i axios-S


// 标签容器
// import { Tab, Tabs } from 'vant';
// Vue.use(Tab).use(Tabs);
// cebiandaohanglan



//======================================
import { Sidebar, SidebarItem } from 'vant';

Vue.use(Sidebar);
Vue.use(SidebarItem);
// ===========搜索
import { Search } from 'vant';
Vue.use(NavBar);

Vue.use(Search);


//==========
import { Field } from 'mint-ui';

Vue.component(Field.name, Field);
//============
import { NavBar } from 'vant';
/* eslint-disable no-new */

//=====提交订单栏
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);

//==== 图片
import { Grid, GridItem } from 'vant';

Vue.use(Grid).use(GridItem);


new Vue({
el: '#app',
router,
components: { App },
template: '<App/>'
})

















new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

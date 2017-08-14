// 导入视图
import View from './view.vue'

import Vue from 'vue'

// 导入依赖vue的包
import Mint from 'mint-ui'
Vue.use(Mint)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入css
import 'mint-ui/lib/style.css'
// mui
import '../statics/mui/css/mui.min.css'
import '../statics/mui/css/icons-extra.css'
// my_icon
import '../statics/my_icon/iconfont.css'

// 导入组件
import Home from './components/home/home.vue'
import Logistics from './components/logistics/logistics.vue'

// 定义路由
const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    component: Home
}, {
    path: '/logistics',
    component: Logistics
}]

// 配置路由
const router = new VueRouter({
    routes // 缩写，相当于routes: routes
})

new Vue({
    el: '#app',
    router,
    render: function (createElement) {
        return createElement(View)
    }
})
import  Vue from 'vue'
import app from './App.vue'
//1.1导入路由
import VueRouter from 'vue-router'
//1.2安装路由
//导入mint-ui组件
//1.3导入rouder.js路由模块
import router from  './router.js'
Vue.use(VueRouter)
// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})
//导入mint-ui文件
// import { Header, Swipe, SwipeItem ,Lazyload} from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
// 安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//导入mui样式文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// 导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root = 'http://vue.studyit.io';
var vm = new Vue({
    el : '#app',
    render : c=>c(app),
    router //1.4 挂载路由对象到VM实例中
})
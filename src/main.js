import  Vue from 'vue'
import app from './App.vue'
//导入mint-ui组件
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);
import './lib/mui/css/mui.min.css'
var vm = new Vue({
    el : '#app',
    render : c=>c(app)
})
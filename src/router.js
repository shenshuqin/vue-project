import VueRouter from 'vue-router'

//导入对应路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcartContainer from './components/tabbar/ShopcarContainer.vue'
import newsList from './components/news/newsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/photoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [ //配置路由规则
    { path: '/', redirect: '/home' },
    {path:'/home' , component:HomeContainer},
    {path:'/home/newslist' , component:newsList},
    {path:'/member' , component:MemberContainer},
    {path:'/shopcart' , component:ShopcartContainer},
    {path:'/search' , component:SearchContainer},
    {path: '/home/newsinfo/:id', component: NewsInfo },
    {path: '/home/photolist', component: PhotoList },
    {path: '/home/photoinfo/:id', component: PhotoInfo },
    { path: '/home/goodslist', component: GoodsList }

  ],
  linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router
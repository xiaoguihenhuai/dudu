import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.axios = axios;

import Loading from '@/components/Loading'
Vue.component('Loading',Loading);

import { Button,Icon,Swipe,SwipeItem,IndexBar,IndexAnchor,Cell,NoticeBar,Search,Toast,Card,Divider,
  Grid, GridItem,Empty,Lazyload, Image as VanImage,Tabbar, TabbarItem,Col, Row} from 'vant';
Vue.use(Button).use(Icon).use(Swipe).use(SwipeItem).use(IndexBar).use(IndexAnchor).use(Cell);
Vue.use(NoticeBar).use(Search).use(Toast).use(Card).use(Divider).use(Grid).use(GridItem);
Vue.use(Empty).use(Lazyload).use(VanImage).use(Tabbar).use(TabbarItem).use(Col).use(Row);

Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})

import Scroller from '@/components/Scroller'
Vue.component('Scroller',Scroller);

Vue.config.productionTip = false  

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

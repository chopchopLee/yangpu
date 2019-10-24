import Vue from "vue";
import Shoplist from "./pages/shoplist";
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);


import "@/statics/styles/reset.less";
window.onload = () => {
  new Vue({
    el: "#app",
    components: { Shoplist },
    render: h => h(Shoplist)
  });
};

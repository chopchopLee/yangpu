import Vue from "vue";
import Detail from "./pages/detail";
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);


import "@/statics/styles/reset.less";
window.onload = () => {
  new Vue({
    el: "#app",
    components: { Detail },
    render: h => h(Detail)
  });
};

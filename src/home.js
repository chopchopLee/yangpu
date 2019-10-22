import Vue from "vue";
import Home from "./pages/home";
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);


import "@/statics/styles/reset.less";
window.onload = () => {
  new Vue({
    el: "#app",
    components: { Home },
    render: h => h(Home)
  });
};

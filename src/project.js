import Vue from "vue";
import Project from "./pages/project";
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);


import "@/statics/styles/reset.less";
window.onload = () => {
  new Vue({
    el: "#app",
    components: { Project },
    render: h => h(Project)
  });
};

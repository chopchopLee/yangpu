// import Vue from "vue";
import Dialog from "./index.vue";

let DialogComponent = Vue.extend(Dialog);
let instance;

let DialogPlugin = options => {
  if (!instance) {
    instance = new DialogComponent();
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
  }

  if (typeof options !== 'object') {
    console.error("dialog参数错误");
    return;
  }

  instance.hint = options.hint;
  instance.tip = options.tip;
  instance.title = options.title;
  instance.buttons = options.buttons;
  instance.type = options.type;
  instance.show = true;
};

DialogPlugin.close = () => {
  instance.show = false;
  instance = null;
};

DialogPlugin.install = Vue => {
  Vue.prototype.$dialog = DialogPlugin
};

export default DialogPlugin;

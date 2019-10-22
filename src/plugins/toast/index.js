// import Vue from "vue";
import Toast from "./index.vue";

let ToastComponent = Vue.extend(Toast);
let instance;
let timer = null;

let ToastPlugin = (options, success) => {
  if (!instance) {
    instance = new ToastComponent();
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
  }

  if (timer) {
    clearTimeout(timer);
    timer = null;
    instance.show = false;
    instance.message = "";
  }

  let time = 1000;
  instance.success = success;

  if (typeof options === "string") {
    instance.message = options;
  } else if (typeof options === "object") {
    let { message, time } = options;
    instance.message = message;
    time = time || 3000;
  } else {
    console.error("options可以是string或者object");
    return;
  }

  instance.show = true;
  timer = setTimeout(() => {
    instance.show = false;
    clearTimeout(timer);
    timer = null;
    instance.message = "";
  }, time);
};

ToastPlugin.close = () => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
    instance.show = false;
    instance.message = "";
  }
};

ToastPlugin.install = Vue => {
  Vue.prototype.$toast = ToastPlugin;
  Vue.prototype.$toast.success = message => Vue.prototype.$toast(message, true);
  Vue.prototype.$toast.fail = message => Vue.prototype.$toast(message, false);
};

/**
 * this.$toast(string | object)
 * 入参示例:
 * this.$toast({
 *   time: 3000
 *   message: ""
 * })
 */
export default ToastPlugin;

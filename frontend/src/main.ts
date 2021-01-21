import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "font-awesome/css/font-awesome.min.css";


import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faDiceD20, faCommentDots, faHatCowboy, faTeethOpen, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add the specific imported icons
library.add(faEye)
library.add(faDiceD20)
library.add(faCommentDots)
library.add(faHatCowboy)
library.add(faTeethOpen)
library.add(faLeaf)


// Enable the FontAwesomeIcon component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

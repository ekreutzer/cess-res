import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import Linear from './linear.vue'
import Login from './login.vue'
import Jumbotron from './jumbo.vue'
import Floater from './floatingAction.vue'
import Footer from './footer.vue'
import PoweredBy from './poweredBy.vue'
import DatePicker from './datePicker.vue'
import 'vuetify/dist/vuetify.min.css' 

Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
});
Vue.component('linearStepper', Linear);
Vue.component('appLogin', Login);
Vue.component('appJumbo', Jumbotron);
Vue.component('appFloater', Floater);
Vue.component('appFooter', Footer);
Vue.component('appPowered', PoweredBy);
Vue.component('appDate', DatePicker);

new Vue({
  el: '#app',
  render: h => h(App)
})

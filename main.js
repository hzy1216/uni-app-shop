import Vue from 'vue'
import App from './App'

import store from './store'


Vue.config.productionTip = false


Vue.prototype.$store = store 



App.mpType = 'app'

const msg = '' ;

Vue.prototype.$msg = msg ;



const app = new Vue({
		store,
		msg,
    ...App
})
app.$mount()

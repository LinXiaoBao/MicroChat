import Vue from 'vue'
import App from './App.vue'

import router from './router.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import main from './style/main.less'

require("font-awesome-webpack");

Vue.use(ElementUI)

new Vue({
 router,
 render: h => h(App)
}).$mount('#root')
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import main from './style/main.less'

import App from './App.vue'
import router from './router.js'
import store from './store/index.js'

require("font-awesome-webpack");

Vue.use(ElementUI)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#root')

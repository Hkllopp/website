import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/router'
import store from './store/vuex'
import i18n from './i18n/i18n'

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount('#app')

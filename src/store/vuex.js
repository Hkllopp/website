import Vue from 'vue'
import Vuex from 'vuex'
import i18n, { selectedLocale } from '@/i18n/i18n'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        locale: selectedLocale,
    },
    mutations: {
        updateLocale(state, newLocale) {
            state.locale = newLocale
        },
    },
    actions: {
        changeLocale({ commit }, newLocale) {
            i18n.locale = newLocale // important!
            commit('updateLocale', newLocale)
        },
    },
    getters: {
        getCurrentLocale: (state) => {
            return state.locale
        },
    },
    plugins: [],
})

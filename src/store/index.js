import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const modules = {}

// 动态加载每个module
const files = require.context('.', false, /\.js$/)
files.keys().forEach(key => {
    if (key !== './index.js') {
        const basename = key.match(/\/(.*)\.js/)[1]
        modules[basename] = files(key).default
    }
})

export default new Vuex.Store({
    modules
})
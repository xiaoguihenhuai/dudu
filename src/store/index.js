import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityName:'日本'
  },
  mutations: {
    setCityName(state,cityName){
      state.cityName = cityName;
    }
  },
  actions: {
  },
  modules: {
  }
})

import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'
import getters from './getter'
import Vue from 'vue'
Vue.use(Vuex);

let defaultAddress ='苏州安软集团';
try {
  if (localStorage.address){
    defaultAddress=localStorage.address
  }
}catch (e) {

}
const state={
   order:[],
   PaidOrder:[],
   address:defaultAddress,

};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

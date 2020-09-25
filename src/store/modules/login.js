const state = {
  loginShow: false,
  registerShow: false
}
const mutations = {
  SET_LOGIN_POP(state, show) {
    state.loginShow = show
  },
  SET_REGISTER_POP(state, show) {
    state.registerShow = show
  }
}
const actions = {
  // 设置name
  setLoginPop({ commit }, show) {
    commit('SET_LOGIN_POP', show)
  },
  setRegisterPop({ commit }, show) {
    commit('SET_REGISTER_POP', show)
  }
}
export default {
  state,
  mutations,
  actions
}

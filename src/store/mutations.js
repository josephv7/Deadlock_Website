export default {
  TOGGLE_LOADING (state) {
    state.callingAPI = !state.callingAPI
  },
  SET_USER (state, user) {
    state.user = user
  }
}

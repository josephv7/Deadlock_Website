export default {
  TOGGLE_LOADING (state) {
    state.callingAPI = !state.callingAPI
  },
  SET_USER (state, user) {
    state.user = user
  },
  SET_CURRENT_HASH (state, currentHash) {
    state.currentHash = currentHash
  },
  SET_PREVIOUS_HASH (state, previousHash) {
    state.previousHash = previousHash
  },
  CURRENT_LEVEL (state, currentLevel) {
    state.currentLevel = currentLevel
  },
  SET_PHNO (state, phno) {
    state.phno = phno
  },
  SET_LOGO (state, logo) {
    state.logo = logo
  }
}

import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      isMenuVisible: true,
      user: {
        name: 'Diego Galvão',
        email: 'diegohenriquegalvao@gmail.com'
      }
    }
  },
  mutations: {
    toggleMenu(state, isVisible) {
      if (isVisible === undefined) {
        state.isMenuVisible = !state.isMenuVisible
      } else {
        state.isMenuVisible = isVisible
      }

      console.log(state.isMenuVisible)
    }
  }
})

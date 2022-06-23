import { createStore } from 'vuex';

const store = createStore({
  state: {
    totalScore: 0,
  },
  mutations: {
    addScore(state, score) {
      state.totalScore += score;
    }
  }
});

export default store;
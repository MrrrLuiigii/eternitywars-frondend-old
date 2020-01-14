export default {
  state: {
    cards: null
  },
  mutations: {
    SAVE_CARDCOLLECTION(state, cards) {
      state.cards = cards;
    }
  },
  getters: {
    getCardCollection: state => {
      return state.cards;
    }
  },
  actions: {
    SaveCardCollection({ commit }, cards) {
      commit("SAVE_CARDCOLLECTION", cards);
    }
  }
};

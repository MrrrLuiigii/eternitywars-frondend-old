export default {
  state: {
    cardCollection: null
  },
  mutations: {
    SAVE_CARDCOLLECTION(state, cardCollection) {
      state.cardCollection = cardCollection;
    }
  },
  getters: {
    getCardCollection: state => {
      return state.cardCollection;
    }
  },
  actions: {
    SaveCardCollection({ commit }, cardCollection) {
      commit("SAVE_CARDCOLLECTION", cardCollection);
    }
  }
};

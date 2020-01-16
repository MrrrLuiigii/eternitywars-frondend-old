export default {
  state: {
    cards: null,
    selectedBuilderDeck: null
  },
  mutations: {
    SAVE_CARDCOLLECTION(state, cards) {
      state.cards = cards;
    },
    SAVE_SELECTEDDECK(state, deck) {
      state.selectedBuilderDeck = deck;
    }
  },
  getters: {
    getCardCollection: state => {
      return state.cards;
    },
    getSelectedBuilderDeck: state => {
      return state.selectedBuilderDeck;
    }
  },
  actions: {
    SaveCardCollection({ commit }, cards) {
      commit("SAVE_CARDCOLLECTION", cards);
    },
    SaveSelectedDeck({ commit }, deck) {
      commit("SAVE_SELECTEDDECK", deck);
    }
  }
};

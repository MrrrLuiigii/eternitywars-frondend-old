export default {
  state: {
    cards: null,
    selectedDeck: null
  },
  mutations: {
    SAVE_CARDCOLLECTION(state, cards) {
      state.cards = cards;
    },
    SAVE_SELECTEDDECK(state, deck) {
      state.selectedDeck = deck;
    }
  },
  getters: {
    getCardCollection: state => {
      return state.cards;
    },
    getSelectedDeck: state => {
      console.log("Get" + state.selectedDeck);
      return state.selectedDeck;
    }
  },
  actions: {
    SaveCardCollection({ commit }, cards) {
      commit("SAVE_CARDCOLLECTION", cards);
    },
    SaveSelectedDeck({ commit }, deck) {
      console.log("Save" + deck.cards.cards);
      commit("SAVE_SELECTEDDECK", deck);
    }
  }
};

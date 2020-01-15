export default {
    state: {
        game: {},
        selectedCardInHand: null,
        SelectedEmptyCardSlotOnYourField: null,
        SelectedTargetToAttack: null,
        SelectedHeroToAttack: null,
        SelectedCardSlotOnYourField: null
    },
    getters: {
        getGame: state => {
            return state.game;
        },
        getSelectedCardInHand: state => {
            return state.getSelectedCardInHand;
        },
        getSelectedEmptyCardSlotOnYourField: state => {
            return state.SelectedEmptyCardSlotOnYourField;
        },
        getSelectedCardSlotOnYourField: state => {
            return state.SelectedCardSlotOnYourField;
        },
        getSelectedTargetToAttack: state => {
            return state.SelectedTargetToAttack;
        },
        getSelectedHeroToAttack: state => {
            return state.SelectedHeroToAttack;
        },
    },
    mutations: {
        UPDATE_GAME(state, game){
            state.game = game
        },
        SET_GAME(state, game){
            state.game = game
        },
        SELECT_CARD_IN_HAND(state, data){
            state.selectedCardInHand = data
        },
        SELECTED_EMPTY_CARDSLOT_ON_YOUR_FIELD(state, data){
            state.SelectedEmptyCardSlotOnYourField = data
        },
        SELECTED_CARD_CARDSLOT_ON_YOUR_FIELD(state, data){
            state.SelectedCardSlotOnYourField = data
        },
        SELECTED_TARGET_TO_ATTACK(state, data){
            state.SelectedCardSlotOnYourField = data
        },
        SELECTED_HERO_TO_ATTACK(state, data){
            state.SelectedHeroToAttack = data
        },
    },
    actions: {
        UpdateGame({commit}, game){
            commit("UPDATE_GAME", game)
        },
        SetGame({commit}, game){
            commit("SET_GAME", game)
        },
        SelectCardInHand({commit}, data){
            commit("SELECT_CARD_IN_HAND", data)
        },
        SelectedEmptyCardSlotOnYourField({commit}, data){
            commit("SELECTED_EMPTY_CARDSLOT_ON_YOUR_FIELD", data)
        },
        SelectedCardSlotOnYourField({commit}, data){
            commit("SELECTED_CARD_CARDSLOT_ON_YOUR_FIELD", data)
        },
        SelectedTargetToAttack({commit}, data){
            commit("SELECTED_TARGET_TO_ATTACK", data)
        },
        SelectedHeroToAttack({commit}, data){
            commit("SELECTED_HERO_TO_ATTACK", data)
        },
    }
}
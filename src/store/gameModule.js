export default {
    state: {
        game: {},
    },
    getters: {
        getGame: state => {
            return state.game;
        }
    },
    mutations: {
        UPDATE_GAME(state, game){
            state.game = game
        },
        SET_GAME(state, game){
            state.game = game
        }
    },
    actions: {
        UpdateGame({commit}, game){
            commit("UPDATE_GAME", game)
        },
        SetGame({commit}, game){
            commit("SET_GAME", game)
        }
    }
}
export default {
    state: {
        lobbies: null,
    },
    mutations: {
    ADD_NEW_LOBBY(state, lobby) {
        state.lobbies.push(lobby);
        },
        SAVE_LOBBIES(state, lobbies) {
        console.log("log");
        state.lobbies = lobbies;
        console.log(state.lobbies);
        //TODO implement
        },

    },
    getters: {
    lobbies: state => {
        return state.lobbies;
        },
    },
    actions: {
    SaveLobbies({ commit }, lobbies) {
        commit("SAVE_LOBBIES", lobbies);
        },
        addNewLobby({ commit }, lobby) {
        commit("ADD_NEW_LOBBY", lobby);
        },
    }
}
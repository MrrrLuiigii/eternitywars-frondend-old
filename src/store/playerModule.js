export default {
    state: {
        player: null,
    },
    mutations: {
        SAFE_PLAYER_INFO(state, player) {
            state.player = player;
            console.log(state.player);
          },
    },
    getters: {

    },
    actions: {
        SavePlayerInfo({ commit }, player) {
            commit("SAFE_PLAYER_INFO", player);
          },
    }
}
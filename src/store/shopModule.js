export default {
    state: {
        pack: null,
    },
    getters: {
        getPack: state =>{
            return state.pack;
        }
    },
    mutations: {
     ADD_PACK(state, pack){
         state.pack = pack
     }
    },
    actions: {
        AddPack({commit}, pack){
            commit("ADD_PACK", pack)
        }
    }
}
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  state: {
    player: null,
    userService: null,
    lobbyService: null,
    lobbies: null,
    friends: [
      {
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRHVBpa8tcNHQhs_Rpqf5zpgsqilYxePNVvlxjb8qJzw6-_LWMvw&s",
        username: "friend1",
        active: true,
        online: false
      },
      {
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRHVBpa8tcNHQhs_Rpqf5zpgsqilYxePNVvlxjb8qJzw6-_LWMvw&s",
        username: "friend2",
        active: false,
        online: true
      }
    ],
    pendingFriends: [
      {
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRHVBpa8tcNHQhs_Rpqf5zpgsqilYxePNVvlxjb8qJzw6-_LWMvw&s",
        username: "PendingFriend1"
      },
      {
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRHVBpa8tcNHQhs_Rpqf5zpgsqilYxePNVvlxjb8qJzw6-_LWMvw&s",
        username: "PendingFriend2"
      }
    ]
  },
  getters: {
    userServiceIP: state => {
      return state.userService;
    },
    lobbyServiceIP: state => {
      return state.lobbyService;
    },
    lobbies: state => {
      return state.lobbies;
    },
    onlinefriends: state => {
      return state.friends.filter(friends => {
        return friends.online == true;
      });
    },
    offlinefriends: state => {
      return state.friends.filter(friends => {
        return friends.online == false;
      });
    },
    pendingRequests: state => {
      return state.pendingFriends;
    }
  },
  mutations: {
    SAFE_PLAYER_INFO(state, player) {
      state.player = player;
      console.log(state.player);
    },
    SAFE_USER_SERVICE(state, service) {
      state.userService = service;
    },
    SAFE_LOBBY_SERVICE(state, service) {
      state.lobbyService = service;
    },
    ADD_NEW_LOBBY(state, lobby) {
      state.lobbies.push(lobby);
    },
    SEND_FRIEND_REQUEST(state, friendname) {
      state.friends.push({
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRHVBpa8tcNHQhs_Rpqf5zpgsqilYxePNVvlxjb8qJzw6-_LWMvw&s",
        username: friendname,
        active: true,
        online: true
      });
    },
    DELETE_FRIEND_REQUEST(state, friendrequest) {
      let index = state.pendingFriends.indexof(friendrequest);
      state.pendingFriends.splice(index, 1);
    },
    ACCEPT_FRIEND_REQUEST(state, friendrequest) {
      console.log(state);
      console.log(friendrequest);
      //TODO implement
    },
    DENY_FRIEND_REQUEST(state, friendrequest) {
      console.log(state);
      console.log(friendrequest);
      //TODO implement
    },
    BLOCK_FRIEND_REQUEST(state, friendrequest) {
      console.log(state);
      console.log(friendrequest);
      //TODO implement
    },
    SAVE_LOBBIES(state, lobbies) {
      console.log("log");
      state.lobbies = lobbies;
      console.log(state.lobbies);
      //TODO implement
    }
  },
  actions: {
    SavePlayerInfo({ commit }, player) {
      commit("SAFE_PLAYER_INFO", player);
    },
    SaveUserService({ commit }, service) {
      commit("SAFE_USER_SERVICE", service);
    },
    SaveLobbyService({ commit }, service) {
      commit("SAFE_LOBBY_SERVICE", service);
    },
    SaveLobbies({ commit }, lobbies) {
      commit("SAVE_LOBBIES", lobbies);
    },
    addNewLobby({ commit }, lobby) {
      commit("ADD_NEW_LOBBY", lobby);
    },
    sendFriendRequest({ commit }, friendname) {
      commit("SEND_FRIEND_REQUEST", friendname);
    },
    acceptFriendRequest({ commit }, friendRequest) {
      commit("DELETE_FRIEND_REQUEST", friendRequest);
    },
    denyFriendRequest({ commit }, friendRequest) {
      commit("DELETE_FRIEND_REQUEST", friendRequest);
    },
    blockFriendRequest({ commit }, friendRequest) {
      commit("DELETE_FRIEND_REQUEST", friendRequest);
    }
  }
});

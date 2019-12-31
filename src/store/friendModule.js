export default {
    state: {
        friends: []
    },
    mutations: {
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
      SAVE_FRIEND_DATA(state, friendData) {
        state.friends = friendData
        //TODO implement
      },
    },
    getters: {
        onlinefriends: state => {
            return state.friends.filter(friends => {
              return friends.accountStatus == "Online";
            });
        },
        offlinefriends: state => {
            return state.friends.filter(friends => {
              return friends.accountStatus == "Offline";
            });
        },
        inLobbyFriends: state => {
          return state.friends.filter(friends => {
            return friends.accountStatus == "InLobby";
          });
      },
      inGameFriends: state => {
        return state.friends.filter(friends => {
          return friends.accountStatus == "inGame";
        });
    },
        pendingRequests: state => {
          return state.friends.filter(friends => {
            return friends.friendStatus == "pending";
          });
        },
        getfriends: state => {
          return state.friends;
      }
      },
    actions: {
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
          },
          SaveFriendData({ commit }, friendData) {
            commit("SAVE_FRIEND_DATA", friendData);
          }
    }
}
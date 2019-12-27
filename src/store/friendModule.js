export default {
    state: {
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
    },
    getters: {
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
          }
    }
}
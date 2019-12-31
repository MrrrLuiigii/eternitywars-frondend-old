<template>
  <div v-if="pendingRequests == []">

        <v-list subheader dense>
      <v-subheader>Pending Friend Requests</v-subheader>
        <v-list-item v-for="(requests, index) in pendingRequests" :key="index" >
            <v-list-item-avatar size="36">
            <v-img :src="requests.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
            <v-list-item-title v-text="requests.username"></v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon @click="acceptUser(requests)">
            <v-icon color="teal darken-2">mdi-account-check</v-icon>
            </v-list-item-icon>
            <v-list-item-icon @click="denyUser(requests)">
            <v-icon color="red accent-4">mdi-account-off</v-icon>
            </v-list-item-icon>
            <v-list-item-icon @click="blockUser(requests)">
            <v-icon color="red darken-4">mdi-block-helper</v-icon>
            </v-list-item-icon>
        </v-list-item>
      </v-list>
  </div>    
</template>

<script>
export default {
    name:"Friendrequest",
    computed: {
    pendingRequests() {
        return this.$store.getters.pendingRequests;
        },
    },
    methods:{
      acceptUser(requests){
        console.log(requests)
        this.$store.dispatch('acceptFriendRequest', requests);
      },
      denyUser(requests){
        console.log(requests)
        this.$store.dispatch('denyFriendRequest', requests);
      },
      blockUser(requests){
        console.log(requests)
        this.$store.dispatch('blockFriendRequest', requests);
      },
    }
}
</script>

<style>

</style>
<template>
  <div>
    <v-list subheader dense>
      <v-subheader>Online Friends</v-subheader>
      <v-list-item
        v-for="(friend, index) in onlineFriends"
        :key="index"
        @click="startChat(friend)"
      >
        <Friendcard :friend="friend"></Friendcard>
      </v-list-item>
    </v-list>
    <v-list subheader dense>
      <v-subheader>Inlobby Friends</v-subheader>
      <v-list-item
        v-for="(friend, index) in inLobbyFriends"
        :key="index"
        @click="startChat(friend)"
      >
        <Friendcard :friend="friend"></Friendcard>
      </v-list-item>
    </v-list>
    <v-list subheader dense>
      <v-subheader>InGame Friends</v-subheader>
      <v-list-item
        v-for="(friend, index) in inGameFriends"
        :key="index"
        @click="startChat(friend)"
      >
        <Friendcard :friend="friend"></Friendcard>
      </v-list-item>
    </v-list>
    <v-list subheader dense>
      <v-subheader>Offline Friends</v-subheader>
      <v-list-item
        v-for="(friend, index) in offlineFriends"
        :key="index"
        @click="startChat(friend)"
      >
        <Friendcard :friend="friend"></Friendcard>
      </v-list-item>
    </v-list>
    <v-list subheader dense>
      <v-subheader>Blocked Users</v-subheader>
      <v-list-item v-for="(friend, index) in blockedUsers" :key="index">
        <Friendcard :friend="friend"></Friendcard>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import Friendcard from "./Friendcard";

export default {
  name: "Friendlist",
  components: {
    Friendcard
  },
  data() {
    return {
      wsMessage: {
        Subject: null,
        Action: null,
        Content: null,
        Token: null
      }
    };
  },
  methods: {
    startChat(friend) {
      this.$store.dispatch("addChat", friend);
    }
  },
  computed: {
    onlineFriends() {
      return this.$store.getters.onlinefriends;
    },
    inLobbyFriends() {
      return this.$store.getters.inLobbyFriends;
    },
    inGameFriends() {
      return this.$store.getters.inGameFriends;
    },
    offlineFriends() {
      return this.$store.getters.offlinefriends;
    },
    blockedUsers() {
      return this.$store.getters.blockedUsers;
    }
  }
};
</script>

<style></style>

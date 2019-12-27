<template>
  <div>
    <div v-for="(lobby, index) in lobbies" :key="index" :lobby="lobby">
      <lobby :lobby="lobby"></lobby>
      <button @click="JoinLobby(lobby)">join</button>
    </div>
  </div>
</template>

<script>
import lobby from "./lobby";

import axios from "axios";

export default {
  name: "lobbylist",
  components: {
    lobby
  },
  computed: {
    lobbies() {
      console.log(this.$store.getters.lobbies)
      return this.$store.getters.lobbies;
    }
  },
  async mounted() {
    console.log(this.$auth.getTokenSilently());
    console.log("test");
    this.LoadLobbies(this.$store.getters.lobbyServiceIP);
  },
  methods: {
    async LoadLobbies() {
      console.log("test2");
      axios
        .request({
          url: "api/private/lobby/get",
          baseURL: "",
          method: "get",
          headers: {
            Authorization: "Bearer " + (await this.$auth.getTokenSilently())
          }
        })
        .then(response => {
          console.log(response.data);
          this.$store.dispatch("SaveLobbies", response.data);
        });
    },
    JoinLobby(lobby) {
      console.log("test4");
      this.$router.push({
        name: "gamelobby",
        params: { Lobby: lobby }
      });
    }
  }
};
</script>

<style></style>

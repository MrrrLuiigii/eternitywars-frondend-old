<template>
  <div>
    <div>{{ this.lobby.id }}</div>
    <div>{{ this.lobby.name }}</div>
    <div>{{ this.lobby.description }}</div>
    <button @click="JoinLobby(this.datalobby)">join</button>
  </div>
</template>

<script>
export default {
  name: "lobby",
  props: {
    lobby: {
      type: Object,
      required: true,
    }
  },
data() {
  return {
    datalobby: this.lobby,
      wsMessage: {
        Subject: null,
        Action: null,
        Content: null,
        Token: null
      },
    }
 },
 methods: {
   joinLobby(a){
     console.log(a)
     console.log(this.$store.getters.getLobbyByObject(this.datalobby))
   }
 }
};
</script>

<style></style>

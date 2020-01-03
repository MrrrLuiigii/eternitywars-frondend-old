<template>
  <div>
    <div v-for="(lobby, index) in getlobbies" :key="index" :lobby="lobby">
      <lobby :lobby="lobby"></lobby>
    </div>
  </div>
</template>

<script>
import lobby from "./lobby";

export default {
  name: "lobbylist",
  components: {
    lobby
  },
     data() {
    return {
            wsMessage: {
              Subject: null,
              Action: null,
              Content: null,
              Token: null
        },
        Chatcontainer: null
    };
  },
  computed: {
    getlobbies(){
      return this.$store.getters.getLobbies;
    }
  },
  created(){
    this.$options.sockets.onmessage = (data) => this.messageReceived(data)
    this.loadNewLobbies();
    
  },
  methods: {
    async loadNewLobbies(){
      this.wsMessage.Subject = "LOBBY"
      this.wsMessage.Action = "GETLOBBIES"
      const cont = this.$store.getters.getPlayerInfo
      this.wsMessage.Content = cont
      this.wsMessage.Token = await this.$auth.getTokenSilently()
      this.$socket.send(JSON.stringify(this.wsMessage))
      console.log(this.wsMessage)
    },
    joinLobby(a){
      this.$router.push({
        name: "gamelobby",
        params: { Lobby: a }
      });
    },
    messageReceived(data){
      console.log(data.data)
      const jsonData = JSON.parse(data.data)
      switch(jsonData.action){
        case "GETLOBBIES":
        this.$store.dispatch('SaveLobbies',jsonData.content.lobbies)
        console.log(jsonData.content)
      switch(jsonData.action){
        case "JOINLOBBY":
        this.joinLobby(jsonData.content)
      }
      }
    }
  }
};
</script>

<style></style>

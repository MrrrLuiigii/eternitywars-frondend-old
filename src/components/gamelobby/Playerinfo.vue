<template>
  <div class="playerInfoPanelContainer">
    <div class="artPanel playerInfoPanel" v-if="playerIndex === 0"> 
      <div class="playerName">{{joinedLobby.playerOne.username}}</div>
      <div class="playerStatus">{{joinedLobby.playerOne.lobbyPlayerStatus}}</div>
    </div>
    <div class="artPanel playerInfoPanel" v-else-if="joinedLobby.playerTwo !== null"> 
      <div class="playerName">{{joinedLobby.playerTwo.username}}</div>
      <div class="playerStatus">{{joinedLobby.playerTwo.lobbyPlayerStatus}}</div>        
    </div>
    <div class="artPanel playerInfoPanel" v-else> 
      <small class="waitingLabel">Waiting for second player...</small>
    </div>
  </div>
</template>

<script>
export default {
 name: "Playerinfo",
 props:{
     playerIndex: Number,
 },
   computed:{
    joinedLobby(){
     return this.$store.getters.getJoinedlobby;
    }
  },
}
</script>

<style>
  .playerName {
    font-size: 30px;
    padding-top: 5.5vh;
  }

  .waitingLabel {
    padding-top: 6vh;
  }

  .playerInfoPanel {
    margin: 1vh 2vw;
  }

  .playerInfoPanelContainer {
    margin-top: 5vh;
  }
</style>
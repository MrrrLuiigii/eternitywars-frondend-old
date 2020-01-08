<template>
  <div>
    <div v-if="getSelectedDeck !== null">
      Chosen deck is: {{getSelectedDeck.name}}
    </div>
    <div v-else>
      Choose a deck to play with!
    </div>
    <div class="deckSlotContainer">
      <GameLobbyDeckSlots class="leftDeckSlot" v-bind:Index="0"/>
      <GameLobbyDeckSlots class="rightDeckSlot" v-bind:Index="1"/>
      <GameLobbyDeckSlots class="leftDeckSlot" v-bind:Index="2"/>
      <GameLobbyDeckSlots class="rightDeckSlot" v-bind:Index="3"/>
      <GameLobbyDeckSlots class="leftDeckSlot" v-bind:Index="4"/>
      <GameLobbyDeckSlots class="rightDeckSlot" v-bind:Index="5"/>
    </div>      
  </div>
</template>

<script>
import GameLobbyDeckSlots from "@/components/gamelobby/GameLobbyDeckSlots";
export default {
name:"GameLobbyDecks",
components:{
    GameLobbyDeckSlots,
    },
computed: {
    getSelectedDeck(){
      return this.$store.getters.getSelectedDeck;
    }
  },
}
</script>

<style>
  .leftDeckSlot {
    float: left;
    margin: 1vh 2vw;
  }

  .rightDeckSlot {
    float: right;
    margin: 1vh 2vw;
  }

  .deckSlotContainer {
    width: 100%;
    height: 100%;
    margin: 5vh 0;
  }
</style>
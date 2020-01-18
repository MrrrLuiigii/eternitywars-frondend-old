<template>
  <div v-if="gameState !== null">
    <div class="winnerContainer" v-if="gameState.connectedPlayers[0].hero.hp <= 0">
      <div class="winnerPlayer">
        <img class="winnerCrown" src="../assets/postgame/crown.png" />
        <h1 class="winnerName">{{gameState.connectedPlayers[1].username}}</h1>
      <div class="winnerInfoContainer" >
        <div class="winnerGoldContainer">
          <img class="winnerGold" src="../assets/postgame/winnerGold.png" />
          <p class="playerInfo">As a reward your opponent gained 25 gold!</p>
        </div>
        <div class="winnerDeck">
          WinnerDeck
            <div
        v-for="(card, index) in gameState.connectedPlayers[1].deck.cards.cards"
        :key="index"
        :card="card"
      >
        <deckbuilderCard :card="card" />
      </div>
    </div>
  </div>
      </div>
    </div>
       <div class="winnerContainer" v-else>
      <div class="winnerPlayer">
        <img class="winnerCrown" src="../assets/postgame/crown.png" />
        <h1 class="winnerName">{{gameState.connectedPlayers[0].username}}</h1>
      <div class="winnerInfoContainer" >
        <div class="winnerGoldContainer">
          <img class="winnerGold" src="../assets/postgame/winnerGold.png" />
          <p class="playerInfo">As a reward you gained 25 gold!</p>
        </div>
        <div class="winnerDeck">
          WinnerDeck
            <div
        v-for="(card, index) in gameState.connectedPlayers[0].deck.cards.cards"
        :key="index"
        :card="card"
      >
        <deckbuilderCard :card="card" />
      </div>
        </div>
      </div>
    </div>
  </div>

    <div class="loserContainer" v-if="gameState.connectedPlayers[0].hero.hp <= 0">
      <h1 class="loserName">{{gameState.connectedPlayers[0].username}}</h1>
      <img class="loserGold" src="../assets/postgame/loserGold.png" />
      <p class="playerInfo">
        Here is a small consolation for you loss...<br />You gained 5 gold!
      </p>
      <div class="loserDeck">
        LoserDeck
          <div
        v-for="(card, index) in gameState.connectedPlayers[0].deck.cards.cards"
        :key="index"
        :card="card"
      >
        <deckbuilderCard :card="card" />
      </div>
      </div>
    </div>
    <div class="loserContainer" v-else>
      <h1 class="loserName">{{gameState.connectedPlayers[1].username}}</h1>
      <img class="loserGold" src="../assets/postgame/loserGold.png" />
      <p class="playerInfo">
        Your opponent got a small consolation for his loss...<br />He gained 5 gold!
      </p>
      <div class="loserDeck">
        LoserDeck
          <div
        v-for="(card, index) in gameState.connectedPlayers[1].deck.cards.cards"
        :key="index"
        :card="card"
      >
        <deckbuilderCard :card="card" />
      </div>
      </div>
    </div>
    <homebutton v-on:click="resetGameStore"/>
  </div>
  <div v-else>
    ERROR <br/> NO POST-GAME STATE FOUND
    <homebutton v-on:click="resetGameStore"/>
  </div>
</template>

<script>
import homebutton from "@/components/buttons/homebutton";
import deckbuilderCard from "@/components/deckbuilder/deckbuilderCard"
export default {
  name: "postGame",
  components: {
    homebutton,
    deckbuilderCard
  },
  props: ["game"],
  data() {
    return {
      winner: null,
      loser: null,
      wsMessage: {
        Subject: null,
        Action: null,
        Content: null,
        Token: null
      }
    };
  },
  methods:{
    resetGameStore(){
      this.$store.dispatch('UpdateGame', null)
    }
  },
        computed: {
    gameState() {
      return this.$store.getters.getGame;
    },
      },
};
</script>

<style>
.playerInfo {
  font-size: 25px;
}

.winnerInfoContainer {
    justify-content: center;
    display: flex;
}

.winnerGoldContainer {
    margin: 10vh 3vw 0 0;
    float: left;
}

.winnerDeck {
  width: 25vw;
  height: 50vh;
  background-color: yellow;

  margin: 2vh 0 0 3vw;

  float: right;
}

.winnerCrown {
  transform: scale(1.5);
}

.winnerGold {
  transform: scale(1);
  margin: -2vh 0;
}

.winnerName {
  font-size: 80px;
}

.loserGold {
  height: 80px;
  width: 200px;
}

.loserName {
  font-size: 50px;
}

.loserDeck {
  width: 25vw;
  height: 50vh;
  background-color: yellow;
  
  margin: auto;
  margin-top: 5.5vh;
}

.winnerContainer {
  margin: 5vh 0 0 3vw;
  width: 60vw;
  height: 85vh;

  background-color: green;

  justify-content: center;
  float: left;
}

.loserContainer {
  margin: 5vh 3vw 0 0;
  padding: 3vh 1vw 3vh 1vw;

  width: 30vw;
  height: 85vh;
  background-color: red;

  justify-content: center;
  float: right;
}
</style>

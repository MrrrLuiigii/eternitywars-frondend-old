<template>
  <div v-if="gameState !== null">
    <div
      class="winnerContainer"
      v-if="gameState.connectedPlayers[0].hero.hp <= 0"
    >
      <div class="winnerInfoContainer">
        <img class="winnerCrown" src="../assets/postgame/crown.png" />
        <h1 class="winnerName">
          {{ gameState.connectedPlayers[1].username }}
        </h1>
        <div class="winnerGoldContainer">
          <img class="winnerGold" src="../assets/postgame/winnerGold.png" />
          <p class="playerInfo">As a reward your opponent gained 25 gold!</p>
        </div>
      </div>

      <div class="winnerDeckContainer">
        <div class="winnerDeckBorder">
          <div class="winnerDeckName">
            {{ gameState.connectedPlayers[1].deck.name }}
          </div>
          <div class="winnerDeck">
            <div
              v-for="(card, index) in gameState.connectedPlayers[1].deck.cards
                .cards"
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
      <div class="winnerInfoContainer">
        <img class="winnerCrown" src="../assets/postgame/crown.png" />
        <h1 class="winnerName">
          {{ gameState.connectedPlayers[0].username }}
        </h1>
        <div class="winnerGoldContainer">
          <img class="winnerGold" src="../assets/postgame/winnerGold.png" />
          <p class="playerInfo">As a reward your opponent gained 25 gold!</p>
        </div>
      </div>

      <div class="winnerDeckContainer">
        <div class="winnerDeckBorder">
          <div class="winnerDeckName">
            {{ gameState.connectedPlayers[1].deck.name }}
          </div>
          <div class="winnerDeck">
            <div
              v-for="(card, index) in gameState.connectedPlayers[1].deck.cards
                .cards"
              :key="index"
              :card="card"
            >
              <deckbuilderCard :card="card" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="loserContainer"
      v-if="gameState.connectedPlayers[0].hero.hp <= 0"
    >
      <div class="loserInfoContainer">
        <h1 class="loserName">
          {{ gameState.connectedPlayers[0].username }}
        </h1>
        <div class="loserGoldContainer">
          <img class="loserGold" src="../assets/postgame/loserGold.png" />
          <p class="playerInfo">
            Her is a small consolation for your loss...<br />You gained 5 gold!
          </p>
        </div>
      </div>

      <div class="loserDeckContainer">
        <div class="loserDeckBorder">
          <div class="loserDeckName">
            {{ gameState.connectedPlayers[0].deck.name }}
          </div>
          <div class="loserDeck">
            <div
              v-for="(card, index) in gameState.connectedPlayers[0].deck.cards
                .cards"
              :key="index"
              :card="card"
            >
              <deckbuilderCard :card="card" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="loserContainer" v-else>
      <div class="loserInfoContainer">
        <h1 class="loserName">
          {{ gameState.connectedPlayers[1].username }}
        </h1>
        <div class="loserGoldContainer">
          <img class="loserGold" src="../assets/postgame/winnerGold.png" />
          <p class="playerInfo">
            Your opponent got a small consolation for his loss...<br />He gained
            5 gold!
          </p>
        </div>
      </div>

      <div class="loserDeckContainer">
        <div class="loserDeckBorder">
          <div class="loserDeckName">
            {{ gameState.connectedPlayers[1].deck.name }}
          </div>
          <div class="loserDeck">
            <div
              v-for="(card, index) in gameState.connectedPlayers[1].deck.cards
                .cards"
              :key="index"
              :card="card"
            >
              <deckbuilderCard :card="card" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <homebutton v-on:click="resetGameStore" />
  </div>
  <div v-else>
    ERROR <br />
    NO POST-GAME STATE FOUND
    <homebutton v-on:click="resetGameStore" />
  </div>
</template>

<script>
import homebutton from "@/components/buttons/homebutton";
import deckbuilderCard from "@/components/deckbuilder/deckbuilderCard";
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
  methods: {
    resetGameStore() {
      this.$store.dispatch("UpdateGame", null);
    }
  },
  computed: {
    gameState() {
      return this.$store.getters.getGame;
    }
  }
};
</script>

<style>
.playerInfo {
  font-size: 25px;
}

.winnerContainer {
  margin: 5vh 0 0 3vw;
  width: 60vw;
  height: 85vh;

  border: 20px;
  border-color: #362630;
  border-style: groove ridge ridge groove;

  background-color: #a5b495;

  justify-content: center;
  float: left;
}

.winnerInfoContainer {
  height: 100%;
  width: 50%;

  justify-content: center;
  float: left;
}

.winnerCrown {
  margin-top: 6vh;
  transform: scale(1.2);
}

.winnerName {
  font-size: 80px;
  margin-bottom: 5vh;
}

.winnerDeckContainer {
  width: 50%;
  height: 100%;

  justify-content: center;
  float: right;
}

.winnerDeckBorder {
  height: 90%;
  width: 90%;

  margin: 5vh 0 0 5%;

  border: 20px;
  border-color: #362630;
  border-style: ridge groove groove ridge;
}

.winnerDeckName {
  font-size: 30px;
  margin: 2vh 0 2vh 0;
}

.winnerDeck {
  width: 22.5vw;
  height: 57.5vh;

  margin: auto;
  padding: 1vh 1vw;

  overflow: auto;
}

.winnerGoldContainer {
  width: 100%;
  margin-top: 5vh;
}

.winnerGold {
  margin-bottom: -3vh;
}

.loserContainer {
  margin: 5vh 3vw 0 0;

  width: 30vw;
  height: 85vh;

  border: 20px;
  border-color: #362630;
  border-style: groove ridge ridge groove;

  background-color: #a5b495;

  justify-content: center;
  float: right;
}

.loserGold {
  height: 80px;
  width: 200px;
}

.loserName {
  font-size: 50px;
  margin: 2vh 0;
}

.loserDeckContainer {
  width: 30vw;

  margin-top: 5vh;

  justify-content: center;
}

.loserDeckBorder {
  width: 85%;
  height: 50vh;

  margin-left: 3.75%;

  border: 20px;
  border-color: #362630;
  border-style: ridge groove groove ridge;
}

.loserDeckName {
  font-size: 30px;
  margin: 1vh 0;
}

.loserDeck {
  width: 20vw;
  height: 37.5vh;

  margin: auto;

  overflow: auto;
}
</style>

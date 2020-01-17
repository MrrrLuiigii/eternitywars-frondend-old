<template>
  <div>
    <div class="winnerContainer">
      <div class="winnerPlayer">
        <img class="winnerCrown" src="../assets/postgame/crown.png" />
        <h1 class="winnerName">WinnerName</h1>
      </div>
      <div class="winnerInfoContainer">
        <div class="winnerGoldContainer">
          <img class="winnerGold" src="../assets/postgame/winnerGold.png" />
          <p class="playerInfo">As a reward you gain 25 gold!</p>
        </div>
        <div class="winnerDeck">
          WinnerDeck
        </div>
      </div>
    </div>
    <div class="loserContainer">
      <h1 class="loserName">LoserName</h1>
      <img class="loserGold" src="../assets/postgame/loserGold.png" />
      <p class="playerInfo">
        Here is a small consolation for you loss...<br />You gain 5 gold!
      </p>
      <div class="loserDeck">
        LoserDeck
      </div>
    </div>
    <homebutton />
  </div>
</template>

<script>
import homebutton from "@/components/buttons/homebutton";
export default {
  name: "postGame",
  components: {
    homebutton
  },
  props: ["game"],
  created: {},
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
  }
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

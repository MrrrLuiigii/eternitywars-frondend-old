<template>
  <div class="packsContainer">
    <div class="playerName">
      {{ this.getPlayerInfo.username }}
    </div>
    <div class="playerGoldContainer">
      <p>Your gold amount is: {{ this.getPlayerInfo.gold }}</p>
      <img
        v-if="this.getPlayerInfo.gold < 100"
        class="smallGold"
        src="../../assets/postgame/smallGold.png"
      />
      <img
        v-else-if="this.getPlayerInfo.gold < 500"
        class="mediumGold"
        src="../../assets/postgame/loserGold.png"
      />
      <img v-else class="bigGold" src="../../assets/postgame/winnerGold.png" />
    </div>
    <div class="playerPackAmountContainer">
      <div v-if="this.getPlayerInfo.packAmount !== null">
        Aquired packs: {{ this.getPlayerInfo.packAmount }}
      </div>
      <div v-else>Aquired packs: 0</div>
      <img class="packBox" src="../../assets/postgame/lootbox.png" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getPlayerInfo() {
      return this.$store.getters.getPlayerInfo;
    }
  }
};
</script>

<style>
.packsContainer {
  width: 50vw;
  height: 25vh;

  margin-top: 10vh;
}

.playerName {
  padding-top: 5vh;
  font-size: 60px;
}

.playerGoldContainer {
  width: 50%;
  height: 100%;

  padding: 0 5vw;

  justify-content: center;
  text-align: center;

  float: left;
}

.smallGold {
  margin-top: -10vh;
  transform: scale(0.1);
}

.mediumGold {
  margin: -36.5vh 0 0 -36.5vw;
  transform: scale(0.1);
}

.bigGold {
  margin: -9vh 0 0 -3vw;
  transform: scale(0.5);
}

.packBox {
  margin: -16vh 0 0 -2vw;
  transform: scale(0.3);
}

.playerPackAmountContainer {
  height: 100%;
  width: 50%;

  float: right;
}
</style>

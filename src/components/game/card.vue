<template>
  <div class="card" v-if="inHand">
    <div class="cardName">
      {{ this.card.name }}
    </div>

    <div class="blueMana">
      {{ this.card.blue_mana }}
    </div>

    <div class="deathEssence">
      {{ this.card.death_essence }}
    </div>

    <div class="attack">
      {{ this.card.attack }}
    </div>

    <div class="health">
      {{ this.card.health }}
    </div>
  </div>

  <div class="card" v-else>
    <div class="cardName">
      {{ this.card.name }}
    </div>

    <div class="blueMana">
      {{ this.card.blue_mana }}
    </div>

    <div class="deathEssence">
      {{ this.card.death_essence }}
    </div>

    <div class="attack">
      {{ this.card.attack }}
    </div>

    <div class="health">
      {{ this.card.health }}
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    card: Object,
    onField: Boolean,
    inHand: Boolean
  },
  data() {
    return {};
  }
};
</script>

<style>
.card {
  z-index: 99;

  background-color: transparent;
  background-image: url("../../assets/game/card/card.png");
  background-size: 100% 100%;

  border: none;

  justify-content: center;

  margin: 5px 0 5px 0;
  width: 5vw;
  height: 12vh;
}

.cardName {
  color: white;

  width: 70px;
  height: 70px;
  word-wrap: break-word;
  margin: auto;

  font-size: 15px;

  text-align: center;
}

.attack {
  border-radius: 100%;

  color: white;

  position: absolute;
  bottom: 0.75vh;
  left: 0.3vw;

  font-weight: bold;
  font-size: 15px;

  text-align: center;

  width: 20px;
  height: 20px;
}

.health {
  border-radius: 100%;

  color: white;

  position: absolute;
  bottom: 0.9vh;
  right: 0.05vw;

  font-weight: bold;
  font-size: 15px;

  text-align: center;

  width: 20px;
  height: 20px;
}

.blueMana {
  border-radius: 100%;

  color: white;

  position: absolute;
  top: 0.1vh;
  left: 0.24vw;

  font-weight: bold;
  font-size: 15px;

  text-align: center;

  width: 20px;
  height: 20px;
}

.deathEssence {
  border-radius: 100%;

  color: white;

  position: absolute;
  top: 0.1vh;
  right: 0.05vw;

  font-weight: bold;
  font-size: 15px;

  text-align: center;

  width: 20px;
  height: 20px;
}
</style>

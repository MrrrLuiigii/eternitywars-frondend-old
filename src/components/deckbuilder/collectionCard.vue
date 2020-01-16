<template>
  <div class="card">
    <div v-on:click="select()">
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
  </div>
</template>

<script>
export default {
  name: "collectionCard",
  props: {
    card: Object
  },
  data() {
    return {};
  },
  methods: {
    deselect() {
      return null;
    },
    select() {
      return null;
    }
  }
};
</script>

<style>
.card {
  z-index: 99;

  position: absolute;

  background-color: transparent;
  background-image: url("../../assets/game/card/card.png");
  background-size: 100% 100%;

  border: none;

  margin: 0;
  width: 5vw;
  height: 12vh;
}

.cardName {
  color: white;
  margin: auto;

  text-align: center;
}

.attack {
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;

  margin-left: -0.25vw;
  margin-bottom: 0.2vh;

  font-weight: bold;

  width: 25px;
  height: 25px;
}

.health {
  color: white;
  position: absolute;
  bottom: 0;
  right: 0;

  margin-right: -0.15vw;
  margin-bottom: 0.2vh;

  font-weight: bold;

  width: 25px;
  height: 25px;
}

.blueMana {
  color: white;
  position: absolute;
  top: 0;
  left: 0;

  margin-left: -0.25vw;
  margin-top: -0.35vh;

  font-weight: bold;

  border-radius: 50%;
  width: 25px;
  height: 25px;
}

.deathEssence {
  color: white;
  position: absolute;
  top: 0;
  right: 0;

  margin-left: -0.25vw;
  margin-top: -0.35vh;

  font-weight: bold;

  border-radius: 50%;
  width: 25px;
  height: 25px;
}
</style>

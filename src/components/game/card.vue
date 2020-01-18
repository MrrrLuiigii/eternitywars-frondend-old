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

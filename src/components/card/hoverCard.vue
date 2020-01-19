<template>
  <div class="card">
    <div>
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
    return {
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

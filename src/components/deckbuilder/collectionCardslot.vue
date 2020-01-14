<template>
  <div class="cardSlot">
    <card :card="card" />
  </div>
</template>

<script>
import card from "@/components/deckbuilder/collectionCard.vue";
export default {
  name: "collectionCardslot",
  components: {
    card
  },
  props: {
    card: Object
  },
  data() {
    return {};
  }
};
</script>

<style>
.cardSlot {
  float: left;

  margin: 0 8.6px 0 8.6px;

  width: 5vw;
  height: 12vh;
}
</style>

<template>
  <div class="deckBuilderCardName">{{ this.deckbuilderCard.name }}</div>
</template>

<script>
export default {
  name: "deckbuilderCard",
  props: ["card"],
  data() {
    return {
      deckbuilderCard: this.card
    };
  }
};
</script>

<style>
.deckBuilderCardName {
  font-size: 20px;
  background-color: lightblue;
  margin-bottom: .1vh;
}
</style>

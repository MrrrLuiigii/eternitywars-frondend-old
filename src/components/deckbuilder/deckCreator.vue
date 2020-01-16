<template>
  <div class="deckCreatorContainer">
    <collectionDeck />
  </div>
</template>

<script>
import collectionDeck from "@/components/deckbuilder/collectionDeck";
export default {
  name: "deckCreator",
  components: {
    collectionDeck
  },
  props: {
    deck: Object
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

<style>
.deckCreatorContainer {
  margin: 5vh 3vw 0 0;

  padding-top: 2vh;
  justify-content: center;
  display: flex;

  width: 30vw;
  height: 85vh;
  border: 3px solid blue;
}
</style>

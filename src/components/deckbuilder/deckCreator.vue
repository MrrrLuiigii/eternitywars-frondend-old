<template>
  <div class="deckCreatorContainer">
      <collectionDeck/>
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
}
</script>

<style>

.deckCreatorContainer {
    margin: 5vh 3vw 0 0;

    padding-top: 4.5vh;

    width: 30vw;
    height: 85vh;
    background-color: blue;
}

</style>
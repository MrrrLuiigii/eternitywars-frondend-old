<template>
  <div>
    <cardcollection class="cardcollectionComponent" />
    <deckCreator class="deckCreatorComponent" />
    <button @click="resetSelectedDeck" class="artButton deckBuilderHomeButton">
      Home
    </button>
  </div>
</template>

<script>
import deckCreator from "@/components/deckbuilder/deckCreator";
import cardcollection from "@/components/deckbuilder/cardcollection";
export default {
  name: "Deckbuilder",
  components: {
    cardcollection,
    deckCreator
  },
  methods: {
    resetSelectedDeck() {
      this.$store.dispatch("SaveSelectedDeck", null);
      this.$router.push("/");
    }
  }
};
</script>

<style>
.cardcollectionComponent {
  float: left;
}

.deckCreatorComponent {
  float: right;
}

.deckBuilderHomeButton {
  position: absolute;
  left: 10px;
  bottom: 10px;
  text-decoration: none;
  color: #35252f;
  outline: 0;
}
</style>

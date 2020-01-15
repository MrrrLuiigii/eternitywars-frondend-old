<template>
  <div>
    <cardcollection class="cardcollectionComponent" />
    <deckCreator class="deckCreatorComponent" />
    <homebutton />
  </div>
</template>

<script>
import deckCreator from "@/components/deckbuilder/deckCreator";
import cardcollection from "@/components/deckbuilder/cardcollection";
import homebutton from "@/components/buttons/homebutton";
export default {
  name: "Deckbuilder",
  components: {
    homebutton,
    cardcollection,
    deckCreator
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
</style>

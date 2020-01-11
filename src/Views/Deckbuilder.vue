<template>
  <div>
    <cardcollection />
    <homebutton />
  </div>
</template>

<script>
import cardcollection from "@/components/deckbuilder/cardcollection";
import homebutton from "@/components/buttons/homebutton";
export default {
  name: "Deckbuilder",
  components: {
    homebutton,
    cardcollection
  }
};
</script>

<style></style>

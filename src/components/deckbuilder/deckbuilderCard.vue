<template>
  <div class="deckBuilderCardName">
    <div @mouseleave="mouseLeave" @mouseover="mouseOver">
      {{ this.card.name }}
    </div>
    <hoverCard id="hoverDiv" class="hoverCard" v-show="hoverActive" :card="card" />
  </div>
</template>

<script>
import hoverCard from "@/components/card/hoverCard";
export default {
  name: "deckbuilderCard",
  props: ["card"],
  components: {
    hoverCard
  },
  data() {
    return {
      hoverActive: false,
      deckbuilderCard: this.card
    };
  },
  methods: {
    mouseOver() {
      this.hoverActive = true;
    },
    mouseLeave() {
      this.hoverActive = false;
    }
  }
};
</script>

<style>
.deckBuilderCardName {
  font-size: 20px;
  
  background-color: #362630;
  color: black;
  border: 2px solid black;

  margin: 2px;
}

.hoverCard {
  position: absolute;
  top: 40vh;
  right: 32vw;
  transform: scale(2);
}
</style>

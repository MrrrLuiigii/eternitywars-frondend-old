<template>
  <div class="board">
      <deck v-bind:topPlayer="true" v-bind:index="1"/>
      <hand v-bind:topPlayer="true" v-bind:index="1"/>
      <player v-bind:topPlayer="true" v-bind:index="1"/>
      <playrow v-bind:topPlayer="true" v-bind:index="1"/>
      <playrow v-bind:topPlayer="false" v-bind:index="0"/>
      <player v-bind:topPlayer="false" v-bind:index="0"/>
      <hand v-bind:topPlayer="false" v-bind:index="0"/>
      <deck v-bind:topPlayer="false" v-bind:index="0"/>
      <endButton v-if="getPlayerInfo.userId === gameState.playerTurn "/>
  </div>
</template>

<script>
    import hand from "@/components/game/hand.vue"
    import playrow from "@/components/game/playrow.vue"
    import player from "@/components/game/player.vue"
    import endButton from "@/components/game/endButton.vue"
    import deck from "@/components/game/deck.vue"
    export default {
        name: "board",
        components: {
            playrow,
            hand,
            player,
            endButton,
            deck
        },
          computed: {
    getPlayerInfo(){
      return this.$store.getters.getPlayerInfo;
    },
            gameState(){
            return this.$store.getters.getGame
        },
    },
        data() {
            return {

            }
        }

    }
</script>

<style>
    .board {
        background-image: url("../../assets/game/boardNew.png");
        background-size: 100% 100%;

        height: 100vh;
        width: 100vw;
    }
</style>
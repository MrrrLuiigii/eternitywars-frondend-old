<template>
  <div class="board">
      <hand/>
      <player v-bind:topPlayer="true"/>
      <playrow/>
      <playrow/>
      <player v-bind:topPlayer="false"/>
      <hand/>
  </div>
</template>

<script>
    import hand from "@/components/game/hand.vue"
    import playrow from "@/components/game/playrow.vue"
    import player from "@/components/game/player.vue"
    export default {
        name: "board",
        components: {
            playrow,
            hand,
            player
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
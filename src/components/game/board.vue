<template>
  <div class="board">
      <hand/>
      <playrow/>
      <playrow/>
      <hand/>
  </div>
</template>

<script>
    import hand from "@/components/game/hand.vue"
    import playrow from "@/components/game/playrow.vue"
    export default {
        name: "board",
        components: {
            playrow,
            hand
        },
        data() {
            return {

            }
        }

    }
</script>

<style>
    .board {
        background-image: url("../../assets/game/board.png");
        background-size: 100% 100%;

        height: 100vh;
        width: 100vw;
    }
</style>
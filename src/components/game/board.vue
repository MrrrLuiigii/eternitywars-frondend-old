<template>
  <div class="board">
      <playrow/>
      <playrow/>
  </div>
</template>

<script>
    import playrow from "@/components/game/playrow.vue"
    export default {
        name: "board",
        components: {
            playrow
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

        height: 75vh;
        width: 100vw;
    }
</style>
<template>
  <div class="cardback">
  </div>
</template>

<script>
    export default {
        name: "cardback",
        data() {
            return {
            }
        },
    }
</script>

<style>


    /* .card :focus() {
        border: 1px solid rgb(86, 180, 239);
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05) inset, 0px 0px 8px rgba(82, 168, 236, 0.6);
    } */

    .cardback {
        z-index: 99;

        position: absolute;

        background-color: transparent;
        background-image: url("../../assets/game/card/cardback.png");
        background-size: 100% 100%;

        border: none;
        
        margin: 0;
        width: 5vw;
        height: 12vh;
    }
</style>
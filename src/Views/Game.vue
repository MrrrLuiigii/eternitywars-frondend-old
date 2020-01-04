<template>
  <div>
    <hand/>
    <board/>
    <hand/>
    <!-- <homebutton/> -->
  </div>  
</template>

<script>
  import hand from "@/components/game/hand.vue"
  import board from "@/components/game/board.vue"
  // import homebutton from "@/components/buttons/homebutton"
  export default {
  name:"Deckbuilder",
    components: {
      // homebutton,
      board,
      hand
    }
  }
</script>

<style>

</style>
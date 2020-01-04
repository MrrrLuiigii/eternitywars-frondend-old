<template>
  <div class="playRow">
        <cardslot/>
  </div>
</template>

<script>
import cardslot from "@/components/game/cardslot.vue"
export default {
    name: "playRow",
    components: {
        cardslot
    },
    data() {
        return {
            
        }
    }
}
</script>

<style>
    .playRow {
        width: 100vw;
        height: 25%;
    }
</style>
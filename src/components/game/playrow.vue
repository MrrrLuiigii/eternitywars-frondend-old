<template>
  <div class="playRow">
    <div class="playRowContainer">
        <cardslot/>
        <cardslot/>
        <cardslot/>
        <cardslot/>
        <cardslot/>
        <cardslot/>
    </div>
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
    .playRowContainer {
        justify-content: center;
        display: flex;

        margin: auto;
        padding-left: 3vw;

        width: 100%;
    }

    .playRow {
        width: 100%;
    }
</style>
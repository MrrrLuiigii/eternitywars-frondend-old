<template>
    <div class="hand">
        <div class="handContainer">
            <cardslot/>
            <cardslot/>
            <cardslot/>
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
    name: "hand",
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
    .handContainer {
        justify-content: center;
        display: flex;

        margin: auto;
        padding-left: 6vw;
        padding-top: 9.5vh;

        width: 100%;
    }

    .hand {
        width: 100%;
    }

</style>
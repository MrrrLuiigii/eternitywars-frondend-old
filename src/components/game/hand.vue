<template>
    <div class="hand">
        <cardslot/>
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
    .hand {
        height: 25%;
    }

</style>
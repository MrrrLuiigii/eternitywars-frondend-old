<template>
    <div class="cardSlot">
        <card/>
    </div>
</template>

<script>
    import card from "@/components/game/card.vue"
    export default {
        name: "cardslot",
        components: {
            card
        },
        data() {
            return {

            }
        }
    }
</script>

<style>
    .cardslot {


        width: 10%;
        height: 15vh;
    }
</style>
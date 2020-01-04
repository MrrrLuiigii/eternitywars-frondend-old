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
    .cardSlot {
        float: left;

        margin: 0 9px 0 9px;

        width: 5vw;
        height: 15vh;
    }
</style>
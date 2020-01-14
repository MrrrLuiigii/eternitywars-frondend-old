<template>
    <div v-if="handSlot">
        <div class="cardSlot" v-if="gameState.Player[playerIndex].cardsInHand[cardSlotIndex] !== undefined"> 
             <card v-bind:card="gameState.Player[playerIndex].cardsInHand[cardSlotIndex]"
                v-bind:inHand="true"
                v-bind:onField="false"/>
        </div>
         <div class="cardSlot" v-else> 
        </div>
    </div>
    <div v-else>
        <div class="cardSlot" v-if="gameState.BoardRow[playerIndex].cardOnBoard[cardSlotIndex] !== undefined"> 
             <card v-bind:card="gameState.BoardRow[playerIndex].cardOnBoard[cardSlotIndex]"
                v-bind:inHand="false"
                v-bind:onField="true"/>
        </div>
         <div class="cardSlot" v-else> 
        </div>
    </div>
</template>

<script>
    import card from "@/components/game/card.vue"
    export default {
        name: "cardslot",
        components: {
            card
        },
        props:{
            handSlot: Boolean,
            cardSlotIndex: Number,
            playerIndex: Number
        },
        data() {
            return {

            }
        },
            computed: {
        gameState(){
            return this.$store.getters.getGame
        }
    }
 }
</script>

<style>
    .cardSlot {
        float: left;

        margin: 0 8.6px 0 8.6px;

        width: 5vw;
        height: 12vh;
    }
</style>
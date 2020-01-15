<template>
    <div v-if="handSlot">
        <div class="cardSlot" v-if="gameState.connectedPlayers[playerIndexData].cardsInHand[cardSlotIndexData] !== undefined"> 
             <card v-if="playerIndexData === 0" v-bind:card="gameState.connectedPlayers[playerIndexData].cardsInHand[cardSlotIndexData]"
                v-bind:inHand="true"
                v-bind:onField="false"/>
                <cardback v-else/>
        </div>
         <div class="cardSlot" v-else> 
        </div>
    </div>
    <div v-else>
        <div class="cardSlot" v-if="gameState.BoardRow[playerIndexData].cardOnBoard[cardSlotIndexData] !== undefined"> 
             <card v-bind:card="gameState.BoardRow[playerIndexData].cardOnBoard[cardSlotIndexData]"
                v-bind:inHand="false"
                v-bind:onField="true"/>
        </div>
         <div class="cardSlot" v-else> 
        </div>
    </div>
</template>

<script>
    import card from "@/components/game/card.vue"
    import cardback from "@/components/game/cardback.vue"
    export default {

        name: "cardslot",
        components: {
            card,
            cardback 
        },
        props:['handSlot', 'cardSlotIndex', 'playerIndex'],
        data() {
            return {
                handSlotData: this.handSlot,
                cardSlotIndexData: this.cardSlotIndex,
                playerIndexData: this.playerIndex
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
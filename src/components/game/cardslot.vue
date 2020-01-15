<template>
    <div v-if="handSlot">
        <div class="cardSlot" v-if="gameState.connectedPlayers[playerIndexData].cardsInHand[cardSlotIndexData] !== undefined" 
        v-on:click="SelectCard(gameState.connectedPlayers[playerIndexData].cardsInHand, cardSlotIndexData)"
        v-on:click.right="SelectCard(null, null)" > 
             <card v-if="playerIndexData === 0" v-bind:card="gameState.connectedPlayers[playerIndexData].cardsInHand[cardSlotIndexData]"
                v-bind:inHand="true"
                v-bind:onField="false"/>
                <cardback v-else/>
        </div>
         <div class="cardSlot" v-else> 
        </div>
    </div>
    <div v-else>
        <div v-if="playerIndexData === 0">
            <div class="cardSlot" v-if="gameState.connectedPlayers[playerIndexData].boardrow.cardSlotList[cardSlotIndexData] !== undefined" 
            v-on:click="SelectCardOnYourField(gameState.connectedPlayers[playerIndexData].cardsInHand, cardSlotIndexData)"
            > 
                <card v-bind:card="gameState.connectedPlayers[playerIndexData].boardrow.cardSlotList[cardSlotIndexData].card"
                    v-bind:inHand="false"
                    v-bind:onField="true"/>
            </div>
         <div class="cardSlot" v-else v-on:click="SelectEmptyYourField(gameState.connectedPlayers[playerIndexData].cardsInHand, cardSlotIndexData)"> 
        </div>
        </div>
        <div v-else>
              <div class="cardSlot" v-if="gameState.connectedPlayers[playerIndexData].boardrow.cardSlotList[cardSlotIndexData] !== undefined"
              v-on:click="SelectTargetToAttack(gameState.connectedPlayers[playerIndexData].cardsInHand, cardSlotIndexData)"
              v-on:click.right="SelectTargetToAttack(null, null)"> 
                <card v-bind:card="gameState.connectedPlayers[playerIndexData].boardrow.cardSlotList[cardSlotIndexData].card"
                    v-bind:inHand="false"
                    v-bind:onField="true"/>
            </div>
            <div class="cardSlot" v-else> 
            </div>
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
                playerIndexData: this.playerIndex,
                PlayMessage: {
                    Subject: null,
                    Action: null,
                    Content: null,
                    CardToPlay: null,
                    SpotToPlace: null,
                }
            }
        },
            computed: {
        gameState(){
            return this.$store.getters.getGame
        },
        getSelectedCardInHand(){
            return this.$store.getters.getSelectedCardInHand
        },
         getSelectedEmptyCardSlotOnYourField(){
            return this.$store.getters.getSelectedEmptyCardSlotOnYourField
        },
         getSelectedCardSlotOnYourField(){
            return this.$store.getters.getSelectedCardSlotOnYourField
        }
    },
    methods:{
        SelectCard(cardslot, index){
            if(cardslot !== null){
            const data = { cardslot, index}
            this.$store.dispatch("SelectCardInHand", data)
            console.log(data)
            }
            this.$store.dispatch("SelectCardInHand", null)
        },
        SelectEmptyYourField(cardslot, index){
            console.log("werkt wel")
            if(this.getSelectedCardInHand !== null){
            const data = { cardslot, index}
            this.$store.dispatch("SelectedEmptyCardSlotOnYourField", data)
            this.TryToPlayCard()
            console.log(data)
            }
        },
        SelectCardOnYourField(cardslot, index){
              if(cardslot !== null){
            const data = { cardslot, index}
            this.$store.dispatch("SelectedCardSlotOnYourField", data)
            console.log(data)
            }
            this.$store.dispatch("SelectedCardSlotOnYourField", null)
        },
        TryToPlayCard(){
            this.PlayMessage.Content = this.gameState
            this.PlayMessage.Subject = "GAME"
            this.PlayMessage.Action = "PLACECARD"
            this.PlayMessage.CardToPlay = this.getSelectedCardInHand
            this.PlayMessage.SpotToPlace = this.getSelectedEmptyCardSlotOnYourField

        },
        SelectTargetToAttack(cardslot, index){
        console.log("werkt wel")
        if(this.SelectedCardSlotOnYourField !== null){
        const data = { cardslot, index}
        this.$store.dispatch("SelectCardInHand", data)
        console.log(data)
        }
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
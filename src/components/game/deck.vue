<template>
    <div v-bind:class="[ topPlayer ? deckCardCountTop : deckCardCountBottom ]" v-if="index === 0">
         {{ gameState.connectedPlayers[index].cardsInDeck.length}}
    </div>
      <div v-bind:class="[ topPlayer ? deckCardCountTop : deckCardCountBottom ]" v-else>
        {{ gameState.connectedPlayers[index].cardsInDeck.length}}
    </div>
</template>

<script>
export default {
    name: "deck",
    props: {
        topPlayer: Boolean,
        index: Number,
    },
    data() {
        return {
            deckCardCountTop: "deckCardCountTop",
            deckCardCountBottom: "deckCardCountBottom",
        }
    },
    computed: {
        gameState(){
            return this.$store.getters.getGame
        },
    }
}
</script>

<style>
    .deckCardCountTop {
        position: absolute;
        top: 15.5vh;
        left: 22.8vw;

        color: white;
    }

    .deckCardCountBottom {
        position: absolute;
        bottom: 15.5vh;
        right: 22.8vw;

        color: white;
    }
</style>
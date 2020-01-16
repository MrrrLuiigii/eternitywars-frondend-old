<template>
  <div class="deckSelectorComponent">
    <v-combobox
      label="Select a deck..."
      v-model="selectedDeck"
      :items="decks"
      item-text="name"
      single-line
      v-on:change="getDeckById"
    />

    <div
      v-if="this.selectedDeck === null"
      class="deckCardsContainer deckMessage"
    >
      <small>You don't have a deck selected...</small>
    </div>
    <div
      v-else-if="this.selectedDeck.cards.cards.length === 0"
      class="deckCardsContainer deckMessage"
    >
      <small>You don't have any cards in this deck yet...</small>
    </div>
    <div v-else class="deckCardsContainer">
      <div
        v-for="(card, index) in this.selectedDeck.cards.cards"
        :key="index"
        :card="card"
        @click.right="removeCard(selectedDeck, index)"
      >
        <deckbuilderCard :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
import deckbuilderCard from "@/components/deckbuilder/deckbuilderCard";
export default {
  name: "collectionDeck",
  props: ["card"],
  components: {
    deckbuilderCard
  },
  data() {
    return {
      selectedDeck: null,
      decks: null,
      wsMessage: {
        Subject: null,
        Action: null,
        Content: null,
        Token: null
      }
    };
  },
  created() {
    this.$options.sockets.onmessage = data => this.messageReceived(data);
    this.getAllEmptyDecks();
  },
  methods: {
    async getAllEmptyDecks() {
      this.wsMessage.Subject = "DECK";
      this.wsMessage.Action = "GETALLEMPTYDECKS";
      const player = this.$store.getters.getPlayerInfo;
      this.wsMessage.Content = player;
      this.wsMessage.Token = await this.$auth.getTokenSilently();
      this.$socket.send(JSON.stringify(this.wsMessage));
    },
    async getDeckById() {
      this.wsMessage.Subject = "DECK";
      this.wsMessage.Action = "GETBUILDERDECKBYID";
      this.wsMessage.Content = this.selectedDeck;
      this.wsMessage.Token = await this.$auth.getTokenSilently();
      this.$socket.send(JSON.stringify(this.wsMessage));
    },
    async removeCard(selectedDeck, index) {
      const deck = JSON.parse(JSON.stringify(selectedDeck));
      const card = deck.cards.cards[index];

      deck.cards.cards = [];
      deck.cards.cards[0] = card;

      this.wsMessage.Subject = "DECK";
      this.wsMessage.Action = "REMOVECARD";
      this.wsMessage.Content = deck;
      this.wsMessage.Token = await this.$auth.getTokenSilently();
      this.$socket.send(JSON.stringify(this.wsMessage));
      console.log(this.wsMessage);
    },
    messageReceived(data) {
      const jsonData = JSON.parse(data.data);
      switch (jsonData.action) {
        case "GETBUILDERDECKBYID":
          console.log(jsonData);
          this.selectedDeck = jsonData.content;
          break;
        case "GETALLDECK":
          this.decks = jsonData.content.decks;
          break;
      }
    }
  }
};
</script>

<style>
.deckCardsContainer {
  width: 25vw;
  height: 70vh;

  border: 3px solid orange;

  overflow-y: scroll;
}

.deckMessage {
  color: white;
  padding-top: 35vh;
}
</style>

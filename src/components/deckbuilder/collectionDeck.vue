<template>
  <div class="deckSelectorComponent">
    <div v-if="this.decks !== null">
      <deckForm v-bind:disabled="false" v-if="this.decks.length < 6" />
      <deckForm v-bind:disabled="true" v-else />
    </div>
    <div v-else>
      <deckForm v-bind:disabled="true" />
    </div>

    <div class="selectAndRemove">
      <v-combobox
        class="deckSelector"
        label="Select a deck..."
        v-model="selectedDeck"
        :items="decks"
        item-text="name"
        single-line
        v-on:change="this.changeDeck"
      />
      <button class="artSButton deckRemover" @click="deleteDeck">Delete</button>
    </div>

    <div
      v-if="this.getSelectedDeck === null"
      class="deckCardsContainer deckMessage"
    >
      <small>You don't have a deck selected...</small>
    </div>
    <div
      class="deckCardsContainer deckMessage"
      v-else-if="this.getSelectedDeck.cards.cards === null"
    >
      <small>Loading...</small>
    </div>
    <div v-else>
      <div
        v-if="this.getSelectedDeck.cards.cards.length === 0"
        class="deckCardsContainer deckMessage"
      >
        <small>You don't have any cards in this deck yet...</small>
      </div>
      <div v-else class="deckCardsContainer">
        <div
          v-for="(card, index) in this.getSelectedDeck.cards.cards"
          :key="index"
          :card="card"
          @click.right="removeCard(getSelectedDeck, index)"
        >
          <deckbuilderCard :card="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import deckForm from "@/components/deckbuilder/deckForm";
import deckbuilderCard from "@/components/deckbuilder/deckbuilderCard";
export default {
  name: "collectionDeck",
  props: ["card"],
  components: {
    deckbuilderCard,
    deckForm
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
    this.getAllDecks();
  },
  computed: {
    getSelectedDeck() {
      return this.$store.getters.getSelectedBuilderDeck;
    }
  },
  methods: {
    changeDeck() {
      this.getDeckById();
    },
    async getAllDecks() {
      this.wsMessage.Subject = "DECK";
      this.wsMessage.Action = "GETALLDECKS";
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
      const card = JSON.parse(JSON.stringify(deck.cards.cards[index]));

      deck.cards.cards = [];
      deck.cards.cards[0] = card;

      this.wsMessage.Subject = "DECK";
      this.wsMessage.Action = "REMOVECARD";
      this.wsMessage.Content = deck;
      this.wsMessage.Token = await this.$auth.getTokenSilently();
      this.$socket.send(JSON.stringify(this.wsMessage));
    },
    async deleteDeck() {
      if (this.selectedDeck === null) {
        this.$toasted.show("You have no deck selected to remove.", {
          theme: "toasted-primary",
          position: "bottom-right",
          duration: 2500
        });
      } else {
        this.wsMessage.Subject = "DECK";
        this.wsMessage.Action = "DELETEDECK";
        this.wsMessage.Content = this.selectedDeck;
        this.wsMessage.Token = await this.$auth.getTokenSilently();
        this.$socket.send(JSON.stringify(this.wsMessage));
        this.selectedDeck = null;
      }

      this.$store.dispatch("SaveSelectedDeck", null);
    },
    messageReceived(data) {
      const jsonData = JSON.parse(data.data);
      switch (jsonData.action) {
        case "GETBUILDERDECKBYID":
          this.$store.dispatch("SaveSelectedDeck", null);
          this.$store.dispatch("SaveSelectedDeck", jsonData.content);
          break;
        case "GETALLDECKS":
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
  height: 64vh;

  border: 10px;
  border-color: #362630;
  border-style: ridge groove groove ridge;

  overflow-y: scroll;
}

.deckMessage {
  color: #362630;
  padding-top: 28vh;
}

.selectAndRemove {
  display: flex;
}

.deckSelector {
  width: 50%;
  margin-right: 1vw;
}

.deckRemover {
  margin-top: 2vh;
}
</style>

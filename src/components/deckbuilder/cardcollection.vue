<template>
  <div class="cardCollectionContainer">
    <div v-for="(card, index) in getCardCollection" :key="index" :card="card">
      <cardslot :card="card" />
    </div>
  </div>
</template>

<script>
import cardslot from "@/components/deckbuilder/collectionCardslot";
export default {
  name: "cardcollection",
  components: {
    cardslot
  },
  props: {
    card: Object
  },
  data() {
    return {
      wsMessage: {
        Subject: null,
        Action: null,
        Content: null,
        Token: null
      }
    };
  },
  computed: {
    getCardCollection() {
      return this.$store.getters.getCardCollection;
    },
    getSelectedBuilderDeck() {
      return this.$store.getters.getSelectedBuilderDeck;
    }
  },
  created() {
    this.$options.sockets.onmessage = data => this.messageReceived(data);
    this.loadCardCollection();
  },
  methods: {
    async loadCardCollection() {
      this.wsMessage.Subject = "CARD";
      this.wsMessage.Action = "GetByUserId";
      const cont = this.$store.getters.getPlayerInfo;
      this.wsMessage.Content = cont;
      this.wsMessage.Token = await this.$auth.getTokenSilently();
      this.$socket.send(JSON.stringify(this.wsMessage));
    },
    messageReceived(data) {
      const jsonData = JSON.parse(data.data);
      switch (jsonData.action) {
        case "GETCARDCOLLECTION": {
          const data = jsonData.content;
          const cards = data.cards;
          this.$store.dispatch("SaveCardCollection", cards);
          break;
        }
      }
    }
  }
};
</script>

<style>
.cardCollectionContainer {
  color: white;
  margin: 5vh 0 0 3vw;

  padding: 6vh 0 6vh 0;

  height: 85vh;
  width: 60vw;

  border: 20px;
  border-color: #362630;
  border-style: groove ridge ridge groove;

  background-color: #a5b495;

  justify-content: center;

  display: flex;
  flex-wrap: wrap;

  overflow-y: auto;
}
</style>

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
      console.log(this.wsMessage);
    },
    messageReceived(data) {
      const jsonData = JSON.parse(data.data);
      console.log(jsonData);
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

  padding-top: 4.5vh;

  height: 85vh;
  width: 60vw;
  border: 3px solid red;

  display: flex;
  flex-wrap: wrap;

  overflow-y: auto;
}
</style>

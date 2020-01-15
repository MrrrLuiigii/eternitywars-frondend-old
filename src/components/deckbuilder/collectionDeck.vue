<template>
  <div class="deckSelectorComponent">
    <v-combobox
      label="Select a deck..."
      v-model="selectedDeck"
      :items="decks"
      @input="getDeckById"
    />
  </div>
</template>

<script>
export default {
  name: "collectionDeck",
  data() {
    return {
      selectedDeck: null,
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
    this.getDecks();
  },
  methods: {
    async getDecks() {
      this.wsMessage.Subject = "DECK";
      this.wsMessage.Action = "GETALLDECK";
      const cont = this.$store.getters.getPlayerInfo;
      this.wsMessage.Content = cont;
      this.wsMessage.Token = await this.$auth.getTokenSilently();
      this.$socket.send(JSON.stringify(this.wsMessage));
      console.log(this.wsMessage);
    },
    async getDeckById() {
      //   this.wsMessage.Subject = "DECK";
      //   this.wsMessage.Action = "GETDECKBYID";
      //   this.wsMessage.Content = selectedDeck;
      //   this.wsMessage.Token = await this.$auth.getTokenSilently();
      //   this.$socket.send(JSON.stringify(this.wsMessage));
      //   console.log(this.wsMessage);
    },
    messageReceived(data) {
      const jsonData = JSON.parse(data.data);

      console.log(jsonData);

      switch (jsonData.action) {
        case "GETDECKBYID":
          console.log(jsonData.content);
          //   this.$store.dispatch("SaveFriendData", jsonData.content.friends);
          break;
        case "GETALLDECK":
          this.$store.dispatch("SaveDeckCollection", jsonData.content);
          break;
      }
    }
  },
  computed: {
    decks() {
      return this.$store.getters.getPlayerInfo.deckCollection.decks;
    }
  }
};
</script>

<style></style>

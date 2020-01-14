<template>
  <div class="cardCollectionContainer">
    <div
      v-bind:class="[
        index % 5 === 0
          ? firstRow
          : [
              index % 5 === 1
                ? secondRow
                : [
                    index % 5 === 2
                      ? thirdRow
                      : [index % 5 === 3 ? fourthRow : fifthRow]
                  ]
            ]
      ]"
      v-for="(card, index) in getCardCollection"
      :key="index"
      :card="card"
    >
      <cardslot />
    </div>
  </div>
</template>

<script>
import cardslot from "@/components/game/cardslot";
export default {
  name: "cardcollection",
  components: {
    cardslot
  },
  data() {
    return {
      firstRow: "firstRow",
      secondRow: "secondRow",
      thirdRow: "thirdRow",
      fourthRow: "fourthRow",
      fifthRow: "fifthRow",
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
      this.wsMessage.Subject = "COLLECTION";
      this.wsMessage.Action = "GetByUserId";
      const cont = this.$store.getters.getPlayerInfo;
      this.wsMessage.Content = cont;
      this.wsMessage.Token = await this.$auth.getTokenSilently();
      this.$socket.send(JSON.stringify(this.wsMessage));
      console.log(this.wsMessage);
    },
    messageReceived(data) {
      const jsonData = JSON.parse(data.data);
      switch (jsonData.action) {
        case "GETCARDCOLLECTION": {
          const data = jsonData.content;
          const cardcollection = data.cardCollection.cards;
          this.$store.dispatch("SaveCardCollection", cardcollection);
          break;
        }
      }
    }
  }
};
</script>

<style>
.firstRow {
  margin-top: 5vh;
}

.secondRow {
  margin-top: 10vh;
}

.thirdRow {
  margin-top: 15vh;
}

.fourthRow {
  margin-top: 20vh;
}

.fifthRow {
  margin-top: 25vh;
}

.cardCollectionContainer {
  margin: 5vh 3vw 10vh 3vw;

  padding-top: 4.5vh;

  height: 85vh;
  width: 60vw;
  background-color: red;

  overflow-x: auto;
}
</style>

<template>
  <div class="cardCollectionContainer">
    <div class="firstRow">
      <div
        class="collectionCardDiv"
        v-for="(card, index) in getCardCollection"
        :key="index"
        :card="card"
      >
        <cardslot :card="card" v-if="index % 5 === 0" />
      </div>
    </div>
    <div class="secondRow">
      <div
        class="collectionCardDiv"
        v-for="(card, index) in getCardCollection"
        :key="index"
        :card="card"
      >
        <cardslot :card="card" v-if="index % 5 === 1" />
      </div>
    </div>
    <div class="thirdRow">
      <div
        class="collectionCardDiv"
        v-for="(card, index) in getCardCollection"
        :key="index"
        :card="card"
      >
        <cardslot :card="card" v-if="index % 5 === 2" />
      </div>
    </div>
    <div class="fourthRow">
      <div
        class="collectionCardDiv"
        v-for="(card, index) in getCardCollection"
        :key="index"
        :card="card"
      >
        <cardslot :card="card" v-if="index % 5 === 3" />
      </div>
    </div>
    <div class="fifthRow">
      <div
        class="collectionCardDiv"
        v-for="(card, index) in getCardCollection"
        :key="index"
        :card="card"
      >
        <cardslot :card="card" v-if="index % 5 === 4" />
      </div>
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
.collectionCardDiv {
  /* width: 7vw; */
  height: 12vh;
}

.firstRow {
  margin-top: 3vh;
  margin-left: 1.5vw;
  width: 60vw;
  display: flex;
}

.secondRow {
  margin-top: 2vh;
  margin-left: 1.5vw;
  width: 60vw;
  display: flex;
}

.thirdRow {
  margin-top: 2vh;
  margin-left: 1.5vw;
  width: 60vw;
  display: flex;
}

.fourthRow {
  margin-top: 2vh;
  margin-left: 1.5vw;
  width: 60vw;
  display: flex;
}

.fifthRow {
  margin-top: 2vh;
  margin-left: 1.5vw;
  width: 60vw;
  display: flex;
}

.cardCollectionContainer {
  margin: 5vh 0 0 3vw;

  padding-top: 4.5vh;

  height: 85vh;
  width: 60vw;
  background-color: red;

  /* overflow-x: auto; */
}
</style>

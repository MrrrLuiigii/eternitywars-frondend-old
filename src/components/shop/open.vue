<template>
  <div class="packOpenContainer" v-if="this.getPlayerInfo.packAmount !== null">
    <button class="artXButton" v-on:click="openPack">Open pack</button>
    <div class="openedCardsContainer">
      <div>
        <div class="cardOneSlot openPackCardSlot">
          <div v-if="this.getPack !== null">
            <card class="openedCard" :card="this.getPack.Cards[0]" />
          </div>
        </div>
        <div class="cardTwoSlot openPackCardSlot">
          <div v-if="this.getPack !== null">
            <card class="openedCard" :card="this.getPack.Cards[0]" />
          </div>
        </div>
        <div class="cardThreeSlot openPackCardSlot">
          <div v-if="this.getPack !== null">
            <card class="openedCard" :card="this.getPack.Cards[0]" />
          </div>
        </div>
        <button class="artSButton closePackButton" @click="closePack">
          Okay
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    <div>You dont have any packs to open... Let's buy some!</div>
  </div>
</template>

<script>
import card from "@/components/game/card";
export default {
  components: {
    card
  },
  data() {
    return {
      amount: 1,
      wsMessage: {
        Subject: null,
        Action: null,
        Content: null,
        Token: null
      }
    };
  },
  computed: {
    getPack() {
      return this.$store.getters.getPack;
    },
    getPlayerInfo() {
      return this.$store.getters.getPlayerInfo;
    }
  },
  methods: {
    async openPack() {
      this.wsMessage.Subject = "SHOP";
      this.wsMessage.Action = "OPENPACK";
      this.wsMessage.Content = this.getPlayerInfo;
      this.wsMessage.Token = await this.$auth.getTokenSilently();
      this.$socket.send(JSON.stringify(this.wsMessage));
    },
    closePack() {
      this.$store.dispatch("AddPack", null);
    }
  }
};
</script>

<style>
.packOpenContainer {
  height: 100vh;
  width: 50vw;

  padding: 5vh 5vw;
  justify-content: center;
}

.openedCardsContainer {
  height: 70vh;
  width: 40vw;

  position: relative;

  margin: 5vh 0;

  border: 20px;
  border-color: #362630;
  border-style: groove ridge ridge groove;

  background-color: #a5b495;
}

.openPackCardSlot {
  width: 10vw;
  height: 22.5vh;

  justify-content: center;
  display: flex;

  padding-top: 4.15vh;
  border: 10px dashed black;
}

.openedCard {
  transform: scale(2);
}

.cardOneSlot {
  position: absolute;
  top: 8vh;
  left: 5vw;
}

.cardTwoSlot {
  position: absolute;
  top: 8vh;
  left: 23vw;
}

.cardThreeSlot {
  position: absolute;
  bottom: 7vh;
  left: 14vw;
}

.closePackButton {
  margin-top: 2.5vh;
}
</style>

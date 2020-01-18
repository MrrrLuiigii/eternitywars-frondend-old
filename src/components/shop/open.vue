<template>
  <div class="packOpenContainer" v-if="this.getPlayerInfo.packAmount !== null">
    <div class="openedCardsContainer" v-if="this.getPack !== null">
      <div
        v-for="(card, index) in this.getPack.cards"
        :key="index"
        :card="card"
      >
        <card :card="card" />
      </div>
    </div>
    <button class="artXButton" v-on:click="openPack">Open pack</button>
  </div>
  <div class="packOpenContainer" v-else>
    <div>You dont have any packs to open lets buy some</div>
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
      console.log("yeet");
      console.log(this.getPack);

      this.wsMessage.Subject = "SHOP";
      this.wsMessage.Action = "OPENPACK";
      this.wsMessage.Content = this.getPlayerInfo;
      this.wsMessage.Token = await this.$auth.getTokenSilently();
      this.$socket.send(JSON.stringify(this.wsMessage));
    }
  }
};
</script>

<style>
.packOpenContainer {
  height: 100vh;
  width: 50vw;
  background-color: red;
}

.openedCardsContainer {
  height: 60vh;
  width: 100%;
  background-color: green;
}
</style>

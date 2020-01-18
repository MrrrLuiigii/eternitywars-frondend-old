<template>
  <div class="card">
    <div v-on:click="addToDeck()">
      <div class="cardName">
        {{ this.card.name }}
      </div>

      <div class="blueMana">
        {{ this.card.blue_mana }}
      </div>

      <div class="deathEssence">
        {{ this.card.death_essence }}
      </div>

      <div class="attack">
        {{ this.card.attack }}
      </div>

      <div class="health">
        {{ this.card.health }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "collectionCard",
  props: {
    card: Object
  },
  computed: {
    getSelectedBuilderDeck() {
      return this.$store.getters.getSelectedBuilderDeck;
    }
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
  methods: {
    async addToDeck() {
      const deck = JSON.parse(JSON.stringify(this.getSelectedBuilderDeck));
      const cardToAdd = JSON.parse(JSON.stringify(this.card));

      if (deck.cards.cards.length < 30) {
        deck.cards.cards = [];
        deck.cards.cards[0] = cardToAdd;

        this.wsMessage.Subject = "DECK";
        this.wsMessage.Action = "ADDCARD";
        this.wsMessage.Content = deck;
        this.wsMessage.Token = await this.$auth.getTokenSilently();
        this.$socket.send(JSON.stringify(this.wsMessage));
        console.log(this.wsMessage);
      } else {
        this.showToast("Your deck has reached maximum capacity.");
      }
    },
    async showToast(message) {
      this.$toasted.show(message, {
        theme: "toasted-primary",
        position: "bottom-right",
        duration: 2500
      });
    }
  }
};
</script>

<style>
.card {
  z-index: 99;

  background-color: transparent;
  background-image: url("../../assets/game/card/card.png");
  background-size: 100% 100%;

  border: none;

  justify-content: center;

  margin: 5px 0 5px 0;
  width: 5vw;
  height: 12vh;
}

.cardName {
  color: white;

  width: 70px;
  height: 70px;
  word-wrap: break-word;
  margin: auto;

  font-size: 15px;

  text-align: center;
}

.attack {
  border-radius: 100%;

  color: white;

  position: absolute;
  bottom: 0.75vh;
  left: 0.3vw;

  font-weight: bold;
  font-size: 15px;

  text-align: center;

  width: 20px;
  height: 20px;
}

.health {
  border-radius: 100%;

  color: white;

  position: absolute;
  bottom: 0.9vh;
  right: .05vw;

  font-weight: bold;
  font-size: 15px;

  text-align: center;

  width: 20px;
  height: 20px;
}

.blueMana {
  border-radius: 100%;

  color: white;

  position: absolute;
  top: 0.1vh;
  left: 0.24vw;

  font-weight: bold;
  font-size: 15px;

  text-align: center;

  width: 20px;
  height: 20px;
}

.deathEssence {
  border-radius: 100%;

  color: white;

  position: absolute;
  top: 0.1vh;
  right: 0.05vw;

  font-weight: bold;
  font-size: 15px;

  text-align: center;

  width: 20px;
  height: 20px;
}
</style>

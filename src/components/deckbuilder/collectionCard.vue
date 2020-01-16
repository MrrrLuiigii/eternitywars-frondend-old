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
      }
      else {
        this.$toasted.show("Your deck has reached maximum capacity.", {
            theme: "toasted-primary",
            position: "bottom-right",
            duration: 2500
          });
      }
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

  margin: 0;
  width: 5vw;
  height: 12vh;
}

.cardName {
  color: white;
  margin: auto;

  text-align: center;
}

.attack {
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;

  margin-left: -0.25vw;
  margin-bottom: 0.2vh;

  font-weight: bold;

  width: 25px;
  height: 25px;
}

.health {
  color: white;
  position: absolute;
  bottom: 0;
  right: 0;

  margin-right: -0.15vw;
  margin-bottom: 0.2vh;

  font-weight: bold;

  width: 25px;
  height: 25px;
}

.blueMana {
  color: white;
  position: absolute;
  top: 0;
  left: 0;

  margin-left: -0.25vw;
  margin-top: -0.35vh;

  font-weight: bold;

  border-radius: 50%;
  width: 25px;
  height: 25px;
}

.deathEssence {
  color: white;
  position: absolute;
  top: 0;
  right: 0;

  margin-left: -0.25vw;
  margin-top: -0.35vh;

  font-weight: bold;

  border-radius: 50%;
  width: 25px;
  height: 25px;
}
</style>

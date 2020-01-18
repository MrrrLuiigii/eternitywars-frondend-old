<template>
  <div class="buyContainer">
    <div class="buyAmountContainer">
      <div class="packButtonMinContainer">
        <button class="artSButton" v-on:click="decrease">
          -
        </button>
      </div>
      <div class="packAmount">{{ amount }}</div>
      <div class="packButtonPlusContainer">
        <button class="artSButton" v-on:click="increase">
          +
        </button>
      </div>
    </div>
    <div>
      <button class="artXButton" v-on:click="buyPack">Buy with gold</button>
      <button class="artXButton">Buy with PayPal</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 1,
      wsMessage: {
        Subject: null,
        Action: null,
        Content: null,
        Amount: null,
        Token: null
      }
    };
  },
  computed: {
    getPlayerInfo() {
      return this.$store.getters.getPlayerInfo;
    }
  },
  methods: {
    increase() {
      this.amount = this.amount + 1;
    },
    decrease() {
      if (this.amount > 1) {
        this.amount = this.amount - 1;
      } else {
        this.showToast("You can't buy 0 or less packs, you fool...");
      }
    },
    async buyPack() {
      this.wsMessage.Subject = "SHOP";
      this.wsMessage.Action = "BUYPACK";
      this.wsMessage.Content = this.getPlayerInfo;
      this.wsMessage.Token = await this.$auth.getTokenSilently();
      this.wsMessage.Amount = this.amount;
      this.$socket.send(JSON.stringify(this.wsMessage));
      this.amount = 1;
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
.buyContainer {
  height: 60vh;
  width: 50vw;

  justify-content: center;
}

.buyAmountContainer {
  width: 30vw;

  padding-top: 1vh;

  display: flex;

  border: 20px;
  border-color: #362630;
  border-style: groove ridge ridge groove;

  background-color: #a5b495;

  margin: auto;
  margin-bottom: 5vh;
}

.packButtonMinContainer {
  width: 10vw;
  height: 10vh;

  padding-top: 2.5vh;

  float: left;
}

.packButtonPlusContainer {
  width: 10vw;
  height: 10vh;

  padding-top: 2.5vh;

  float: right;
}

.packAmount {
  font-size: 60px;
  width: 10vw;
  height: 10vh;
}
</style>

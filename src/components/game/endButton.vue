<template>
  <div class="endButton artButton" v-on:click="endTurn">
    End turn
  </div>
</template>

<script>
  export default {
    name: "endButton",
    data() {
      return {
        id: "",
        wsMessage: {
          Subject: null,
          Action: null,
          Content: null,
          Token: null
        }
      };
    },
    computed: {
      gameState() {
        return this.$store.getters.getGame;
      }
    },
    methods: {
      async endTurn() {
        this.wsMessage.Subject = "GAME";
        this.wsMessage.Action = "ENDTURN";
        this.wsMessage.Content = this.gameState;
        this.wsMessage.Token = await this.$auth.getTokenSilently();
        this.$socket.send(JSON.stringify(this.wsMessage));
      }
    }
  };
</script>

<style>
  .endButton {
    margin: auto;
    padding-top: 9px;

    position: absolute;
    right: 2.5vw;
    bottom: 48vh;
  }
</style>

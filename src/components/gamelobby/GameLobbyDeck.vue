<template>
  <div>
    <div v-if="getplayer.deckCollection.decks[deckIndex] !== undefined">
      <div
        v-if="getplayer.deckCollection.decks[deckIndex].cards.cards.length < 30"
        class="artSPanel deckCard"
        v-on:click="inValidDeck"
      >
        {{ getplayer.deckCollection.decks[deckIndex].name }}
        <small>Deck is not complete</small>
      </div>
      <div v-else class="artSPanel deckCard" v-on:click="selectDeck">
        {{ getplayer.deckCollection.decks[deckIndex].name }}
      </div>
    </div>
    <div v-else>
      <div class="artSPanel deckCard">
        <small>Empty</small>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GameLobbyDeck",
    props: {
      deckIndex: Number
    },
    data() {
      return {
        wsMessage: {
          Subject: null,
          Action: null,
          Content: null,
          Player: null,
          Token: null
        },
        Player: this.$store.getters.getGamePlayer,
        User: this.$store.getters.getPlayerInfo
      };
    },
    computed: {
      getplayer() {
        return this.$store.getters.getPlayerInfo;
      },
      joinedLobby() {
        return this.$store.getters.getJoinedlobby;
      }
    },
    methods: {
      async selectDeck() {
        this.$store.dispatch(
          "SetDeck",
          this.getplayer.deckCollection.decks[this.deckIndex]
        );
        this.wsMessage.Subject = "LOBBY";
        this.wsMessage.Action = "SETDECK";
        this.wsMessage.Content = this.joinedLobby;

        this.Player.username = this.User.username;
        this.Player.userId = this.User.userId;
        this.Player.deck = this.getplayer.deckCollection.decks[this.deckIndex];

        this.wsMessage.Player = this.Player;
        this.wsMessage.Token = await this.$auth.getTokenSilently();
        this.$socket.send(JSON.stringify(this.wsMessage));
        this.$store.dispatch("SaveGamePlayer", this.Player);
      },
      inValidDeck() {
        this.$toasted.show("This is a invalid deck", {
          theme: "toasted-primary",
          position: "bottom-right",
          duration: 2500
        });
      }
    }
  };
</script>

<style>
  .deckCard {
    padding-top: 3.5vh;
  }
</style>

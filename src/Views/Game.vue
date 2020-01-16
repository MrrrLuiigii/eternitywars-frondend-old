<template>
  <div>
    <homebutton />
    <board />
  </div>
</template>

<script>
  import board from "@/components/game/board.vue";
  import homebutton from "@/components/buttons/homebutton";
  export default {
    name: "Deckbuilder",
    components: {
      homebutton,
      board
    },
    created() {
      this.$options.sockets.onmessage = data => this.messageReceived(data);
    },
    methods: {
      messageReceived(data) {
        const jsonData = JSON.parse(data.data);
        switch (jsonData.action) {
          case "UPDATEGAME": {
            this.$store.dispatch("UpdateGame", jsonData.content);
            this.handleErrors(jsonData.content);
            break;
          }
           case "ENDGAME": {
            console.table(jsonData.content);
            const id = jsonData.content.id;
            this.$router.push({ name: "home", params: { id } });
            this.$store.dispatch("UpdateGame", null);
            break;
          }
        }
      },
      handleErrors(game) {
        console.log(game)
        if (game.Error !== null) {
          this.$toasted.show(game.connectedPlayers[0].Error, {
            theme: "toasted-primary",
            position: "bottom-right",
            duration: 2500
          });
        }
      }
    }
  };
</script>

<style></style>

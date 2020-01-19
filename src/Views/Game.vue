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
            break;
          }
           case "ENDGAME": {
            const id = jsonData.content.id;
            this.$router.push({ name: "postgame", params: { id } });
            this.$store.dispatch("UpdateGame", jsonData.content);
            break;
          }
          case "ERROR": {
            this.handleErrors(jsonData.content);
            break;
          }
        }
      },
      handleErrors(error) {
          this.$toasted.show(error, {
            theme: "toasted-primary",
            position: "bottom-right",
            duration: 2500
          });
      }
    },
    handleErrors(game) {
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

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
            this.$router.push({ name: "postgame", params: { id } });
            this.$store.dispatch("UpdateGame", jsonData.content);
            break;
          }
          case "ERROR": {
            console.table(jsonData.content);
            const id = jsonData.content.id;
            this.$router.push({ name: "postgame", params: { id } });
            this.$store.dispatch("UpdateGame", jsonData.content);
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
    }
  };
</script>

<style></style>

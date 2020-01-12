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
    created(){
    this.$options.sockets.onmessage = (data) => this.messageReceived(data)   
  },
    methods: {
       messageReceived(data){
      const jsonData = JSON.parse(data.data)
      switch(jsonData.action){
        case "UPDATEGAME":{
          this.$store.dispatch('UpdateGame', jsonData.content) 
          break
        }
      }
    },
  }
};
</script>

<style></style>

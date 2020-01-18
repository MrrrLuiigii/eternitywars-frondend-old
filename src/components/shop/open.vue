<template>
  <div>
        <div v-if="this.getPlayerInfo.packAmount !== null"> 
      <div> 
            <div v-if="this.getPack !== null">
                <div v-for="(card, index) in this.getPack.Cards"
                :key="index"
                :card="card">
                    <card :card="card"/>
                </div>
            </div>
      </div>
      <div>{{getPlayerInfo.packAmount}}</div>
      <div v-on:click="openPack">OPEN</div> 
      </div>
       <div v-else> 
      <div > You dont have any packs to open lets buy some </div>
      </div>
  </div>
</template>

<script>
import card from "@/components/game/card"
export default {
    components:{
        card
    },
 data(){
        return{
            amount: 1,
             wsMessage: {
              Subject: null,
              Action: null,
              Content: null,
              Token: null
        },
    } 
},
  computed:{
    getPack(){
      return this.$store.getters.getPack
    },
    getPlayerInfo(){
     return this.$store.getters.getPlayerInfo;
     },
  },
  methods:{
      async openPack(){
        this.wsMessage.Subject = "SHOP"
        this.wsMessage.Action = "OPENPACK"
        this.wsMessage.Content = this.getPlayerInfo
        this.wsMessage.Token = await this.$auth.getTokenSilently()
        this.$socket.send(JSON.stringify(this.wsMessage))
        console.log(this.wsMessage)
      }
  }
}
</script>

<style>

</style>
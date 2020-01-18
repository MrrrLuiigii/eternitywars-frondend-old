<template>
  <div>
      <div> 
      <div v-on:click="Increase">PLUS</div>
      <div>{{amount}}</div>
      <div v-on:click="Decrease" >MINUS</div>
      <div v-on:click="BuyPack">BUY PACK NOW</div> 
      <div>BUY WITH PAYPAL</div> 
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            amount: 1,
             wsMessage: {
              Subject: null,
              Action: null,
              Content: null,
              Amount: null,
              Token: null
        },
        }
    },
    computed:{
        getPlayerInfo(){
          return this.$store.getters.getPlayerInfo;
        }
    },
    methods:{
        Increase(){
            this.amount = this.amount+1
        },
        Decrease(){
            if(this.amount !==  1){
                this.amount = this.amount-1
            }
            this.$toasted.show("can't go any lower.", {
            theme: "toasted-primary",
            position: "bottom-right",
            duration: 2500
          });
        },
        async BuyPack(){
            this.wsMessage.Subject = "SHOP"
            this.wsMessage.Action = "BUYPACK"
            this.wsMessage.Content = this.getPlayerInfo
            this.wsMessage.Token = await this.$auth.getTokenSilently()
            this.wsMessage.Amount = this.amount
            this.$socket.send(JSON.stringify(this.wsMessage))
            console.log(this.wsMessage)
            this.amount = 1
        }
    }
}
</script>

<style>

</style>
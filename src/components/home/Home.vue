<template>
  <div> 
    <chatlist></chatlist>
    <Friendframe></Friendframe>
  </div>
</template>

<script>
import Friendframe from "../friendsystem/Friendframe"
import chatlist from "../chat/chatlist"

export default {
  name: "Home",
  components:{ 
    Friendframe,
    chatlist
  },
  mounted(){
  },
  data() {
    return {
            wsMessage: {
              Subject: null,
              Action: null,
              Content: null,
              Token: null
        },
        Chatcontainer: null
    };
  },
  computed: {
    getPlayerInfo(){
      return this.$store.getters.getPlayerInfo;
    }
  },
  created(){
    this.$options.sockets.onmessage = (data) => this.messageReceived(data)
    this.GetUserInformation();
    
  },
  methods: {
    async GetUserInformation() {
      this.wsMessage.Subject = "USER"
      this.wsMessage.Action = "GetUserByEmail"
      this.wsMessage.Content = this.$auth.user.email
      this.wsMessage.Token = await this.$auth.getTokenSilently()
      this.$socket.send(JSON.stringify(this.wsMessage))
      console.log(this.wsMessage)
    },
    checkData(){
      if(this.getPlayerInfo.username == null){
        this.$router.push('/register')
      }
      else{
          this.registerToServer()
      }
    },
    messageReceived(data){
      console.log(data.data)
      const jsonData = JSON.parse(data.data)
      switch(jsonData.action){
         case "GetUserByEmail":
          this.$store.dispatch('SavePlayerInfo',jsonData.content)
          console.log(jsonData.content)
          this.checkData()
        }
    },
    async registerToServer(){
      this.wsMessage.Subject = "REGISTER"
      this.wsMessage.Action = ""
      const cont = this.getPlayerInfo
      this.wsMessage.Content = cont
      this.wsMessage.Token = await this.$auth.getTokenSilently()
      this.$socket.send(JSON.stringify(this.wsMessage))
      console.log(this.wsMessage)
    }
  }
};
</script>

<style>
</style>
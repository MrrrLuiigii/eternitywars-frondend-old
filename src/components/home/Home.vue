<template>
  <div>
    <Friendframe></Friendframe>
    <div>{{this.getPlayerInfo}}</div>
  </div>
</template>

<script>
import Friendframe from "../friendsystem/Friendframe"

export default {
  name: "Home",
  components:{ 
    Friendframe,
  },
  data() {
    return {
            wsMessage: {
              Subject: null,
              Action: null,
              Content: null,
              Token: null
        }
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
    },
    messageReceived(data){
      const jsonData =JSON.parse(data.data)
      switch(jsonData.action){
         case "GetUserByEmail":
           this.$store.dispatch('SavePlayerInfo',jsonData.content)
           this.checkData()
        }
    }
  }
};
</script>

<style>
</style>
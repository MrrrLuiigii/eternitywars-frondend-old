<template>
  <div>
    <Friendframe></Friendframe>
    <button @click="GetUserInformation"></button>
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
  created(){
    this.$options.sockets.onmessage = (data) => console.log(data)
  },
  mounted() {
    this.GetUserInformation();

  },
  methods: {
    async GetUserInformation() {
      this.wsMessage.Subject = "USER"
      this.wsMessage.Action = "GetUserByEmail"
      this.wsMessage.Content = this.$auth.user.email
      this.wsMessage.Token = await this.$auth.getTokenSilently()
      this.$socket.send(JSON.stringify(this.wsMessage))
    },
    messageReceived(){

    }
  }
};
</script>

<style>
</style>
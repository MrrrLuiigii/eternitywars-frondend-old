<template>
  <div>
    <h1>please set your username</h1>
    <div>
      {{this.getPlayerInfo}}

      <input
        v-model="payload.username"
        placeholder="Please fill in your username, that you want to register."
      />
      <!-- <input
        type="text"
        id="username"
      /> -->
      <button id="register" class="btn" v-on:click="registerUsername">
        register
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: "register",
  data() {
    return {
      payload:{
        username: null,
      }, 
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
  },
  mounted() {
    console.log(this.$store.getters.getPlayerInfo);
  },
  methods: {
   async registerUsername(){
        this.wsMessage.Subject = "USER"
        this.wsMessage.Action = "AddUser"
        const cont = this.getPlayerInfo
        cont.email = this.$auth.user.email
        cont.username = this.payload.username
        this.wsMessage.Content = cont
        this.wsMessage.Token = await this.$auth.getTokenSilently()
        this.$socket.send(JSON.stringify(this.wsMessage))
      console.log(this.wsMessage)
    },
    checkData(){
      if(this.getPlayerInfo.username != null){
        this.$router.push('/')
        }
      },
    messageReceived(data){
      const jsonData =JSON.parse(data.data)
      switch(jsonData.action){
         case "AddUser":
           console.log(jsonData.content)
           this.$store.dispatch('SavePlayerInfo',jsonData.content)
           this.checkData()
        }
    }
  }
};
</script>

<style></style>

<template>
  <div> 
      <div v-for="(friend, index) in this.$store.getters.getChatList" :key="index"> 
          <chatbox> </chatbox>
      </div>
  </div>
</template>

<script>
import chatbox from "./chatbox"

export default {
  name: "chatlist",
  components:{ 
    chatbox,
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
    getChatlist(){
      return this.$store.getters.getChatList;
    }
  },
  created(){
    this.$options.sockets.onmessage = (data) => this.messageReceived(data)
    
  },
  methods: {
    messageReceived(data){
             const jsonData =JSON.parse(data.data)
      console.log(jsonData)
      switch(jsonData.action){
         case "GETALLFRIENDS":
           console.log(jsonData.content)
           this.$store.dispatch('SaveFriendData',jsonData.content.friends)
        }
    }
  }
};
</script>

<style>
</style>
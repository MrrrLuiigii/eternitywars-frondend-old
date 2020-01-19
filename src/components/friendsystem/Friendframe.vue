<template class="index">
  <div>
    <button
      class="artButton friendButton"
      v-on:click="this.getFriendData"
      @click.stop="drawer = !drawer"
    >
      Friends
    </button>

    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <Userstatus />

      <v-divider></v-divider>

      <Friendadd />

      <v-divider></v-divider>

      <Friendrequest />

      <v-divider></v-divider>

      <Friendlist />
    </v-navigation-drawer>
  </div>
</template>

<script>
import Userstatus from "./Userstatus";
import Friendadd from "./Friendadd";
import Friendlist from "./Friendlist";
import Friendrequest from "./Friendrequest";

export default {
  data() {
    return {
      drawer: null,
      wsMessage: {
        Subject: null,
        Action: null,
        Content: null,
        Token: null
      }
    };
  },
  name: "Friendframe",
  components: {
    Userstatus,
    Friendadd,
    Friendlist,
    Friendrequest
  },
  created() {
    this.$options.sockets.onmessage = data => this.messageReceived(data);
  },
  methods: {
    async getFriendData() {
      if (this.$auth !== null) {
        this.wsMessage.Subject = "FRIEND";
        this.wsMessage.Action = "GETALLFRIENDS";
        this.wsMessage.Content = this.$store.getters.getPlayerInfo;
        this.wsMessage.Content.email = this.$auth.user.email;
        this.wsMessage.Token = await this.$auth.getTokenSilently();
        this.$socket.send(JSON.stringify(this.wsMessage));
      }
    },
    messageReceived(data) {
      const jsonData = JSON.parse(data.data);
      switch (jsonData.action) {
        case "GETALLFRIENDS":
          this.$store.dispatch("SaveFriendData", jsonData.content.friends);
      }
    }
  }
};
</script>

<style>
.index {
  position: absolute;
  z-index: 1000;
}

.friendButton {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>

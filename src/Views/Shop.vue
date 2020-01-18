<template>
  <div v-if="this.getPlayerInfo !== null">
    <div class="leftShopSide">
      <accountDetails />
      <buy />
    </div>
    <div class="rightShopSide">
      <open />
    </div>
    <homebutton v-on:click="resetStore" />
  </div>
  <div v-else>
    <div>ERROR LOADING USER DATA PLEASE TRY AGAIN...</div>
    <homebutton />
  </div>
</template>

<script>
import homebutton from "../components/buttons/homebutton";
import buy from "../components/shop/buy";
import accountDetails from "../components/shop/accountDetails";
import open from "../components/shop/open";
export default {
  name: "Shop",
  components: {
    homebutton,
    buy,
    accountDetails,
    open
  },
  computed: {
    getPlayerInfo() {
      return this.$store.getters.getPlayerInfo;
    }
  },
  created() {
    this.$options.sockets.onmessage = data => this.messageReceived(data);
  },
  methods: {
    messageReceived(data) {
      const jsonData = JSON.parse(data.data);
      switch (jsonData.action) {
        case "ERROR": {
          this.handleErrors(jsonData.content);
          break;
        }
        case "OPENPACK": {
          console.table(jsonData.content);
          this.$store.dispatch("AddPack", jsonData.content);
          break;
        }
        case "BUYPACK": {
          this.$store.dispatch("SavePlayerInfo", jsonData.content);
          break;
        }
        case "UPDATEUSERINFO": {
          this.$store.dispatch("SavePlayerInfo", jsonData.content);
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
    },
    resetStore() {
      this.$store.dispatch("AddPack", null);
    }
  }
};
</script>

<style scoped>
.leftShopSide {
  width: 50vw;
  height: 100vh;
  float: left;
}

.rightShopSide {
  width: 50vw;
  height: 100vh;
  float: right;
}
</style>

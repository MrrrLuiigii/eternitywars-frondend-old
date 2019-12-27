<template>
  <div>
    <Friendframe></Friendframe>
  </div>
</template>

<script>
import axios from "axios";
import Friendframe from "../friendsystem/Friendframe"

export default {
  name: "Home",
  components:{ 
    Friendframe,
  },
  data() {
    return {};
  },
  mounted() {
    this.makePlayerInfoRequest();

  },
  methods: {
    async makePlayerInfoRequest() {
      axios.request({
          url: "api/private/user/getByEmail/" + this.$auth.user.email,
          method: "get",
          baseURL: url,
          headers: {
            Authorization: "Bearer " + await this.$auth.getTokenSilently()
          }
        })
        .then(response => {
          this.$store.dispatch("SavePlayerInfo", response.data);
          if (this.$store.state.player.name == null) {
            this.$router.push("register");
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
  }
};
</script>

<style>
</style>
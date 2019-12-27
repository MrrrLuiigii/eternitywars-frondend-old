<template>
  <div>
    <h1>please set your username</h1>
    <div>
      {{ this.$store.state.player }}
      {{ this.$store.state.userService }}
      {{ this.$auth.user }}
      <input
        v-model="username"
        placeholder="Please fill in your username, that you want to register."
      />
      <!-- <input
        type="text"
        id="username"
      /> -->
      <button id="register" class="btn" v-on:click="CreateUser">
        register
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "register",
  data() {
    return {
      username: null
    };
  },
  mounted() {
    console.log(this.$store.getters.player);
    console.log(this.$store.getters.userServiceIP);
  },
  methods: {
    async CreateUser() {
      // const url = this.$store.getters.userServiceIP;
      // console.log(url);
      // var Username = document.getElementById("username").value;
      // var Email = this.$auth.user.email;
      // const token = await this.$auth.getTokenSilently();
      axios
        .request({
          url: "api/private/user/createUser/",
          method: "post",
          baseURL: this.$store.getters.userServiceIP,
          headers: {
            Authorization: "Bearer " + (await this.$auth.getTokenSilently())
          },
          data: {
            username: this.username,
            email: this.$auth.user.email
          }
        })
        .then(response => {
          console.log(response);
          this.$router.push("gamelobby");
        })
        .catch(error => {
          if (error) throw new Error(error);
        });
    }
  }
};
</script>

<style></style>

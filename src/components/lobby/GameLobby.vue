<template>
  <p>{{ lobbyname }}</p>
</template>

<script>
export default {
  data: function() {
    return {
      lobbyname: ""
    };
  },
  mounted: function() {
    console.log(this.$router.params);
    this.lobbyname = this.$route.params;
    console.log(this.lobbyname);
  },
  methods: {
    LoadLobby() {

    }
  }
};
</script>
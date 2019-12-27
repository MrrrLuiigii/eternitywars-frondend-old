<template>
  <div>
    <div>{{ this.lobby.id }}</div>
    <div>{{ this.lobby.name }}</div>
    <div>{{ this.lobby.description }}</div>
  </div>
</template>

<script>
export default {
  name: "lobby",
  props: {
    lobby: {
      type: Object,
      required: true,
    }
  }
};
</script>

<style></style>

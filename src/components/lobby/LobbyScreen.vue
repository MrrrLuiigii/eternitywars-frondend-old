<template>
  <div>
    <div>
      <lobbylist />
      <lobbyform />
    </div>
  </div>
</template>

<script>
import lobbyform from "./lobbyForm";
import lobbylist from "./lobbylist";

export default {
  name: "LobbyScreen",
  components: {
    lobbyform,
    lobbylist
  }
};
</script>

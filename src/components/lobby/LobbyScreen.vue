<template>
  <div>
    <div>
      <lobbyform />
      <lobbylist />
    </div>
    <homebutton />
  </div>
</template>

<script>
import lobbyform from "./lobbyForm";
import lobbylist from "./lobbylist";
import homebutton from "../buttons/homebutton";

export default {
  name: "LobbyScreen",
  components: {
    lobbyform,
    lobbylist,
    homebutton
  }
};
</script>

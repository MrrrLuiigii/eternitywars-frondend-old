<template>
<div>
  <div>
    <Router-link to="/lobbies">
        <button
      class="artXButton routerLink"
    >
      Play
    </button>
    </router-link>
  </div>
<div>
      <Router-link to="/deckbuilder">
        <button
      class="artXButton routerLink"
    >
      DeckBuilder
    </button>
        </router-link>
  </div>
  <div>
        <Router-link to="/shop">
        <button
      class="artXButton routerLink"
    >
      Shop
    </button>
        </router-link>
  </div>
  <div>
        <Router-link to="/quests">
        <button
      class="artXButton routerLink"
    >
      Quests
    </button>
        </router-link>
  </div>

<div>
        <Router-link to="/game">
        <button
      class="artXButton routerLink"
    >
      Game
    </button>
        </router-link>
  </div>

  <div>
          <button
        class="artButton"
        @click="logout()"
      >
        Quit
      </button >
    </div>
  </div>
</template>

<script>
export default {
name: "navbar",
methods: {
    logout(){
      if(confirm("Are you sure that you want to logout?")){
        this.$auth.logout();
    }
  }
}
}


</script>

<style>
  .routerLink {
    text-decoration: none;
    outline: 0;
    color: #35252f;
  }

  .routerLink:focus {
    outline: 0;
  }
</style>
<template>
  <div>
    <div>
      <Router-link to="/lobbies">
        <button class="artXButton routerLink">
          Play
        </button>
      </Router-link>
    </div>
    <div>
      <Router-link to="/deckbuilder">
        <button class="artXButton routerLink">
          DeckBuilder
        </button>
      </Router-link>
    </div>
    <div>
      <Router-link to="/shop">
        <button class="artXButton routerLink">
          Shop
        </button>
      </Router-link>
    </div>
    <div>
      <Router-link to="/quests">
        <button class="artXButton routerLink">
          Quests
        </button>
      </Router-link>
    </div>

    <div>
      <Router-link to="/game">
        <button class="artXButton routerLink">
          Game
        </button>
      </Router-link>
    </div>

    <div>
      <button class="artButton" @click="logout()">
        Quit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  methods: {
    logout() {
      if (confirm("Are you sure that you want to logout?")) {
        this.$auth.logout({
          returnTo: window.location.origin
        });
      }
    }
  }
};
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

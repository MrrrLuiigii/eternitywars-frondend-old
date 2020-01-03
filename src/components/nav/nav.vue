<template>
<div>
  <div>
        <button
      class="artXButton"
    >
      Play
    </button>
  </div>
<div>
        <button
      class="artXButton"
    >
      DeckBuilder
    </button>
  </div>
  <div>
        <button
      class="artXButton"
    >
      Shop
    </button>
  </div>
  <div>
        <button
      class="artXButton"
    >
      Quests
    </button>
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

</style>
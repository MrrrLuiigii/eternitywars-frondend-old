<template>
     <div>
    <Router-link to="/">
        <button
      class="artButton homeButton"
    >
      Home
    </button>
    </router-link>
  </div>
</template>
<script>
export default {
    name: "homeButton"
    
}
</script>

<style>
  .homeButton {
    position: absolute;
    left: 10px;
    bottom: 10px;
  }
</style>
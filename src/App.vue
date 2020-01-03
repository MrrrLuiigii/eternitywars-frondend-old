<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
  export default {
  name: "app",
  }
</script>

<style lang="scss">
  @font-face { 
    font-family: "RetroComputer";
    src: url("/assets/font/RetroComputer.ttf"); 
  }

  #app {
    font-family: "RetroComputer";
    height: 100vh;
    width: 50%;
    overflow: hidden;
  }

  ::-webkit-scrollbar {
    display:none;
  }

  body {
    font-family: "RetroComputer";
    background-color: #3a5248;
    display: grid;
    grid-template-rows: auto;
    justify-items: center;
    padding-top: 50px;
    overflow: hidden;
  }

  body,
  html {
    margin: 0;
    height: 100%;
  }
</style>
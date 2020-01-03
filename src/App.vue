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
    color: #35252f;
    background-color: #3a5248;
    text-align: center;
    font-size: 20px;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }

  #logo {
    height: 75%;
    width: 75%;
    margin-bottom: 5vh;
    margin-top: 5vh;
  }

  .artXButton {
    width: 350px;
    height: 50px;
    text-align: center;
    background-image: url("./assets/buttonLong.png");
    background-size: 100% 100%;
  }

  .artButton {
    width: 150px;
    height: 50px;
    text-align: center;
    background-image: url("./assets/button.png");
    background-size: 100% 100%;
  }

  ::-webkit-scrollbar {
    display:none;
  }
</style>
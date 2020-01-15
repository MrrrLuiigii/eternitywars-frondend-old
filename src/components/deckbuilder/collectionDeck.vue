<template>
  <div class="deckSelectorComponent">
      <v-combobox label="Select a deck..." required :rules="rules" :value="comboValue" @input="selectDeck"/>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
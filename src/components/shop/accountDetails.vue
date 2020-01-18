<template>
  <div>
      <div>
          <div>{{getPlayerInfo.gold}}</div>
             <div>
                <div v-if="getPlayerInfo.packAmount !== null">Aquired packs: {{getPlayerInfo.packAmount}}</div>
                <div v-else>Aquired packs: 0</div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    computed:{
        getPlayerInfo(){
            console.table(this.$store.getters.getPlayerInfo)
          return this.$store.getters.getPlayerInfo;
        }
    }
}
</script>

<style>

</style>
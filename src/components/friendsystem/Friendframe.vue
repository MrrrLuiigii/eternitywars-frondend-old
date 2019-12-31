<template class="index">
 <v-sheet
    height=100vh
    class="overflow-hidden"
    style="position: relative;"
  >
    <v-container class="fill-height">
        <v-btn
          dark
          @click.stop="drawer = !drawer"
        >
          Friends
        </v-btn>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >
        <Userstatus/>

      <v-divider></v-divider>

      <Friendadd/>

      <v-divider></v-divider>

      <Friendrequest/>

      <v-divider></v-divider>

      <Friendlist/>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
import Userstatus from './Userstatus'
import Friendadd from './Friendadd'
import Friendlist from './Friendlist'
import Friendrequest from './Friendrequest'

export default {
data(){
    return{
         drawer: null,
    }
},
name: "Friendframe",
components:{
    Userstatus,
    Friendadd,
    Friendlist,
    Friendrequest
}
}
</script>

<style>
.index{
  position:absolute;
  z-index: 1000;
}
</style>
<template>
    <div>

        <v-list subheader dense>
      <v-subheader>Online Friends</v-subheader>
             <v-list-item v-for="(friend, index) in onlineFriends" :key="index" @click="startChat(friend)" >
                    <Friendcard :friend="friend"></Friendcard>
        </v-list-item>
      </v-list>
        <v-list subheader dense>
      <v-subheader>Offline Friends</v-subheader>
             <v-list-item v-for="(friend, index) in offlineFriends" :key="index" @click="startChat(friend)">
                    <Friendcard :friend="friend"></Friendcard>
        </v-list-item>
      </v-list>

    </div>
</template>

<script>
import Friendcard from "./Friendcard"

export default {
name: "Friendlist",
components:{
    Friendcard
},
  computed: {
    onlineFriends() {
        return this.$store.getters.onlinefriends;
        },
    offlineFriends() {
        return this.$store.getters.offlinefriends;
        }
    },
    methods:{
        startChat(friend){
            console.log(friend)
        }
    }
}
</script>

<style>

</style>
<template>
    <div>
        <v-list-item>
          <v-list-item-title>Add Friend</v-list-item-title>
        <input class="form-control" type="text" v-model="friendname" placeholder="Username" v-on:keyup.enter="sendFriendRequest()">
      </v-list-item>

    </div>
</template>

<script>

export default {
name: "Friendadd",
 data(){
        return{
            friendname: "",
        };
    },
components:{
    },
methods:{
    sendFriendRequest(){
            this.$store.dispatch('sendFriendRequest', this.friendname);
            this.friendname = "";
        }
    }
}
</script>

<style>

</style>
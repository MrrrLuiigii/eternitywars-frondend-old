<template>
    <div>
        <input type="text" v-model="newLobbyItem">
        <button @click="addNewLobby()" >Create</button>
    </div>
</template>

<script>
export default {
    name: "lobbyForm",
    data(){
        return{
            newLobbyItem: "",
        };
    },

    methods: {
        addNewLobby(){
            this.$store.dispatch('addNewLobby', this.newLobbyItem);
        }
    }
}
</script>

<style>

</style>
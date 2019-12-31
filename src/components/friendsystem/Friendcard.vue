<template> 
    <v-list-item>
        <v-list-item-avatar size="36"> 
        <v-img :src="friend.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
            <v-list-item-title v-text="friend.username"></v-list-item-title>
            <v-list-item-subtitle v-text="friend.accountStatus"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon>
        <v-icon :color="friend.active ? 'purple' : 'grey'">mdi-chat</v-icon>
        </v-list-item-icon>
    </v-list-item>
</template>

<script>
export default {
    props:{
        friend:{
            type: Object,
            required: true,
        }
    },
    name: "Friendcard",
    }
</script>

<style>

</style>
<template>
    <div v-bind:class="[ topPlayer ? handContainerTop : handContainerBottom ]">
        <cardslot v-bind:cardSlotIndex="7" v-bind:playerIndex="indexData" v-bind:handSlot="true"/>
        <cardslot v-bind:cardSlotIndex="5" v-bind:playerIndex="indexData" v-bind:handSlot="true"/>
        <cardslot v-bind:cardSlotIndex="3" v-bind:playerIndex="indexData" v-bind:handSlot="true"/>
        <cardslot v-bind:cardSlotIndex="1" v-bind:playerIndex="indexData" v-bind:handSlot="true"/>
        <cardslot v-bind:cardSlotIndex="0" v-bind:playerIndex="indexData" v-bind:handSlot="true"/>
        <cardslot v-bind:cardSlotIndex="2" v-bind:playerIndex="indexData" v-bind:handSlot="true"/>
        <cardslot v-bind:cardSlotIndex="4" v-bind:playerIndex="indexData" v-bind:handSlot="true"/>
        <cardslot v-bind:cardSlotIndex="6" v-bind:playerIndex="indexData" v-bind:handSlot="true"/>
        <cardslot v-bind:cardSlotIndex="8" v-bind:playerIndex="indexData" v-bind:handSlot="true"/>
    </div>  
</template>

<script>
import cardslot from "@/components/game/cardslot.vue"
export default {
    name: "hand",
    props: ['index', 'topPlayer'],
    components: {
        cardslot
    },
    data() {
        return {
            indexData: this.index,
            handContainerTop: "handContainerTop",
            handContainerBottom: "handContainerBottom"
        }
    }
}
</script>

<style>
    .handContainerTop {
        justify-content: center;
        display: flex;

        position: absolute;
        top: 11vh;
        left: 26.5vw;

        width: 53vw;
        height: 12vh;
    }

    .handContainerBottom {
        justify-content: center;
        display: flex;

        position: absolute;
        bottom: 11vh;
        right: 26.5vw;

        width: 53vw;
        height: 12vh;
    }
</style>
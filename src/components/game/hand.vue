<template>
    <div class="hand">
        <div v-bind:class="[ topPlayer ? handContainerTop : handContainerBottom ]">
            <cardslot v-bind:cardSlotIndex="7" v-bind:playerIndex="ïndex" v-bind:handSlot="true"/>
            <cardslot v-bind:cardSlotIndex="5" v-bind:playerIndex="ïndex" v-bind:handSlot="true"/>
            <cardslot v-bind:cardSlotIndex="3" v-bind:playerIndex="ïndex" v-bind:handSlot="true"/>
            <cardslot v-bind:cardSlotIndex="1" v-bind:playerIndex="ïndex" v-bind:handSlot="true"/>
            <cardslot v-bind:cardSlotIndex="0" v-bind:playerIndex="ïndex" v-bind:handSlot="true"/>
            <cardslot v-bind:cardSlotIndex="2" v-bind:playerIndex="ïndex" v-bind:handSlot="true"/>
            <cardslot v-bind:cardSlotIndex="4" v-bind:playerIndex="ïndex" v-bind:handSlot="true"/>
            <cardslot v-bind:cardSlotIndex="6" v-bind:playerIndex="ïndex" v-bind:handSlot="true"/>
            <cardslot v-bind:cardSlotIndex="8" v-bind:playerIndex="ïndex" v-bind:handSlot="true"/>
        </div>
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

        margin: auto;
        padding-left: 6.1vw;
        padding-top: 10.5vh;

        width: 100%;
    }

    .handContainerBottom {
        justify-content: center;
        display: flex;

        margin: auto;
        padding-right: 5.8vw;

        width: 100%;
    }

    .hand {
        width: 100%;
    }

</style>
<template>
  <div v-bind:class="[ topPlayer ? playRowContainerTop : playRowContainerBottom ]">
        <cardslot v-bind:cardSlotIndex="4" v-bind:playerIndex="indexData" v-bind:handSlot="false"/>
        <cardslot v-bind:cardSlotIndex="2" v-bind:playerIndex="indexData" v-bind:handSlot="false"/>
        <cardslot v-bind:cardSlotIndex="0" v-bind:playerIndex="indexData" v-bind:handSlot="false"/>
        <cardslot v-bind:cardSlotIndex="1" v-bind:playerIndex="indexData" v-bind:handSlot="false"/>
        <cardslot v-bind:cardSlotIndex="3" v-bind:playerIndex="indexData" v-bind:handSlot="false"/>
        <cardslot v-bind:cardSlotIndex="5" v-bind:playerIndex="indexData" v-bind:handSlot="false"/>
    </div>
</template>

<script>
import cardslot from "@/components/game/cardslot.vue"
export default {
    name: "playRow",
    components: {
        cardslot
    },
    props: ['index', 'topPlayer'],
    data() {
        return {
            indexData: this.index,
            playRowContainerTop: "playRowContainerTop",
            playRowContainerBottom: "playRowContainerBottom"
        }
    }
}
</script>

<style>
    .playRowContainerTop {
        justify-content: center;
        display: flex;

        position: absolute;
        top: 34vh;
        left: 32.5vw;

        height: 12vh;
        width: 35vw;
    }

    .playRowContainerBottom {
        justify-content: center;
        display: flex;

        position: absolute;
        bottom: 34vh;
        right: 32.5vw;

        height: 12vh;
        width: 35vw;
    }
</style>
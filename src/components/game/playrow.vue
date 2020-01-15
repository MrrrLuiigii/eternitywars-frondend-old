<template>
  <div class="playRow">
    <div v-bind:class="[ topPlayer ? playRowContainerTop : playRowContainerBottom ]">
        <cardslot v-bind:cardSlotIndex="4" v-bind:playerIndex="indexData" v-bind:handSlot="false"/>
        <cardslot v-bind:cardSlotIndex="2" v-bind:playerIndex="indexData" v-bind:handSlot="false"/>
        <cardslot v-bind:cardSlotIndex="0" v-bind:playerIndex="indexData" v-bind:handSlot="false"/>
        <cardslot v-bind:cardSlotIndex="1" v-bind:playerIndex="indexData" v-bind:handSlot="false"/>
        <cardslot v-bind:cardSlotIndex="3" v-bind:playerIndex="indexData" v-bind:handSlot="false"/>
        <cardslot v-bind:cardSlotIndex="5" v-bind:playerIndex="indexData" v-bind:handSlot="false"/>
    </div>
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

        margin: auto;
        padding-left: .2vw;

        width: 100%;
    }

    .playRowContainerBottom {
        justify-content: center;
        display: flex;

        margin: auto;
        padding-left: .2vw;
        padding-top: 7.2vh;

        width: 100%;
    }

    .playRow {
        width: 100%;
    }
</style>
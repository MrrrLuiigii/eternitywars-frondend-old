<template>

  <div class="card">

    <div class="cardName">
        {{ this.card.name }}
    </div>

    <div class="blueMana">
        {{ this.card.blueMana }}
    </div>

    <div class="deathEssence">
        {{ this.card.deathEssence }}
    </div>

    <div class="attack">
        {{ this.card.attack }}
    </div>

    <div class="health">
        {{ this.card.health }}
    </div>

  </div>

</template>

<script>
    export default {
        name: "card",
        data() {
            return {
                card: {
                    name: "Dreadlord von Reemer",
                    blueMana: 6,
                    deathEssence: 7,
                    attack: 4,
                    health: 5
                }
            }
        }

    }
</script>

<style>

    .card {
        position: relative;

        background-color: burlywood;
        
        border-radius: 50%;
        width: 100px;
        height: 15vh;
    }

    .cardName {
        margin: auto;

        text-align: center;

    }

    .attack {
        position: absolute;
        bottom: 0;
        left: 0;

        font-weight: bold;

        background-color: red;
        /* background-image: url("../../assets/card/attack.png"); */
        /* background-size: 100% 100%; */
        /* object-fit: cover; */

        border-radius: 50%;
        width: 20%;
        height: 20%;
    }

    .health {
        position: absolute;
        bottom: 0;
        right: 0;

        font-weight: bold;

        background-color: blue;

        border-radius: 50%;
        width: 20%;
        height: 20%;
    }

    .blueMana {
        position: absolute;
        top: 0;
        left: 0;

        font-weight: bold;

        background-color: lightblue;

        border-radius: 50%;
        width: 20%;
        height: 20%;
    }

    .deathEssence {
        position: absolute;
        top: 0;
        right: 0;

        font-weight: bold;

        background-color: gray;

        border-radius: 50%;
        width: 20%;
        height: 20%;
    }
</style>
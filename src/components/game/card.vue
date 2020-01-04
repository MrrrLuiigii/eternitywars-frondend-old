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

    /* .card :focus() {
        border: 1px solid rgb(86, 180, 239);
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05) inset, 0px 0px 8px rgba(82, 168, 236, 0.6);
    } */

    .card {
        z-index: 99;

        position: absolute;

        background-color: transparent;
        background-image: url("../../assets/game/card/card.png");
        background-size: 100% 100%;

        border: none;
        
        margin: 0;
        width: 5vw;
        height: 14vh;
    }

    .cardName {
        color: white;
        margin: auto;

        text-align: center;

    }

    .attack {
        position: absolute;
        bottom: 0;
        left: 0;

        font-weight: bold;

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

        border-radius: 50%;
        width: 20%;
        height: 20%;
    }

    .blueMana {
        position: absolute;
        top: 0;
        left: 0;

        font-weight: bold;

        border-radius: 50%;
        width: 20%;
        height: 20%;
    }

    .deathEssence {
        position: absolute;
        top: 0;
        right: 0;

        font-weight: bold;

        border-radius: 50%;
        width: 20%;
        height: 20%;
    }
</style>
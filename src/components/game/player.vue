<template>
    <div class="heroContainer">
        <div class="player">
            <div v-bind:class="[ topPlayer ? heroHpTop : heroHpBottom ]">
                {{ this.Hero.hp }}
            </div>
            <div v-bind:class="[ topPlayer ? heroBlueManaTop : heroBlueManaBottom ]">
                {{ this.Hero.blueMana }}
            </div>
            <div v-bind:class="[ topPlayer ? heroDeathEssenceTop : heroDeathEssenceBottom ]">
                {{ this.Hero.deathEssence }}
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "player",
    props: {
        topPlayer: Boolean
    },
    data() {
        return {
            heroBlueManaTop: "heroBlueManaTop",
            heroBlueManaBottom: "heroBlueManaBottom",
            heroDeathEssenceTop: "heroDeathEssenceTop",
            heroDeathEssenceBottom: "heroDeathEssenceBottom",
            heroHpTop: "heroHpTop",
            heroHpBottom: "heroHpBottom",
            Hero: {
                hp: 30,
                blueMana: 10,
                deathEssence: 10
            }
        }
    }

}
</script>

<style>
    .heroContainer {
        position: relative;

        justify-content: center;
        display: flex;
        width: 100%;
        height: 10vh;
    }

    .player {
        justify-content: center;
        display: flex;

        position: relative;

        padding-top: 5vh;

        width: 25%;
        height: 10vh;
    }

    .heroHpTop {
        color: white;

        position: absolute;
        bottom: .5vh;

        width: 25px;
        height: 25px;
    }

    .heroHpBottom {
        color: white;

        position: absolute;
        bottom: 6.5vh;

        width: 25px;
        height: 25px;
    }

    .heroBlueManaTop {
        color: white;

        position: absolute;
        left: 3.7vw;
        bottom: 3.4vh;

        width: 25px;
        height: 25px;
    }

    .heroBlueManaBottom {
        color: white;

        position: absolute;
        right: 3.7vw;
        bottom: 3.4vh;

        width: 25px;
        height: 25px;
    }

    .heroDeathEssenceTop {
        color: white;

        position: absolute;
        right: 4.1vw;
        bottom: 3.6vh;

        width: 25px;
        height: 25px;
    }

    .heroDeathEssenceBottom {
        color: white;

        position: absolute;
        left: 4vw;
        bottom: 3.1vh;

        width: 25px;
        height: 25px;
    }
</style>
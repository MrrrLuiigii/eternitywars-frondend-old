<template>
  <div
    v-bind:class="[topPlayer ? heroContainerTop : heroContainerBottom]"
    v-if="index === 0"
  >
    <div v-bind:class="[topPlayer ? heroHpTop : heroHpBottom]">
      {{ gameState.connectedPlayers[index].hero.hp }}
    </div>
    <div v-bind:class="[topPlayer ? heroBlueManaTop : heroBlueManaBottom]">
      {{ gameState.connectedPlayers[index].hero.mana }}
    </div>
    <div
      v-bind:class="[topPlayer ? heroDeathEssenceTop : heroDeathEssenceBottom]"
    >
      {{ gameState.connectedPlayers[index].hero.deathessence }}
    </div>
    <div v-bind:class="[topPlayer ? heroNameTop : heroNameBottom]">
      {{ gameState.connectedPlayers[index].username }}
    </div>
  </div>
  <div
    v-bind:class="[topPlayer ? heroContainerTop : heroContainerBottom]"
    v-else
    v-on:click="SelectHero(gameState.connectedPlayers[index].hero)"
  >
    <div v-bind:class="[topPlayer ? heroHpTop : heroHpBottom]">
      {{ gameState.connectedPlayers[index].hero.hp }}
    </div>
    <div v-bind:class="[topPlayer ? heroBlueManaTop : heroBlueManaBottom]">
      {{ gameState.connectedPlayers[index].hero.mana }}
    </div>
    <div
      v-bind:class="[topPlayer ? heroDeathEssenceTop : heroDeathEssenceBottom]"
    >
      {{ gameState.connectedPlayers[index].hero.deathessence }}
    </div>
    <div v-bind:class="[topPlayer ? heroNameTop : heroNameBottom]">
      {{ gameState.connectedPlayers[index].username }}
    </div>
  </div>
</template>

<script>
export default {
  name: "player",
  props: {
    index: Number,
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
      heroNameTop: "heroNameTop",
      heroNameBottom: "heroNameBottom",
      heroContainerTop: "heroContainerTop",
      heroContainerBottom: "heroContainerBottom",
      AttackHeroMessage: {
        Subject: null,
        Action: null,
        Content: null,
        CardToAttackHeroWith: null,
        Hero: null
      }
    };
  },
  computed: {
    gameState() {
      return this.$store.getters.getGame;
    },
    getSelectedCardSlotOnYourField() {
      return this.$store.getters.getSelectedCardSlotOnYourField;
    },
    getSelectedHeroToAttack() {
      return this.$store.getters.getSelectedHeroToAttack;
    }
  },
  methods: {
    SelectHero(hero) {
      if (this.SelectedCardSlotOnYourField !== null) {
        const data = { hero };
        this.$store.dispatch("SelectedHeroToAttack", data);
        this.AttackHero();
      }
    },
    AttackHero() {
      this.AttackHeroMessage.Content = this.gameState;
      this.AttackHeroMessage.Subject = "GAME";
      this.AttackHeroMessage.Action = "ATTACKHERO";
      this.AttackHeroMessage.CardToAttackHeroWith = this.getSelectedCardSlotOnYourField;
      this.AttackHeroMessage.Hero = this.getSelectedHeroToAttack;
      this.$socket.send(JSON.stringify(this.AttackHeroMessage));
      this.$store.dispatch("SelectedHeroToAttack", null);
      this.$store.dispatch("SelectedTargetToAttack", null);
    }
  }
};
</script>

<style>
.heroContainerTop {
  position: absolute;
  top: 26.5vh;
  left: 25vw;

  justify-content: center;
  display: flex;

  padding-top: 3vh;

  width: 36vw;
  height: 7.5vh;
}

.heroContainerBottom {
  position: absolute;
  bottom: 26.5vh;
  right: 25vw;

  justify-content: center;
  display: flex;

  width: 36vw;
  height: 7.5vh;
}

.heroNameTop {
  color: white;

  position: absolute;
  top: 0;
  left: 0;
}

.heroNameBottom {
  color: white;

  position: absolute;
  bottom: 0;
  right: 0;
}

.heroHpTop {
  color: white;

  position: absolute;
  bottom: 0;
  right: 10.2vw;

  width: 25px;
  height: 25px;
}

.heroHpBottom {
  color: white;

  position: absolute;
  top: 0;
  left: 10.2vw;

  margin-top: -0.6vh;

  width: 25px;
  height: 25px;
}

.heroBlueManaTop {
  color: white;

  position: absolute;
  left: 16vw;
  top: 2vh;

  width: 25px;
  height: 25px;
}

.heroBlueManaBottom {
  color: white;

  position: absolute;
  right: 16vw;
  bottom: 2vh;

  width: 25px;
  height: 25px;
}

.heroDeathEssenceTop {
  color: white;

  position: absolute;
  right: 2.4vw;
  top: 1.5vh;

  width: 25px;
  height: 25px;
}

.heroDeathEssenceBottom {
  color: white;

  position: absolute;
  left: 2.3vw;
  bottom: 1.8vh;

  width: 25px;
  height: 25px;
}
</style>

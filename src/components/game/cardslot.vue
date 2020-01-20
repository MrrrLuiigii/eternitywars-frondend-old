<template>
  <div v-if="handSlot">
    <div
      class="cardSlot"
      v-if="
        gameState.connectedPlayers[playerIndexData].cardsInHand[
          cardSlotIndexData
        ] !== undefined
      "
      v-on:click="SelectCard(cardSlotIndexData)"
      v-on:click.right="SelectCard(null)"
    >
      <card
        v-if="playerIndexData === 0"
        v-bind:card="
          gameState.connectedPlayers[playerIndexData].cardsInHand[
            cardSlotIndexData
          ]
        "
        v-bind:inHand="true"
        v-bind:onField="false"
        v-bind:hasTaunt="gameState.connectedPlayers[playerIndexData].cardsInHand[
            cardSlotIndexData
          ].taunt"
      />
      <cardback v-else />
    </div>
    <div class="cardSlot" v-else></div>
  </div>

  <div v-else>
    <div v-if="playerIndexData === 0">
      <div
        class="cardSlot"
        v-if="
          gameState.connectedPlayers[playerIndexData].boardRow.cardSlotList[
            cardSlotIndexData
          ].card !== null
        "
        v-on:click="SelectCardOnYourField(cardSlotIndex)"
      >
        <card
          v-bind:card="
            gameState.connectedPlayers[playerIndexData].boardRow.cardSlotList[
              cardSlotIndexData
            ].card
          "
          v-bind:inHand="false"
          v-bind:onField="true"
                  v-bind:hasTaunt="gameState.connectedPlayers[playerIndexData].boardRow.cardSlotList[
              cardSlotIndexData
            ].card.taunt"
        />
      </div>
      <div
        class="cardSlot"
        v-else
        v-on:click="SelectEmptyYourField(cardSlotIndexData)"
      ></div>
    </div>
    <div v-else>
      <div
        class="cardSlot"
        v-if="
          gameState.connectedPlayers[playerIndexData].boardRow.cardSlotList[
            cardSlotIndexData
          ].card !== null
        "
        v-on:click="SelectTargetToAttack(cardSlotIndexData)"
        v-on:click.right="SelectTargetToAttack(null)"
      >
        <card
          v-bind:card="
            gameState.connectedPlayers[playerIndexData].boardRow.cardSlotList[
              cardSlotIndexData
            ].card
          "
           v-bind:inHand="false"
          v-bind:onField="true"
          v-bind:hasTaunt="gameState.connectedPlayers[playerIndexData].boardRow.cardSlotList[
              cardSlotIndexData
            ].card.taunt"
        />
      </div>
      <div class="cardSlot" v-else></div>
    </div>
  </div>
</template>

<script>
import card from "@/components/game/card.vue";
import cardback from "@/components/game/cardback.vue";

export default {
  name: "cardslot",
  components: {
    card,
    cardback
  },
  props: ["handSlot", "cardSlotIndex", "playerIndex"],
  data() {
    return {
      handSlotData: this.handSlot,
      cardSlotIndexData: this.cardSlotIndex,
      playerIndexData: this.playerIndex,
      PlayMessage: {
        Subject: null,
        Action: null,
        Content: null,
        CardToPlay: null,
        SpotToPlace: null
      },
      AttackMessage: {
        Subject: null,
        Action: null,
        Content: null,
        CardToAttackWith: null,
        TargetToAttack: null
      },
      attackSound: null,
    };
  },
  created(){
    this.attackSound = new Audio("");
  },
  computed: {
    gameState() {
      return this.$store.getters.getGame;
    },
    getSelectedCardInHand() {
      return this.$store.getters.getSelectedCardInHand;
    },
    getSelectedEmptyCardSlotOnYourField() {
      return this.$store.getters.getSelectedEmptyCardSlotOnYourField;
    },
    getSelectedCardSlotOnYourField() {
      return this.$store.getters.getSelectedCardSlotOnYourField;
    },
    getSelectedTargetToAttack() {
      return this.$store.getters.getSelectedTargetToAttack;
    }
  },
  methods: {
    SelectCard(index) {
      this.$store.dispatch("SelectCardInHand", index);
    },
    SelectEmptyYourField(index) {
      if (this.getSelectedCardInHand !== null) {
        this.$store.dispatch("SelectedEmptyCardSlotOnYourField", index);
        this.TryToPlayCard();
      }
    },
    SelectCardOnYourField(index) {
      this.$store.dispatch("SelectedCardSlotOnYourField", index);
    },
    SelectTargetToAttack(index) {
      if (this.getSelectedCardSlotOnYourField !== null) {
        this.$store.dispatch("SelectedTargetToAttack", index);
        this.AttackOpponentsCard();
      }
    },
    TryToPlayCard() {
      this.PlayMessage.Content = this.gameState;
      this.PlayMessage.Subject = "GAME";
      this.PlayMessage.Action = "PLACECARD";
      this.PlayMessage.CardToPlay = this.getSelectedCardInHand;
      this.PlayMessage.SpotToPlace = this.getSelectedEmptyCardSlotOnYourField;
      this.$socket.send(JSON.stringify(this.PlayMessage));
      this.$store.dispatch("SelectedEmptyCardSlotOnYourField", null);
      this.$store.dispatch("SelectCardInHand", null);
    },
    AttackOpponentsCard() {
      this.AttackMessage.Content = this.gameState;
      this.AttackMessage.Subject = "GAME";
      this.AttackMessage.Action = "ATTACKWITHCARD";
      this.AttackMessage.CardToAttackWith = this.getSelectedCardSlotOnYourField;
      this.AttackMessage.TargetToAttack = this.getSelectedTargetToAttack;
      this.$socket.send(JSON.stringify(this.AttackMessage));
      this.$store.dispatch("SelectedCardSlotOnYourField", null);
      this.$store.dispatch("SelectedTargetToAttack", null);
    }
  }
};
</script>

<style>
.cardSlot {
  float: left;

  margin: 0 8.6px 0 8.6px;

  width: 5vw;
  height: 12vh;
}
</style>

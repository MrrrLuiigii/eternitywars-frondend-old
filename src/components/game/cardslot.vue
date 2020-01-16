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
      @mouseleave="mouseLeave"
      @mouseover="mouseOver"
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
      />
      <cardback v-else />
      <hovercard
        class="hoverCard"
        v-show="hoverActive"
        :card="
          gameState.connectedPlayers[playerIndexData].boardRow.cardSlotList[
            cardSlotIndexData
          ].card
        "
      />
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
        @mouseleave="mouseLeave"
        @mouseover="mouseOver"
      >
        <card
          v-bind:card="
            gameState.connectedPlayers[playerIndexData].boardRow.cardSlotList[
              cardSlotIndexData
            ].card
          "
          v-bind:inHand="false"
          v-bind:onField="true"
        />
        <hovercard
          class="hoverCard"
          v-show="hoverActive"
          :card="
            gameState.connectedPlayers[playerIndexData].boardRow.cardSlotList[
              cardSlotIndexData
            ].card
          "
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
        @mouseleave="mouseLeave"
        @mouseover="mouseOver"
      >
        <card
          v-bind:card="
            gameState.connectedPlayers[playerIndexData].boardRow.cardSlotList[
              cardSlotIndexData
            ].card
          "
          v-bind:inHand="false"
          v-bind:onField="true"
        />
        <hovercard
          class="hoverCard"
          v-show="hoverActive"
          :card="
            gameState.connectedPlayers[playerIndexData].boardRow.cardSlotList[
              cardSlotIndexData
            ].card
          "
        />
      </div>
      <div class="cardSlot" v-else></div>
    </div>
  </div>
</template>

<script>
import card from "@/components/game/card.vue";
import cardback from "@/components/game/cardback.vue";
import hovercard from "@/components/deckbuilder/collectionCard";
export default {
  name: "cardslot",
  components: {
    card,
    cardback,
    hovercard
  },
  props: ["handSlot", "cardSlotIndex", "playerIndex"],
  data() {
    return {
      hoverActive: false,
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
      }
    };
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
    mouseOver() {
      this.hoverActive = true;
      console.log("hovveeerrrrrrrrrrrrrrrrrr");
    },
    mouseLeave() {
      this.hoverActive = false;
    },
    SelectCard(index) {
      if (index !== null) {
        this.$store.dispatch("SelectCardInHand", index);
      } else {
        this.$store.dispatch("SelectCardInHand", null);
      }
    },
    SelectEmptyYourField(index) {
      if (this.getSelectedCardInHand !== null) {
        this.$store.dispatch("SelectedEmptyCardSlotOnYourField", index);
        this.TryToPlayCard();
      }
    },
    SelectCardOnYourField(index) {
      if (index !== null) {
        this.$store.dispatch("SelectedCardSlotOnYourField", index);
        //check if card has already attacked. backend needs a boolean
      } else {
        this.$store.dispatch("SelectedCardSlotOnYourField", null);
      }
    },
    SelectTargetToAttack(index) {
      if (index !== null) {
        console.log(index);
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
      console.table(this.PlayMessage);
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
      console.table(this.AttackMessage);
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

.hoverCard {
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1.5);

  margin-left: -30vw;
}
</style>

<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <button
          :disabled="disabled"
          v-bind:class="[ disabled ? disabledButton : enabledButton ]"
          class="artXButton createDeckButton"
          v-on="on"
        >
          Create Deck
        </button>
      </template>

      <v-card class="createDeckForm">
        <div>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <input
                    class="artXButton deckFormInput"
                    v-model="deck.name"
                    placeholder="Name"
                    required
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </div>

        <div>
          <v-card-actions>
            <v-spacer></v-spacer>
            <button class="artButton" text @click="dialog = false">
              Cancel
            </button>
            <button class="artButton" text @click="addDeck">Create</button>
          </v-card-actions>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "deckForm",
  props: ["disabled"],
  data() {
    return {
      deck: {
        name: ""
      },
      wsMessage: {
        Subject: null,
        Action: null,
        Content: null,
        Token: null
      },
      dialog: false,
      disabledButton: "disabledButton",
      enabledButton: "enabledButton"
    };
  },
  methods: {
    async addDeck() {
      if (this.deck.name === "") {
        this.$toasted.show("Your deck needs a name first.", {
          theme: "toasted-primary",
          position: "bottom-right",
          duration: 2500
        });
      } else {
        this.dialog = false;
        this.wsMessage.Subject = "DECK";
        this.wsMessage.Action = "ADDDECK";
        this.wsMessage.Content = this.$store.getters.getPlayerInfo;
        this.wsMessage.Content.deck = this.deck;
        this.wsMessage.Token = await this.$auth.getTokenSilently();
        this.$socket.send(JSON.stringify(this.wsMessage));
        this.deck.name = "";
      }
    }
  }
};
</script>

<style>
.createDeckButton {
  margin-top: 1vh;
}

.createDeckForm {
  background-color: #3a5248 !important;
}

.deckFormInput {
  width: 90%;
}

.disabledButton {
    opacity: 0.4;
    filter: alpha(opacity=40);
}
</style>

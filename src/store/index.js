import Vue from "vue";
import Vuex from "vuex";

import chatModule from "./chatModule";
import playerModule from "./playerModule";
import friendModule from "./friendModule";
import lobbyModule from "./lobbyModule";
import websocketModule from "./websocketModule";
import gameModule from "./gameModule";
import gamePlayerModule from "./gamePlayerModule";
import deckBuilderModule from "./deckBuilderModule";
import gameModule from './gameModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    chatModule: chatModule,
    playerModule: playerModule,
    friendModule: friendModule,
    lobbyModule: lobbyModule,
    websocketModule: websocketModule,
    gameModule: gameModule,
    gamePlayerModule: gamePlayerModule,
    deckBuilderModule: deckBuilderModule,
    gameModule: gameModule,
  }
});

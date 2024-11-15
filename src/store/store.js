import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
  state: () => ({
    player1Name: '',    // Nome del Giocatore 1
    player2Name: '',    // Nome del Giocatore 2
    player1Color: '',   // Colore scelto per il Giocatore 1
    player2Color: '',   // Colore scelto per il Giocatore 2
  }),
  actions: {
    setPlayers(player1Name, player2Name, player1Color, player2Color) {
      this.player1Name = player1Name;
      this.player2Name = player2Name;
      this.player1Color = player1Color;
      this.player2Color = player2Color;
    },
  },
});
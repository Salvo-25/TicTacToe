<script setup>
import { ref } from 'vue'
import { useGameStore } from '@/store/store';
import { storeToRefs } from 'pinia'; // Per fare il destructuring delle store

// Stato del gioco
const board = ref(Array(9).fill(''))  // Le celle del gioco
const currentPlayer = ref('X')        // Chi sta giocando, 'X' o 'O'
const player1Wins = ref(0)            // Numero vittorie Giocatore 1
const player2Wins = ref(0)            // Numero vittorie Giocatore 2
const gameOver = ref(false)           // Stato del gioco, se è finito
const winner = ref('')                // Giocatore vincente

const store = useGameStore(); // Usa lo store
const { player1Name, player2Name, player1Color, player2Color } = storeToRefs(store); // Riferimenti reattivi dallo store



// Funzione per fare una mossa
const makeMove = (index) => {
  if (board.value[index] === '' && !gameOver.value) {
    board.value[index] = currentPlayer.value
    if (checkWin(currentPlayer.value)) {
      // Incrementa il contatore delle vittorie
      if (currentPlayer.value === 'X') {
        player1Wins.value++
        winner.value = `${player1Name.value} (X)`
      } else {
        player2Wins.value++
        winner.value = `${player2Name.value} (O)`
      }
      gameOver.value = true
      setTimeout(resetGame, 2000) // Resetta automaticamente dopo 2 secondi
    } else {
      // Cambia giocatore
      currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X'
    }
  }
}

// Funzione per verificare la vittoria
const checkWin = (player) => {
  // Combinazioni vincenti
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Orizzontali
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticali
    [0, 4, 8], [2, 4, 6]             // Diagonali
  ]
  
  // Controlla se una delle combinazioni vincenti è completata dal giocatore
  return winPatterns.some(pattern => 
    pattern.every(index => board.value[index] === player)
  )
}

// Funzione per resettare il gioco
const resetGame = () => {
  board.value = Array(9).fill('')
  currentPlayer.value = 'X'
  gameOver.value = false
  winner.value = ''
}
</script>


<template>
    <div class="min-h-screen bg-gray-50 text-gray-800 flex flex-col lg:flex-row">
      <div class="flex flex-1 flex-col lg:flex-row">
        <!-- Sidebar con ombra e dimensioni responsivi -->
        <aside class="bg-gray-100 w-full lg:w-64 lg:h-64 p-6 border-b lg:border-r-2 border-gray-200 shadow-lg">
          <h2 class="text-xl font-bold mb-4">Giocatori</h2>
          <div class="mb-6">
            <p class="text-lg font-semibold" :style="{color: player1Color}" >{{ player1Name }} (X)</p>
            <p class="text-3xl text-blue-500":style="{color: player1Color}" >{{ player1Wins }} </p>
          </div>
          <div class="mb-6">
            <p class="text-lg font-semibold" :style="{color: player2Color}" > {{ player2Name }}(O)</p>
            <p class="text-3xl text-red-500" :style="{color: player2Color}" > {{ player2Wins }}</p>
          </div>
        </aside>
  
        <!-- Griglia di gioco -->
        <main class="flex-1 flex items-center justify-center p-4">
          <div class="grid grid-cols-3 gap-0 w-full max-w-md aspect-square border-2 border-black">
            <div v-for="(cell, index) in board" :key="index" @click="makeMove(index)" 
              class="w-full h-full flex items-center justify-center border-2 border-black hover:bg-gray-200 cursor-pointer"
              :style="{
              backgroundColor: cell === 'X' ? player1Color : cell === 'O' ? player2Color : ''
            }">
              <span class="text-4xl font-bold text-white">{{ cell }}</span>
            </div>
          </div>
        </main>
      </div>
  
      <!-- Pop-up di vittoria -->
      <div v-if="gameOver" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white p-8 rounded-lg text-center shadow-lg">
          <h2 class="text-2xl font-bold mb-4">Vittoria!</h2>
          <p class="text-xl">{{ winner }} ha vinto!</p>
        </div>
      </div>
    </div>
  </template>
  

  
<script setup>
import { ref } from 'vue';
import { useGameStore } from '@/store/store';
import { useRouter } from 'vue-router';

const router = useRouter();


const store = useGameStore(); // Usa lo store

// Definisci i dati per i nomi dei giocatori e i colori
const player1Name = ref('');
const player1Color = ref('pink'); // Colore predefinito
const player2Name = ref('');
const player2Color = ref('red'); // Colore predefinito

// Funzione per impostare i giocatori nel Pinia store e navigare al gioco
const handleSubmit = () => {
  store.setPlayers(player1Name.value, player2Name.value, player1Color.value, player2Color.value); // Passa i dati al Pinia store
  // Naviga alla pagina di gioco, ad esempio usando Vue Router
  router.push('/game');
};
</script>

<template>
    <div class="container m-auto max-w-2xl py-24 bg">
        <div class="bg-blue-900 px-6 py-8 mb-4 shadow-md rounded-md border-blue-300 m-4 md:m-0">    
            <form @submit.prevent="handleSubmit">
                <h2 class="text-3xl text-center font-semibold mb-6">Player One</h2>

                    <div class="mb-4">
                    <label for="player1Name" class="block font-bold mb-2">Player Name</label>
                    <input v-model="player1Name" type="text" id="player1Name" class="border rounded w-full py-2 px-3 mb-2" placeholder="Insert your name" required/>
                    </div> 

                    <div class="mb-4">
                    <label for="player1Color" class="block font-bold mb-2">Select your color</label>
                    <select v-model="player1Color" id="player1Color"class="border rounded w-full py-2 px-3" required>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="pink">Pink</option>
                    </select>
                    </div>
            
                <h2 class="text-3xl text-center font-semibold mb-6">Player Two</h2>

                    <div class="mb-4">
                    <label for="player2Name" class="block font-bold mb-2">Player Name</label>
                    <input v-model="player2Name" type="text" id="player2Name" class="border rounded w-full py-2 px-3 mb-2" placeholder="Insert your name" required/>
                    </div> 

                    <div class="mb-4">
                    <label for="player2Color" class="block font-bold mb-2">Select your color</label>
                    <select v-model="player2Color" id="player2Color" class="border rounded w-full py-2 px-3" required>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="pink">Pink</option>
                    </select>
                    </div>
                    <button class="bg-red-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full" type="submit">
                        Start Game
                    </button>
            </form>
            
        </div>
    </div>
</template>
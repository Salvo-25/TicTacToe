<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <header class=" flex items-center justify-evenly h-20 bg-blue-900 border-b border-blue-600"> 
        <RouterLink to="/">
            <img class="h-12 w-12" src="../assets/img/logo.png" alt="logo">
        </RouterLink>
        <h1 class="text-5xl">Tic Tac Toe</h1>
       
     </header>
</template>

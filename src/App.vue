<script setup>
import ClosingSection from './components/ClosingSection.vue';
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <Header></Header>
    <RouterView/>
    <ClosingSection/>
</template>
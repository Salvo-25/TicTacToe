import { createRouter, createWebHistory } from "vue-router";
import FormPlayer from "@/components/FormPlayer.vue";
import GamePage from "@/components/GamePage.vue";
// import NotFoundView from "@/views/NotFoundView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '',
            name: 'home',
            component: FormPlayer,
        },
        {
            path: '/game',
            name: 'gamePage',
            component: GamePage
        },
        // {
        //     path: '/:catchAll(.*)',
        //     name: 'not-founde',
        //     component: NotFoundView,
        // },
    
    ],
});

export default router;
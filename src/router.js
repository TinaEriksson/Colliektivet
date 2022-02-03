import { createRouter, createWebHistory } from "vue-router";
import DogBordingHouse from "./pages/BordingHouse.vue";
import DogDaycare from "./pages/DogDaycare.vue";
import DogShop from "./pages/DogShop.vue";
import StartPage from './pages/StartPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/start'},
    {path: '/start', component: StartPage},
    { path: "/bording", component: DogBordingHouse },
    { path: "/daycare", component: DogDaycare },
    { path: "/shop", component: DogShop },
  ],
});

export default router;

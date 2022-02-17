import { createRouter, createWebHistory } from "vue-router";
import DogBordingHouse from "./pages/BordingHouse.vue";
import DogDaycare from "./pages/DogDaycare.vue";
import DogShop from "./pages/DogShop.vue";
import StartPage from "./pages/StartPage.vue";
import ProductsList from './pages/ProductsList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: StartPage },
    { path: "/bordinghouse", component: DogBordingHouse },
    { path: "/daycare", component: DogDaycare },
    { path: "/shop", component: DogShop },
    { path: "/products", component: ProductsList },
  ],
});

export default router;

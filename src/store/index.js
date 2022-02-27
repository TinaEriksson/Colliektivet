/* This indexfile is for the store */
import { createStore } from "vuex";
import productsModule from "./modules/product.js";

const store = createStore({
  modules: {
    prods: productsModule,
  },
});

export default store;

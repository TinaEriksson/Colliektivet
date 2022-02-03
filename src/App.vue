<template>
  <the-header></the-header>
  <div class="container">
    <div>
      <router-view></router-view>
    </div>
  </div>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/nav/TheHeader.vue";
import TheFooter from "./components/footer/TheFooter.vue";
export default {
  components: { TheHeader, TheFooter },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

body {
  margin: 0;
  font-family: "poppins", "sons-serif";
}

h1 {
  text-align: center;
  font-size: 2rem;
}
.container {
  padding: 0.5em;
  min-height: 53vh;
}

section {
   box-shadow: 0 0 6px rgb(77, 54, 54);
   padding: 0.5em;
   margin: 1em 0;
}
</style>

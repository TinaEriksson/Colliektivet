<template>
  <the-header></the-header>
  <div class="container">
      <router-view></router-view>
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

body, html {
  margin: 0;
  padding: 0;
  font-family: "poppins", "sons-serif";
} 
.container {
  display: grid;
  grid-template-columns: 2fr 1fr ;
  gap: 2em;
  min-height: 55vh;
  padding: 1em;
}
section {
  padding: 1em;
  box-shadow: 0 0 6px rgb(77, 54, 54);
  margin: 2em 0;
}

@media only screen and (max-width: 800px) {
  h1 {
    text-align: center;
    font-size: 2rem;
  }
  .container {
    padding: 0.5em;
    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-columns: none;
    min-height: 53vh;
  }

  section {
    box-shadow: 0 0 6px rgb(77, 54, 54);
    padding: 1em;
    margin: 1em 0;
  }
}
</style>

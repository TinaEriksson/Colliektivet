<template>
  <the-header></the-header>
  <router-view></router-view>
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

body,
html {
  margin: 0;
  padding: 0;
  font-family: "poppins", "sons-serif";
}
.container {
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  gap: 1em;
  min-height: 55vh;
  padding: 1em;
}
section {
  padding: 1em;
  margin: 2em 1em;
  box-shadow: 0 0 3px #362706;
  border-radius: 0.5em;
}
.pageImage img {
  height: auto;
  width: auto;
}
@media only screen and (max-width: 1200px) {
  h2 {
    font-size: 1.5rem;
  }
  .container {
    display: grid;
    grid-template-rows: 2fr 2fr;
    grid-template-columns: none;
    min-height: 53vh;
    padding: 0;
  }

  section {
    padding: 1em;
    margin: 2em auto;
    box-shadow: 0 0 4px #362706;
    width: 94%;
  }
}

@media only screen and (max-width: 800px) {
  h2 {
    font-size: 1.5rem;
  }
  .container {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: none;
    min-height: 53vh;
    padding: 0;
  }

  section {
    padding: 1em;
    margin: 0 auto;
    box-shadow: none;
    width: 94%;
  }
}
</style>

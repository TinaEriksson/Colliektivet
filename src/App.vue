<template>
  <the-header></the-header>
  <div class="container">
    <section>
      <router-view></router-view>
    </section>
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

body {
  margin: 0;
  font-family: 'poppins', 'sons-serif';
}

h1 {
  text-align: center;
  font-size: 2rem;
}
.container {
  padding: 0.5em;
}
</style>

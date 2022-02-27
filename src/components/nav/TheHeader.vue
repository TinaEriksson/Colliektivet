<!-- The header component-->
<template>
  <header>
    <nav>
      <hamburger-button @toggleMenu="toggleMenu"></hamburger-button>
    </nav>
    <the-menu
      @toggleMenu="toggleMenu"
      :class="{ animate: activateClass }"
    ></the-menu>
    <div class="logoContainer">
      <img src="../../../assets/logo.svg" alt="logo" />
    </div>
    <h1>HUNDDAGIS & HUNDPENSIONAT</h1>
  </header>
</template>

<script>
import HamburgerButton from "./HamburgerButton.vue";
import TheMenu from "./TheMenu.vue";
export default {
  components: {
    HamburgerButton,
    TheMenu,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  /* Method to toggle menu. */
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
  /* A method that activates class if menu is open.*/
  computed: {
    activateClass() {
      return this.isOpen;
    },
  },
};
</script>

<!-- Styling for the header component. -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@300&display=swap');
header {
      background: #e9e5d6;
      padding: 1em;
}

.logoContainer {
  height: 20vh;
  width: 20vh;
  margin: 0 auto;
}
h1 {
  text-align: center;
  margin: 0; 
  color: rgb(56, 43, 43);
  font-family: 'Dosis', sans-serif;
}
img {
  height: 100%;
  width: 100%;
  text-align: center;
}

/* Styling if screen width is less than 800 px*/
@media only screen and (max-width: 800px) {
  nav {
    padding: 2em 2em 0 0;
    display: flex;
    justify-content: flex-end;
  }
}
</style>

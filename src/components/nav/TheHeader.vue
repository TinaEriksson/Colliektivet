<template>
  <header>
    <nav>
      <hamburger-button @toggleMenu="toggleMenu"></hamburger-button>
    </nav>
    <the-menu :class="{ animate: activateClass }"></the-menu>
    <div class="logoContainer">
      <img src="../../../assets/logo.svg" alt="logo" />
    </div>
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
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
  computed: {
    activateClass() {
      return this.isOpen;
    },
  },
};
</script>

<style scoped>
.logoContainer {
  height: 30vh;
  width: 30vh;
  margin: 0 auto;
}

img {
  height: 100%;
  width: 100%;
  text-align: center;
}

@media only screen and (max-width: 800px) {
  header {
    background-color: #94B28D;
    box-shadow: 0px 6px 5px 0px rgba(0,0,0,0.42);
  }

  nav {
    padding: 2em 2em 0 0;
    display: flex;
    justify-content: flex-end;
  }
}
</style>

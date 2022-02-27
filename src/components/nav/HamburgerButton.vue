    <!-- A component for the hamburger-button -->
<template>
  <div class="hamburger" @click="toggleMenu">
    <div class="line line1"></div>
    <div class="line line2"></div>
    <div class="line line3"></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      open: false,
    };
  },
  /* Method to emit toggle function when button is pressed.*/
  methods: {
    toggleMenu() {
      this.$emit("toggleMenu");
    },
  },
};
</script>

<!-- Styling for the hamburger-button -->
<style scoped>
@media only screen and (max-width: 800px) {
  .hamburger {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .line {
    width: 100%;
    height: 5px;
    background: #362706;
    margin-bottom: 6px;
  }
}
</style>

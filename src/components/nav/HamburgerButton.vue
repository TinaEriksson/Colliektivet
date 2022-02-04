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
  methods: {
    toggleMenu() {
      this.$emit("toggleMenu");
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 800px) {
  .hamburger {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .line {
    width: 100%;
    height: 6px;
    background: #4d3d2d;
    margin-bottom: 5px;
  }
}
</style>

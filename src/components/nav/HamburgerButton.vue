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
      this.$emit('toggleMenu');
    }
  }
};
</script>

<style scoped>
.hamburger {
  width: 45px;
  height: 45px;
  cursor: pointer;
}

.line {
  width: 100%;
  height: 6px;
  background: teal;
  margin-bottom: 9px;
}
</style>

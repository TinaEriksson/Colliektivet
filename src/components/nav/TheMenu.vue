<!--component for the menu -->
<template>
  <div @click="closeMenu" class="menuContainer">
    <ul class="menuList">
      <router-link class="link" to="/home"><i class="fas fa-home"></i> Hem</router-link>
      <router-link class="link" to="/daycare"
        ><i class="fas fa-paw"></i> Dagis</router-link
      >
      <router-link class="link" to="/bordinghouse"
        ><i class="fas fa-dog"></i> Pensionat</router-link
      >
      <router-link class="link" to="/shop">
        <i class="fas fa-shopping-basket"></i> Butik</router-link
      >
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  /* Method that emits the toggle function on the menu*/
  methods: {
    closeMenu() {
      this.$emit('toggleMenu');
    },
  }
};
</script>

<!-- Styling for the menu component-->
<style scoped>
.menuList {
  margin: 0;
  padding: 1em;
  display: flex;
  flex-direction: row;
  column-gap: 2em;
}
.link {
  font-size: 1.4rem;
  color: #4d3d2d;
  text-decoration: none;
}
.link:hover,
.link:active,
.link.router-link-active {
  color: #8f6565;
  text-decoration: underline;
}

/* Styling if screen width is less than 800px*/
@media only screen and (max-width: 800px) {
  .animate {
    animation: menu 0.6s forwards;
  }
  @keyframes menu {
    from {
      left: -100%;
      opacity: 0;
    }
    to {
      left: 0;
      opacity: 1;
    }
  }
  .menuContainer {
    width: 100%;
    height: 100%;
    left: -100%;
    position: absolute;
    transition: all 0.6s ease-in-out;
    display: block;
    background: white;
  }

  .menuList {
    list-style: none;
    margin: 0;
    padding: 1.5em;
    display: flex;
    flex-direction: column;
    row-gap: 1.5em;
  }

  .link {
    font-size: 1.7rem;
    width: 100%;
  }

  .menuList a {
    text-decoration: none;
    color: #362706;
    font-weight: bold;
  }
}
</style>

<template>
  <div class="menuContainer">
    <ul class="menuList">
      <li><router-link to="/daycare">Dagis</router-link></li>
      <li><router-link to="/bording">Pensionat</router-link></li>
      <li><router-link to="/shop">Butik</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
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
  min-height: 20vh;
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

.menuList li {
  font-size: 1.8rem;
}

.menuList a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
}
</style>

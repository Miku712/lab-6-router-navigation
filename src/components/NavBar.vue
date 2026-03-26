<template>
  <nav class="nav">
    <router-link to="/" class="link" exact>Home</router-link>
    <router-link to="/catalog" class="link">Catalog</router-link>
    <router-link to="/about" class="link">About</router-link>
    <router-link to="/profile/info" class="link">Profile</router-link>
  </nav>
</template>

<style scoped>
.nav {
  margin-bottom: 20px;
}
.link {
  margin-right: 15px;
  text-decoration: none;
  color: #0369a1;
  font-weight: 500;
}
.router-link-active {
  font-weight: bold;
  color: #0284c7;
}
</style>
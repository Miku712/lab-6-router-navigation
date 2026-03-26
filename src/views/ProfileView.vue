<template>
  <div>
    <h2>Profile</h2>
    <nav class="profile-nav">
      <router-link to="/profile/info" class="link">Info</router-link>
      <router-link to="/profile/settings" class="link">Settings</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
.profile-nav {
  margin-bottom: 20px;
}
.link {
  margin-right: 15px;
  text-decoration: none;
  color: #0369a1;
}
.router-link-active {
  font-weight: bold;
  color: #0284c7;
}
</style>
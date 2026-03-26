<template>
  <div style="text-align: center; margin-top: 50px;">
    <h1>404 - Сторінка не знайдена</h1>
    <p>Шлях не існує.</p>
    <div style="margin-top: 20px;">
      <router-link to="/">
        <button>На головну</button>
      </router-link>
      <button @click="goBack" style="margin-left: 10px;">Назад</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goBack() {
  router.back()
}
</script>

<style scoped>
h1 {
  color: #0369a1;
  font-size: 2rem;
  margin-bottom: 10px;
}
p {
  color: #075985;
  font-size: 1.2rem;
}
button {
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  background-color: #0284c7;
  color: white;
  cursor: pointer;
  font-weight: 600;
}
button:hover {
  background-color: #0369a1;
}
</style>
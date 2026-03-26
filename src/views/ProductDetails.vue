<template>
  <div class="product-details">
    <h2>Деталі товару</h2>

    <div v-if="product">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>

      <button @click="goBack">Назад до каталогу</button>
    </div>

    <div v-else>
      <p>Товар не знайдено.</p>
      <router-link to="/catalog">
        <button>Назад до каталогу</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const products = [
  { id: 1, name: 'Товар 1', description: 'Опис товару 1' },
  { id: 2, name: 'Товар 2', description: 'Опис товару 2' },
  { id: 3, name: 'Товар 3', description: 'Опис товару 3' },
  { id: 4, name: 'Товар 4', description: 'Опис товару 4' },
  { id: 5, name: 'Товар 5', description: 'Опис товару 5' },
]

const productId = parseInt(route.params.id)
const product = products.find(p => p.id === productId)

function goBack() {
  router.push('/catalog')
}
</script>

<style scoped>
.product-details {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #e0f2ff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.product-details h2 {
  color: #0369a1;
  margin-bottom: 20px;
  text-align: center;
}

.product-details h3 {
  color: #0284c7;
  margin-bottom: 10px;
}

.product-details p {
  color: #075985;
  margin-bottom: 20px;
}

.product-details button {
  padding: 10px 18px;
  background-color: #0284c7;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}

.product-details button:hover {
  background-color: #0369a1;
  transform: translateY(-1px);
}
</style>
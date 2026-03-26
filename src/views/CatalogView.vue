<template>
  <div class="catalog">
    <h2>Каталог товарів</h2>
    <div class="product-list">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card"
      >
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <router-link :to="`/catalog/${product.id}`">
          <button>Деталі</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  { id: 1, name: 'Товар 1', description: 'Опис товару 1' },
  { id: 2, name: 'Товар 2', description: 'Опис товару 2' },
  { id: 3, name: 'Товар 3', description: 'Опис товару 3' },
  { id: 4, name: 'Товар 4', description: 'Опис товару 4' },
  { id: 5, name: 'Товар 5', description: 'Опис товару 5' },
])
</script>

<style scoped>
.catalog {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.catalog h2 {
  color: #0369a1;
  margin-bottom: 20px;
  text-align: center;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.product-card {
  background-color: #e0f2ff;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
}

.product-card h3 {
  color: #0284c7;
  margin-bottom: 8px;
}

.product-card p {
  color: #075985;
  margin-bottom: 12px;
  font-size: 0.95rem;
}

.product-card button {
  padding: 8px 14px;
  background-color: #0284c7;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}

.product-card button:hover {
  background-color: #0369a1;
  transform: translateY(-1px);
}
</style>
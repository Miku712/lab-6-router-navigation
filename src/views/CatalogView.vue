<script setup>
const products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Phone' },
  { id: 3, name: 'Tablet' },
  { id: 4, name: 'Headphones' },
  { id: 5, name: 'Camera' }
]
</script>

<template>
  <div>
    <h2>Catalog</h2>
    <ul>
      <li v-for="p in products" :key="p.id">
        <router-link :to="`/catalog/${p.id}`">{{ p.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
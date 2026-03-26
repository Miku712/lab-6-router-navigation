<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div>
    <h2>Product Details</h2>
    <p>Product ID: {{ route.params.id }}</p>
  </div>
</template>
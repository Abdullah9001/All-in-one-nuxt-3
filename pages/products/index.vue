<script setup>
useHead({
  title: "Products",
});
const {
  data: products,
  pending,
  error,
  refresh,
} = useFetch("https://fakestoreapi.com/products");

const refreshProduct = () => {
  refresh();
};
</script>

<template>
  <div class="fixed-200">
    <button @click="refreshProduct()">Refresh Product</button>
    <h1>All Products</h1>
    <h1 v-if="error">Oops, Error Enconuntered: {{ error }}</h1>
    <h1 v-if="pending">Loading....</h1>
    <div v-if="products">
      <div class="container" v-for="product in products">
        <div class="left-column">
          <h1>{{ product.id }}</h1>
          <img :src="product.image" alt="product image" class="img-70" />
        </div>
        <div class="right-column">
          <h1>{{ product.title }}</h1>
          <h3>{{ product.description }}</h3>
          <h3>Price: {{ product.price }}</h3>
          <NuxtLink :to="`/products/${product.id}`">See More</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: black;
  background-color: #fff;
  padding: 5px;
  font-weight: bold;
  text-decoration: none;
}
</style>

<template>
  <div class="fixed-200">
    <h1>Single Product</h1>
    <h1 v-if="error">Oops, Error Enconuntered: {{ error }}</h1>
    <h1 v-if="pending">Loading....</h1>
    <div v-if="product">
      <div class="container">
        <div class="left-column">
          <img :src="product.image" alt="product image" class="img-100" />
        </div>
        <div class="right-column">
          <h1>{{ product.title }}</h1>
          <h3>{{ product.description }}</h3>
          <h4>{{ product.category }}</h4>
          <h3>Price: {{ product.price }}</h3>

          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>

<template>
  <div>
    <nav>
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      <li><NuxtLink to="/products">Products</NuxtLink></li>
      <li><NuxtLink to="/products/create">Add Product</NuxtLink></li>
    </nav>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  padding: 0 2rem;
  justify-content: center;
  align-items: center;
}
li {
  list-style: none;
  padding: 1rem;
}

a {
  text-decoration: none;
  font-size: 1rem;
  padding: 5px;
  color: #fff;
  background-color: #000000;
}
</style>

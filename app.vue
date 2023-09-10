<script setup></script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.container {
  display: flex;
}

.left-column {
  flex-basis: 20%;
  background-color: #f2f2f2;
  padding: 20px;
  margin: 2px 0;
}

.right-column {
  flex-basis: 80%;
  background-color: #e6e6e6;
  padding: 20px;
  margin: 2px 0;
}

.fixed-200 {
  margin: 1rem 8rem;
}

.img-70 {
  width: 60%;
}
.img-100 {
  width: 100%;
}
</style>

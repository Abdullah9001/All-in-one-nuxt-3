<script setup>
useHead({
  title: "Home",
});

const { even } = useNuxtApp();
</script>

<template>
  <div>
    <h1>This is Home index page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit
      tempore eos dignissimos sed odit explicabo asperiores iure ducimus sunt
      maiores.
    </p>

    <h2>The Even Numbers: {{ even(20).join(", ") }}</h2>
    <h2>The Odd Numbers: {{ $odd(20).join(", ") }}</h2>
  </div>
</template>

<template>
  <router-view />
</template>


<script setup lang="ts">

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Fredoke One', sans-serif
}

html {
  /* overflow: hidden; */
  scroll-behavior: smooth;
}

@media (max-width: 767px) {

  html {
    overflow: auto;
    scroll-behavior: smooth;
  }
}
</style>
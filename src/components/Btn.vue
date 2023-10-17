<template>
        <button class="hidden md:block text-2xl border px-8 rounded-lg shadow-lg button_slide slide_right">
            <slot />
        </button>
</template>
<style scoped>
.button_slide {
  color: black;
  display: inline-block;
  border-color: white;  
  /* background-color: aqua; */
  cursor: pointer;
  box-shadow: inset 0 0 0 0 aqua;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.5s;
}
.button_slide:hover{
    background-color: aqua;
    color: white;
    border-color: aqua;
}
</style>

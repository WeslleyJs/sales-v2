<template>
        <h1 class="text-5xl py-6">Utilização simplificada</h1>
        <div class="flex justify-center mt-[100px] mac ">
          <div>
            <img ref="imageRef" class="mac" style="width: 750px;" src="../../assets/macbook.png" alt="mac">
            <img ref="videoGif" src="../../assets/videoGif.gif" style="width: 580px;" class="mt-[-390px] ml-[85px] mac absolute" alt="">
            <!-- <video ref="videoPlay" class="mt-[-360px] ml-[100px] mac relative" style="width: 550px;" src="../../assets/videoGif.gif" alt="mac"></video> -->
          </div>
        </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { watch } from 'fs';

const imageRef = ref<null | HTMLElement>(null);
const videoGif = ref< HTMLMediaElement | null >(null);


gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const image = imageRef.value;
  const video = videoGif.value;
  gsap.to(image, {
    scale: 1.2,
    scrollTrigger: {
      trigger: image,
      start: 'top center',
      end: 'bottom center',
      scrub: 0.5,
    },
  });
  gsap.to(video, {
    scale: 1.2,
    scrollTrigger: {
      trigger: image,
      start: 'top center',
      end: 'bottom center',
      scrub: 0.5,
    },
  });
});

</script>

<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap');


</style>
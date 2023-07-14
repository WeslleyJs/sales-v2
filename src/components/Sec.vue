<template>
    <div class="text-white flex items-center justify-center gap-2">
        <img style="margin-left: -100px; background:none" class="astronaut" src="../assets/astronaut.svg" alt="">
        <h1 style="background: none;" class="text-9xl sales-rocket">Sales Rocket</h1>
    </div>
    <div class="flex justify-center items-center gap-8">
        <Drag />
    </div>
</template>
<script setup lang="ts">
import Drag from './Drag.vue';
</script>
<style scoped>
.sales-rocket {
    font-family: 'Fredoka One';

}

.astronaut {
    animation-name: scaleAnimation;
    animation-duration: 16s;
    animation-iteration-count: initial;
    animation-direction: alternate;
    filter: drop-shadow(0 0 0.3rem white);
}

@keyframes scaleAnimation {
    0% {
        transform: scale(.5) rotate(-20deg);

    }

    /* 
    50% {
        transform: scale(.9);
    } */

    100% {
        transform: scale(1);
    }
}

.earth {
    background: none;
    animation-name: roda;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    filter: drop-shadow(0 0 0.3rem white);
}

@keyframes roda {
    0% {
        transform: rotate(0deg);

    }

    100% {
        transform: rotate(300deg);
    }
}
</style>
<template>
    <div class="animate__animated animate__fadeIn" style="color:black;">
        <HeadTop @itemMlb="mlb" />
        <Item v-if="id" :mlb="id" />
        <Aln v-else />
        <!-- <Transition name="slide-fade">

            <component :is="Item" :mlb="id" @err="statusC" />
        </Transition> -->
    </div>
</template>
<script setup lang="ts">
import HeadTop from './HeadTop.vue';
import { ref, watchEffect } from 'vue';
import Aln from './Aln.vue';
import Item from './Item.vue';

const id = ref()
const mlb = (date: any) => {
    id.value = date
    console.log('cheogou aqui', id.value)
}


</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

li {
    font-family: 'Fredoka One';
}



/* .slide-fade-enter-active {
    transition: all 1s ease-out;
    opacity: .5;
}

.slide-fade-leave-active {
    transition: all .5s cubic-bezier(1, 0.5, 0.8, 0);
    opacity: 0;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
} */
</style>
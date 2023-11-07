<template>
    <header style="height: 10vh;" class="z-10 bg-white">
        <div class="flex justify-around text-center items-center px-20 py-2">
            <div class="flex gap-12">
                <a href="/">
                    <p class="text-2xl">Inicio</p>
                </a>
                <slot></slot>
            </div>
            <div>
                <span v-if="input" class="p-input-icon-left" @keydown.enter="confirm">
                    <i class="pi pi-search" @click="confirm" />
                    <InputText class="rounded" v-model="data" placeholder="Search" />
                </span>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
import { Input } from 'postcss';
import { ref, watchEffect } from 'vue';
const iMLB = 'MLB1054520743'

const emit = defineEmits(["itemMlb"])
const data = ref('');

console.log()
function confirm() {
    emit("itemMlb", data.value)
}
const input = ref(false);
watchEffect(() => {
    if (window.location.href.endsWith('/analises')) {
        input.value = true
    }
})
</script>
<style scoped>
a p {
    font-family: 'Fredoka One';
    color: black;
}
</style>
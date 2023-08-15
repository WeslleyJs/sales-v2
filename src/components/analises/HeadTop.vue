<template>
    <header style="height: 10vh;" class="border-b-2 bg-white z-10">
        <div class="flex justify-around items-center py-2">
            <div class="flex justify-around items-center content-center gap-6">
                <a href="/">
                    <p class="text-2xl">Inicio</p>
                    <p>{{ iMLB }}</p>
                </a>
            </div>
            <span class="p-input-icon-left" @keydown.enter="confirm">
                <i class="pi pi-search" @click="confirm" />
                <InputText class="rounded" v-model="data" placeholder="Search" />
            </span>
        </div>
    </header>
</template>
<script setup lang="ts">
import { ref, watchEffect } from 'vue';
const iMLB = 'MLB2138913634'

const emit = defineEmits(["itemMlb"])
const data = ref('');


function confirm() {
    emit("itemMlb", data.value)
    console.log('com', data.value)
    data.value = ''
    console.log('sem', data.value)

}
</script>
<style scoped>
a p {
    font-family: 'Fredoka One';
    color: black;
}
</style>
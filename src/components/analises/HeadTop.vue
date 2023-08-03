<template>
    <header style="height: 10vh;" class="border-b shadow-md">
        <div class="flex justify-around items-center mt-2">
            <a href="/home">
                <p>Inicio</p>
            </a>
            <span class="p-input-icon-left">
                <i class="pi pi-search" @click="confirm" />
                <InputText class="rounded" v-model="date" placeholder="Search" />
            </span>
            {{ date }}
        </div>
    </header>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(["itemMlb"])

const date = ref();

function confirm() {
    emit("itemMlb", date.value)
    console.log('entrou', date.value)
}
</script>
<style scoped>
a p {
    font-family: 'Fredoka One';
    color: black;
}
</style>
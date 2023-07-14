<template>
    <section class="text-white mt-2">
        <Header>
            <ul class="flex ml-8 gap-8 p-8">
                <li class="text-xl underline" v-for="hd in header">
                    <a :href="hd.path">
                        {{ hd.name }}
                    </a>
                </li>
            </ul>
        </Header>
    </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const header = ref([
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
    },
])

</script>
<style scoped>
a {
    font-family: 'Fredoka One';
}
</style>
<template>
    <section class="text-white mt-2">
        <Header>
            <ul class="flex ml-8 gap-8 p-8">
                <li class="text-xl underline my-list" v-for="hd in header" :key="hd.name">
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
        name: 'Inicio',
        path: '/'
    },
    {
        name: 'Sobre',
    },
])

</script>
<style scoped>
@media (max-width:768px) {
    .my-list {
        display: flex;
        justify-content: center;
        text-align: center;
        margin-left: 40px;
    }

    .sales-rocket {
        font-size: 80px;
        text-align: center;
        margin-left: 100px
    }
}

a {
    font-family: 'Fredoka One';
}
</style>
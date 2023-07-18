<template>
    <main style="height: {{ size }}">
        <section>

            <Head />
            <Sec />
        </section>
        <section>
            <Sobre />
        </section>
    </main>
</template>
<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import Head from '../components/Head.vue';
import Sec from '../components/Sec.vue';

import Sobre from '../components/Sobre.vue';
const size = ref<number>()
watchEffect(() => {
    size.value = window.innerHeight
})
</script>

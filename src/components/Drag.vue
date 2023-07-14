<script setup lang="ts">
import { ref } from 'vue';

import draggable from 'vuedraggable';
import astro from '../assets/min-astronaut.png'
import star from '../assets/star.png'
import earth from '../assets/earth.png'

const meals = ref([
    {
        obj: astro
    },
    {
        obj: star
    },
    {
        obj: star
    },
    {
        obj: star
    },
    {
        obj: earth
    },
])

</script>
<template>
    <div class="text-white flex justify-center">
        <draggable class="flex gap-8 items-center" v-model="meals" tag="ul">
            <template #item="{ element: meal }">
                <li> <img style="background:none; width:40px" :src="meal.obj" alt=""> </li>
            </template>
        </draggable>
    </div>
</template>
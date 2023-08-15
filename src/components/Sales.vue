<template>
    <Animation v-if="show" style="z-index: 1;" />
    <div class="block items-center text-center text-8xl mt-36">
        <img class="sales" src="../assets/salesrocket.svg" alt="">
        <div class="flex justify-center mt-8 ">
            <input type="range" @mouseup="click" v-model.number="value" class="w-2/12 rocket input-rocket" />
        </div>
        <div class="flex justify-center mt-2">
            <p class="text-lg">Arraste e comece</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Animation from './analises/Animation.vue';

const route = useRouter()
const show = ref(false);
const value = ref(0);
const link = ref('/');


function click() {
    if (value.value < 100) value.value = 0
    if (value.value === 100) {
        show.value = true
        setTimeout(() => {
            link.value = '/analises'
            route.push({ path: link.value })

        }, 1300)
    }
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap');



@media (max-width: 767px) {
    .sales {
        width: 350px;
        margin-left: 150px
    }
}

div {
    font-family: 'Fredoka One';
    color: white;
}

button img {
    animation: animate 1.5s linear infinite;
}

@keyframes animate {
    0% {
        opacity: 0.2;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0.2;
    }
}

.input-rocket[type="range"] {
    -webkit-appearance: none;
    width: 50%;
    height: 2px;
    border-radius: 5px;
    background-color: rgba(230, 230, 230, .3);
    outline: none;
    padding: 0;
    margin: 0;
    -webkit-animation: glowing 2s infinite;
}

/* Estiliza o controle deslizante usando uma imagem de fundo */
.input-rocket[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    z-index: 1;
    width: 60px;
    height: 40px;
    border-radius: 50%;
    background-image: url('../assets/logo.png');
    background-size: cover;
    /* background-position: center; */
    cursor: all-scroll;
}
</style>

<template>
    <Animation v-if="show" />
    <div class="block items-center text-center text-8xl mt-36">
        <img class="sales" src="../assets/salesrocket.svg" alt="">
        <button class="ml-96">

            <button @click="clicou">
                <img src="../assets/start.svg" style="width: 100px;" alt="">
            </button>
        </button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Animation from './analises/Animation.vue';

const route = useRouter()
const show = ref(false);

const link = ref('/');
function clicou() {

    show.value = true;
    setTimeout(() => {
        link.value = '/analises'
        route.push({ path: link.value })

    }, 1300)
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
</style>

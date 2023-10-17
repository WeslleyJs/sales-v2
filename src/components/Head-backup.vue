<template>
    <header class="head shadow-xl" style="width:100%; height: 100vh;">

        <main class="head-earth flex justify-center">
            <Canvas class="hide" />
            <div class="sz mt-8 absolute" style="width: 650px; height: 650px;">
                <span></span>
                <span></span>
                <div class="hd   md:rounded-xl  relative md:w-full h-[500px] mt-0 md:mt-20 shadow-lg ">
                    <ul class="flex justify-center gap-4 md:justify-between p-4 text-white">
                        <li @click="home(l.id)" class="fredoka text-xl hover:cursor-pointer" v-for="l of list" :key="l.id">
                            {{
                                l.name
                            }}</li>
                    </ul>

                    <Transition name="slide-fade">
                        <component :is="c[current]" :link="analycs" class="absolute" @actionRt="handleAction" />
                    </Transition>
                </div>

            </div>
        </main>
        <footer class="opacity-0 md:opacity-100 w-full h-full hide">
            <img src="../assets/moon.png" class="w-full" style="margin-top: -150px;" alt="">
        </footer>
    </header>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Canvas from './Canvas.vue'
import Sales from './Sales.vue';
import Sobre from './Sobre.vue'



const list = ref([{ name: 'Inicio', id: 0 }, { name: 'Sobre', id: 1 }])
const rt = ref(false)

const c = [Sales, Sobre]
const current = ref(0)

const analycs = ref('')
function home(id: number) {
    current.value = id
}

function handleAction() {
    analycs.value = 'analycs'
    rt.value = true
    console.log('handleAction', analycs.value)
}

</script>
<style scoped >
@media (max-width: 767px) {
    .hide {
        display: none;
    }
    .hd{
        display: none;
    }
}

.head {

    background-color: #00020F;
    background-image: url('../assets/Stars1.svg');
    background-position: center;
    background-size: 600px;
}

.fredoka {
    font-family: 'Fredoka One';
}

.slide-fade-enter-active {
    transition: all 1s ease-out;
}

.slide-fade-leave-active {
    transition: all .5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-100px);
    opacity: 0;
}

.hd {
    background-color: rgba(0, 0, 0, 0.28);
}

h1 ul li {
    font-family: 'Fredoke One';
}

span {
    position: fixed;

    top: 5%;
    left: 5%;
    width: 4px;
    height: 4px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1), 0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.1);
    animation: animate 10s linear infinite;
}

span::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 4%;
    transform: translateY(5%);
    width: 200px;
    height: 1px;
    background: linear-gradient(90deg, #fff, transparent);
}

@keyframes animate {
    0% {
        transform: rotate(315deg) translateX(0);
        opacity: 1;
    }

    70% {
        opacity: 1;
    }

    100% {
        transform: rotate(315deg) translateX(-550px);
        opacity: 0;
    }
}

span:nth-child(1) {
    top: 0;
    right: 0;
    left: initial;
    animation-delay: 2s;
    animation-duration: 1s;
    animation: animate 8s linear infinite;
}
</style>
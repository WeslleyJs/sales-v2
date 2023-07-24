<template>
    <header class="head shadow-xl" style="height: 100vh;">

        <main class="flex justify-center">
            <Canvas />
            <!--  -->
            <div class="head-earth mt-8 absolute" style="width: 650px; height: 650px;">
                <span></span>
                <span></span>
                <div
                    class="animate__animated  animate__backInDown animate__delay-1s hd md:rounded-xl  relative w-full h-[500px] mt-0 md:mt-20 shadow-lg ">

                    <ul class="flex justify-between p-4 text-white">
                        <li class=" text-xl"><a href="/">Inicio</a></li>
                        <li><img src="../assets/ml.svg" style="width: 30px;" alt=""></li>
                        <li class=" text-xl">Sobre</li>
                    </ul>
                    <div class="items-center text-center mt-36">
                        <img src="../assets/salesrocket.svg" alt="">
                        <button>
                            <a href="">
                                <img src="../assets/rocket.svg" style="width: 100px;" class="ml-40" alt="">
                                <p class="text-white ml-40 text-sm animate__animated animate__flash">Começar</p>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </main>

        <footer class="opacity-0 md:opacity-100 w-full h-full ">
            <img src="../assets/moon.png" class="w-full" style="margin-top: -150px;" alt="">
        </footer>

    </header>

    <!-- <Planeta /> -->
</template>
<script setup lang="ts">
// import Planeta from './Planeta.vue';
import Canvas from './Canvas.vue'
</script>
<style scoped >
.head {
    background-color: #00020F;
    background-image: url('../assets/Stars1.svg');
    background-size: 800px
}

/* .head-earth {
    background-image: url('../assets/terra.svg');
    background-size: 800px;
    background-position: -40px 30px;
    background-repeat: no-repeat;
} */

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
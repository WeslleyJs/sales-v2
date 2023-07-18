<template>
    <div class="flex justify-around items-center">
        <div class="menu__container">
            <div class="menu">
                <h1 class="underline">Sobre</h1>
                <p class="mt-4">
                    Somos uma plataforma gratuíta
                    com o objetivo de ajudar sellers a analisar o mercado e consequentemente aumentar suas vendas
                </p>
            </div>
        </div>
        <div>
            <img class="astronaut" src="../assets/astro2.gif" style="background: none;" alt="">
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style>
.menu__container {
    font-family: 'Fredoka One';
    width: 300px;
    height: 400px;
    margin-bottom: 50px;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 4px 4px 4px rgba(7, 12, 77, 0.4);
    background: #000;
    transform-origin: center center 0px;
    transition: all 0.5s ease-out;
    animation-name: animate;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    transform: perspective(1000px) rotateX(35deg) rotateY(4deg) rotateZ(-30deg);
    z-index: 1;
}

.menu__container:hover {
    animation: unset;
    margin-top: 18vh;
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}

.menu {
    font-family: 'Fredoka One';
    font-size: 20px;
    padding: 10px;
    align-items: center;
    max-width: 100%;
    height: 100%;
    color: #ffffff;
    filter: brightness(.8);
}

.menu:hover {
    filter: brightness(1);
    transition: 3s;
}

@keyframes animate {
    0% {
        margin-top: 20vh;
    }

    50% {
        margin-top: 18vh;
    }

    100% {
        margin-top: 20vh;
    }
}

.astronaut {
    filter: drop-shadow(0 0 0.3rem white);
    transform: rotate(10deg)
}
</style>
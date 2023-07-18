<template>
    <div class="text-white flex items-center justify-center gap-2 hover:cursor-none">
        <img style="margin-left: -100px; background:none" class="astronaut" src="../assets/astronaut.svg" alt="">
        <h1 style="background: none;" class="text-9xl sales-rocket">Sales Rocket</h1>
    </div>
    <div class="flex justify-center items-center text-white">
        <a href="">
            <img class="rocket-svg" src="../assets/rocket.svg" style="width: 80px;" alt="">
            <span>Começar </span>
        </a>
    </div>
    <div ref="el" class="text-white flex justify-center">
        swip
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
@media (max-width:768px) {
    .astronaut {
        width: 0;
        visibility: 0;
        visibility: hidden;
    }

    .sales-rocket {
        font-size: 80px;
        text-align: center;
        margin-left: 100px
    }
}

.sales-rocket {
    font-family: 'Fredoka One';

}

.d-btn {
    background-image: url('../assets/rocket.svg');
}

.astronaut {
    animation-name: scaleAnimation;
    animation-duration: 1s;
    animation-iteration-count: initial;
    animation-direction: alternate;
    filter: drop-shadow(0 0 0.3rem white);
}

@keyframes scaleAnimation {
    0% {
        transform: scale(.5) rotate(-20deg);

    }

    /* 
    50% {
        transform: scale(.9);
    } */

    100% {
        transform: scale(1);
    }
}

.earth {
    background: none;
    animation-name: roda;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    filter: drop-shadow(0 0 0.3rem white);
}

@keyframes roda {
    0% {
        transform: rotate(0deg);

    }

    100% {
        transform: rotate(300deg);
    }
}

.rocket-svg {
    transform: rotate(45deg);
    background: none;
    filter: drop-shadow(0 0 0.3rem white);
}

span {
    text-align: center;
    animation: animate 1.5s linear infinite;
    margin-left: 20px;
}

@keyframes animate {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 0.7;
    }

    100% {
        opacity: 0;
    }
}
</style>
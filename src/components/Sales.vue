<template>
    <div class="block items-center text-center mt-36">
        <img src="../assets/salesrocket.svg" alt="">
        <button class="ml-96">

            <router-link to="/"><img src="../assets/start.svg" style="width: 100px;" alt=""></router-link>
        </button>
    </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap');

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

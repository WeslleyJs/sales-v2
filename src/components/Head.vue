<template>
    <HeaderTop class="flex bg-head p-2">
        <a href="#sobre">
            <p class="text-2xl fredoka">Sobre</p>
        </a>
    </HeaderTop>
    <main class="flex justify-center items-center  border-b-2 bg-bl" style="height: 90vh;">
        <!-- <img src="../assets/blur.png" class="blur teste absolute" style="width: 700px;" alt=""> -->
        <div class="text-center mb-8 divPer animate__animated animate__zoomInDown">
            <img class="mx-auto astronauta" src="../assets/astro_logo.svg" style="width: 400px;" alt="">
            <img class="sales mx-auto" src="../assets/salesrocket.svg" alt="">
            <Btn class="mt-8">
                <router-link to="/analises" class="fredoka">Começar</router-link>
            </Btn>
        </div>
    </main>
    <section class="mt-4 text-center mb-8 hidden md:block">
        <MacBook />
    </section>
    <section class="mt-[180px] mb-[200px] md:mb-16" id="sobre">
        <GridCard />
    </section>
</template>
<script setup lang="ts">
import HeaderTop from './analises/HeadTop.vue'
import MacBook from './analises/MacBook.vue'
import GridCard from './analises/GridCard.vue'
import Btn from './Btn.vue';
</script>
<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap');



.bg-bl{
    background-image: url(../assets/thumb.png);
    background-repeat: no-repeat;
    background-size: 1200px;
}
@media (max-width: 768px) {
    .bg-bl{
        background-image: none;
        
    }
}
.fredoka {
    font-family: 'Fredoka One';
}
.bg-head{
    background-color: none;
}
.sales{
    background: none;
    filter: drop-shadow(0 0 .2rem black);
}
.astro-logo{
    background: none;
}

</style>
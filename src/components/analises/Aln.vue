<template>
    <div class="ml-2 mt-[80px] md:mt-[200px] md:ml-[160px]">
        <img class="sales hidden md:block" src="../../assets/salesrocket.svg" style="width:500px;" alt="">
        <p class="md:hidden text-black text-[100px] sales-font">Sales<br>Rocket</p>
    </div>
    <div class="ml-12 mt-2 md:mt-8 md:ml-[250px]">
        <p style="color:rgb(108, 108, 108)">Baixe nossa extensão para Google Chrome</p>
        <Btn class="ml-16 mt-8 font-bold"><a href="https://chrome.google.com/webstore/detail/sales-rocket/apkecalanibncoanbccfpnolmoaoeejf/related?hl=pt-BR&authuser=0">Download</a></Btn>
    </div>
    <div style="z-index: -1"
        class="absolute hidden md:block mt-2 transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
        <div class="flex items-center space-x-6 lg:space-x-8 bg-white">
            <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                <div style="width: 210px; height: 270px;"
                    class="ca border-2 bg-gradient flex justify-center items-center content-center shadow-xl rounded-t-lg overflow-hidden">
                    <img style="width: 200px;height: 200px;" src="../../assets/img/iphone.png" alt="">
                </div>
                <div style="width: 210px; height: 270px;"
                    class="ca border-2 bg-gradient flex justify-center items-center content-center shadow-xl rounded-t-lg overflow-hidden">
                    <img style="width: 150px;height: 200px;" src="../../assets/img/apple.png" alt="">
                </div>
            </div>
            <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                <div style="width: 210px; height: 270px;"
                    class="ca border-2 bg-gradient flex justify-center items-center content-center shadow-xl rounded-t-lg overflow-hidden">
                    <img style="width: 200px;height: 200px;" src="../../assets/img/capacete.png" alt="">
                </div>
                <div style="width: 210px; height: 270px;"
                    class="border-2 bg-gradient flex justify-center items-center content-center shadow-xl rounded-t-lg overflow-hidden">
                    <img style="width: 150px;height: 140px;" src="../../assets/img/ml.png" alt="">
                </div>
                <div style="width: 210px; height: 270px;"
                    class="ca border-2 bg-gradient flex justify-center items-center content-center shadow-xl rounded-t-lg overflow-hidden">
                    <img style="width: 150px;height: 160px;" src="../../assets/img/eletro.png" alt="">
                </div>
            </div>
            <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                <div style="width: 210px; height: 270px;"
                    class="ca border-2 bg-gradient flex justify-center items-center content-center shadow-xl rounded-t-lg overflow-hidden">
                    <img style="width: 200px;height: 200px;" src="../../assets/img/camisa.png" alt="">
                </div>
                <div style="width: 210px; height: 270px;"
                    class="ca border-2  bg-gradient bg-fosc flex justify-center items-center content-center shadow-xl rounded-t-lg overflow-hidden">
                    <img style="width: 200px;height: 180px;" src="../../assets/img/package.png" alt="">
                </div>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import Btn from '../Btn.vue';
</script>
<style scooped>
.bg-gradient {
    background-color: rgb(250, 250, 250);
}

.sales-font {
    font-family: 'Fredoka One';
}

.sales {
    filter: drop-shadow(0 0 2px rgb(0, 0, 0));
}

.ca {
    transition: .8s;
}

.ca:hover {
    transform: rotate(8deg) scale(1.1);
    transition: .5s;
}
</style>
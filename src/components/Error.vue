<template>
    <div class="bg-image flex justify-center text-center w-full w-full h-[900vh]">
        <div class="text-center">
            <h1 style="font-size: 200px;" class=" text-white"><router-link to="/analises">404</router-link></h1>
            <p class="text-xl border rounded-xl" style="color: white;"><router-link to="/analises">Voltar</router-link>
            </p>
        </div>
    </div>
</template>
<style scoped>
.bg-image {
    background-image: url(../assets/astronaut.jpg);
    background-repeat: no-repeat;
    background-size: 1800px;
}
</style>
<template>
    <div class="mt-20 sz">
        <section class="card flex-block justify-center items-center text-center">
            <p class=" text-white sobre-title text-start mt-4 w-60 text-3xl p-2 w-full">
                Somos uma plataforma online e gratuita para análise de mercado.
                Temos o intuito de ajudar sellers de todo o Brasil a definir
                suas métricas e ajudar em seus objetivos
            </p>
        </section>
        <div class="items-center text-center text-white mt-4">
            <h1 class="sobre-title text-xl md:text-2xl">
                Midias Sociais:
            </h1>
            <div class="flex justify-center gap-4 md:gap-0 md:justify-around mt-8">
                <a href="https://www.linkedin.com/in/weslley-mateus-7a7a43220/">
                    <img src="../assets/linkedin.svg" style="width: 50px;" alt="linkedin">
                </a>
                <a href="https://github.com/WeslleyJs">
                    <img src="../assets/github.svg" style="width: 50px;" alt="GitHub">
                </a>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap');

@media (max-width: 767px) {
    p {
        font-size: 20px;
        width: 300px;
        margin-left: 150px;
    }
}

p {
    word-spacing: 4px;
}

img {
    transform: scale(1);
    transition: .5s;
}

img:hover {
    transform: scale(1.1);
    transition: .5s;

}
</style>
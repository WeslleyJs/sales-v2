<template>
    <div class="flex flex-center items-center content-center w-full justify-center text-black absolute">
        <div class="teste"></div>
    </div>
</template>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

.teste {
    width: 20px;
    height: 20px;
    margin-top: 20%;
    background-color: white;
    border-radius: 100%;
    animation: animate;
    animation-duration: 1.5s;
    animation-iteration-count: inherit;
}

@keyframes animate {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(110);
    }
}
</style>
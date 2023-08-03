<template class="">
    <div class="animate__animated animate__fadeIn">
        <HeadTop @itemMlb="mlb" />
        <p>Valor recebido do filho: {{ id }}</p>
    </div>

    <!-- <Transition name="slide-fade">
        <component :is="rt" :mlb="id" />
    </Transition> -->
    <Item :mlb="id" />
</template>
<script setup lang="ts">
import HeadTop from './HeadTop.vue';
import { ref } from 'vue';
import Aln from './Aln.vue';
import Item from './Item.vue';
// const rt = ref()

// setTimeout(() => {
//     rt.value = Aln
// }, 100)


interface MLBitem {
    i: string
}

const id = ref()
const mlb = (date: MLBitem) => {
    id.value = date
    console.log('mlb')
}



</script>
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

li {
    font-family: 'Fredoka One';
}

.teste {
    width: 20px;
    height: 20px;
    margin-top: 20%;
    background-color: white;
    border-radius: 100%;
    animation: animate;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}

@keyframes animate {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(110);
    }
}

.bg-main {
    background-image: url('../../assets/astronaut.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.slide-fade-enter-active {
    transition: all 1s;
}

.slide-fade-leave-active {
    transition: all .5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(100px);
    opacity: 0;
}
</style>
<!-- ../../utils/mlb.ts -->
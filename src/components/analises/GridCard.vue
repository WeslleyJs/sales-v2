<template>

  <h1 class="text-5xl py-6 text-center">Nossas vantagens</h1>
  <div class="flex justify-center mx-auto mt-8" ref="cardDetails">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <Card
        style="width: 300px"
        class="rounded-2xl bg-black border-1 shadow-2xl bg-black"
        v-for="(item, index) in cardDatas"
        :key="index"
      >
      <template #title> 
        <br>
        <h3 class="p-2"><i alt="user header" class="text-center" style="font-size: 2rem;"  :class="item.img"></i><br> {{ item.title }}</h3> 
      </template>
      <template #content>
          <p class="p-2">
            {{ item.text }}
          </p>
          <p v-if="item?.link" class="text-center">
             <a class="font-bold" :href="item.link">Linkedin</a>
          </p>
        </template>
      </Card>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Card from 'primevue/card';
import astronaut from '../../assets/astronaut.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const cardDetails = ref<HTMLElement | null>(null);

const animateUpscale = () => {
  gsap.fromTo(
    cardDetails.value,
    { scale: 0 }, // Escala inicial
    {
      scale: 1, // Escala final
      duration: 1, // Duração da animação em segundos
      ease: 'power2.out', // Easing (pode ser ajustado conforme necessário)
    }
  );
};

// Configure o ScrollTrigger para acionar a animação quando o elemento estiver visível na tela
onMounted(() => {
  // Crie uma instância do ScrollTrigger
  const trigger = ScrollTrigger.create({
    trigger: cardDetails.value, // Elemento que acionará a animação
    start: 'top 80%', // Iniciar a animação quando 80% do elemento estiver visível
    end: 'bottom 20%', // Terminar a animação quando 20% do elemento estiver visível
    onEnter: animateUpscale, // Função a ser chamada quando o elemento estiver dentro da visualização
    onEnterBack: animateUpscale, // Função a ser chamada quando o elemento voltar à visualização
    // markers: true, // Adicionar marcadores para depuração (remova isso em produção)
  });

  // Adicione o trigger ao ScrollTrigger
  ScrollTrigger.create(trigger);
});



/*
pi-chart-bar
pi-chart-line
pi-cart-plus
pi-code
pi-desktop
pi-dollar
pi-box
pi-search
*/



const cardDatas = ref([
    {
        title: 'O que oferecemos?',
        text: 'Explore o potencial autêntico de sua empresa, aumente sua lucratividade, otimize suas taxas de conversão e leve sua empreitada ao auge do sucesso.',
        img: 'pi pi-search'
    },
    {
        title: 'Analises',
        text: 'Examine as estratégias de seus concorrentes e adquira o conhecimento necessário para superar a concorrência.',
        img: 'pi pi-chart-bar'
    },
    {
        title: 'API',
        text: 'Todos os dados da aplicação são oferecidas pela API Oficial do Mercado Livre com informações reais e verdadeiras',
        img: 'pi pi-code'
    },
    {
        title: 'Login',
        text: 'Nossa ferramenta é 100% gratuíta! Sem necessidade de autentificação. Basta pesquisar pelo ID (MLB) desejado',
        img: 'pi pi-cart-plus'
    },
    {
        title: 'Extensão',
        text: 'Contamos com uma extensão para Google Chrome totalmente gratuíta para análises mais simples e rápidas',
        img: 'pi pi-chart-line'
    },
    {
        title: 'Sobre',
        text: 'Apreciou o conteúdo? Interessado em se conectar com o autor? Não hesite em entrar em contato comigo; ficarei encantado em conhecê-lo!',
        img: 'pi pi-linkedin',
        link: 'https://www.linkedin.com/in/weslley-mateus-7a7a43220/'
    },
])

</script>
<style scoped>

.p-card {
    border-radius: 10px;
    /* background-repeat: no-repeat;
    background-size: 500px; */
    background-image: url(../../assets/card-bg.png);
    background-size: 200%;
    transition: 1.3s; /* Defina a transição aqui */
}

.p-card:hover {
    background-size: 152%;
    background-position: center;
    background-repeat: no-repeat;
}
.p-card:hover p {
    transform: scale(1.1);
    transition: 1.3s;
}
.p-card:hover  h3 {
  transform: scale(.9);
    transition: 1.3s;
  }
.p-card h3 {
  transform: scale(1);
    transition: 1.3s;
}
.p-card p {
  transform: scale(1);
    transition: 1.3s;
}
.p-card:not(:hover) {
  transition: 1.3s;
}
</style>
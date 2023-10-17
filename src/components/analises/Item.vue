<template>
    <div v-if="produto">


    <div class="text-center">
        <div>
            <div>
                <Image class="mt-1 shadow-xl" :src="img" alt="Image" style="width: 150px;" preview />
            </div>
            <div class="mt-4 font-bold text-black">
                <h1>{{ produto.title }}</h1>
            </div>
        </div>
    </div>
    <div class="flex justify-center " style="color: black;">
        <TabView class="border rounded-lg py-6 shadow-2xl" headerClass="bg-black" style="width: 650px; height: 350px;">
            <TabPanel header="Geral" headerClass="w-full">
                <ul class="mt-2">
                    <li>Data de Cadastro: {{ date }}</li>
                    <li>Estoque: {{ produto.available_quantity }} </li>
                    <li>Vendidos: {{ produto.sold_quantity }} </li>
                    <li>Peso cadastrado: {{ shipping?.billable_weight }}g</li>
                    <li>Valor Frete Pago pelo Seller: R$ {{ shipping?.list_cost }}</li>
                    <li>Modalidade: {{ produto.shipping?.logistic_type === 'fulfillment' ? 'FULL' : 'Cross Docking' }}</li>
                </ul>
            </TabPanel>
            <TabPanel :disabled="produto.variations.length < 1" header="Variações" headerClass="w-full">
                <div class="flex flex-wrap">
                    <div class="w-1/3" v-for="item in produto.variations" :key="item.id" style="color: black;">
                        <div class="card border-2 rounded-xl p-4 h-42 m-1" style="color: black;">
                            <p> Atributo Cor {{ item.attribute_combinations[0].value_name }}</p>
                            <p> Tamanho {{ item.attribute_combinations[1]?.value_name }}</p>
                            <p> Vendidos {{ item.sold_quantity }}</p>
                        </div>
                    </div>
                </div>

            </TabPanel>
            <TabPanel header="Visitas" headerClass="w-full">
                <div v-if="label">
                    <div>
                        <h1>Visitas Total: {{ visitas.total_visits }} período de {{ visitas.last }} dias</h1>
                    </div>
                    <div class="card">
                        <Chart type="line" :data="chartData" :options="chartOptions" class="h-36" />
                    </div>
                </div>
                <div v-else class="card flex justify-content-center" style="overflow: hidden;">
                    <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
                </div>
            </TabPanel>
            <TabPanel header="Categoria" headerClass="w-full">
                <ul class="mt-2">
                    <li class="mt-2">Categoria: {{ categoryDatas.name }}</li>
                    <li class="mt-2">Anúncios na categoria: {{ categoryDatas.total_items_in_this_category }}</li>
                    <li class="mt-2">ID da Categoria: {{ categoryDatas.id }}</li>
                    <li class="mt-2">Categoria criada em: {{ dayjs(categoryDatas.date_created).format("DD/MM/YYYY") }}</li>
                </ul>
            </TabPanel>
            <TabPanel header="Seller" headerClass="w-full">
                <ul class="mt-2">
                    <li class="mt-2">Seller: {{ seller.nickname }} - ID: {{ seller.id }}</li>
                    <li class="mt-2">Cidade: {{ seller.address.city }} - {{ seller.address.state }} </li>
                    <li class="mt-2">Reputação: {{ seller.seller_reputation.level_id.toUpperCase().slice(2) }} - {{ seller.seller_reputation.power_seller_status.toUpperCase() }}</li>
                </ul>
            </TabPanel>
        </TabView>
    </div>
</div>
    <div v-else="!produto" class="flex justify-center"><i class="pi pi pi-spin pi-spinner" style="font-size: 3rem;"></i></div>
</template>

<script setup lang="ts">
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Chart from 'primevue/chart';
import ProgressSpinner from 'primevue/progressspinner';
import { useRouter } from 'vue-router'

import { ref, watchEffect, onMounted } from 'vue';
import dayjs from 'dayjs';
import getProduct from "../../utils/mlb";
import getShipping from '../../utils/shipping';
import getCategory from '../../utils/category';
import getSeller from '../../utils/seller';
import { getVisits } from '../../utils/visits.ts';
import Image from 'primevue/image'
import { AxiosError } from 'axios';
// const idMLB = 'MLB2138913634'

const produto = ref<string | any>('');
const shipping = ref<string | any>('');
const date = ref();
const img = ref();
const visitas = ref();
const label = ref();
const visit = ref();
const category = ref();
const categoryDatas = ref();
const seller = ref();

const props = defineProps({
    mlb: String
})
const id = ref();
watchEffect(async () => {
     id.value = props.mlb;
    if (!id.value.startsWith('MLB')) id.value = 'MLB' + id.value;
    
    try {
        const productData = await getProduct(id.value);
        const shippingData = await getShipping(id.value);
        const visitsData = await getVisits(id.value);
        const categoryData = await getCategory(productData.data.category_id);
        const sellerInfo = await getSeller(productData.data.seller_id);
        console.log('seller info', categoryData.data);
        const { data } = productData;
        
        category.value = data.category_id;
        produto.value = data;
        date.value = dayjs(data.date_created).format("DD/MM/YYYY");
        img.value = `http://http2.mlstatic.com/D_${data.thumbnail_id}-O.jp`;
        seller.value = sellerInfo.data;

        
        visitas.value = visitsData.data;
        label.value = visitsData.data.results.map((item: any) => dayjs(item.date).format("DD/MM"));
        visit.value = visitsData.data.results.map((item:any) => item.total);
        
        categoryDatas.value = categoryData.data;
        
        let shp = shippingData.data
        Object.keys(shp).map(function (key) {
                const result = shp[key].coverage.all_country;
                shipping.value = result;
            })
    } catch (error :any) {
        if (error.response?.status === 404) {
            setTimeout(() => document.location.reload(), 15);
        }
        if(error.response?.status === 429){
            const retryAfter = error.response.headers['Retry-After'];
            // Aguarde o tempo especificado antes de tentar novamente
            await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
            // Tente novamente a solicitação
            return getVisits(id.value);
        } 
        else {
            // Trate outros erros de forma adequada
            console.error('Erro desconhecido:', error);
        }
    }
});



onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);


    return {
        labels: label,
        datasets: [
            {
                label: '',
                data: visit,
                fill: true,
                borderColor: documentStyle.getPropertyValue('--cyan-500'),
                tension: 0.07,
                backgroundColor: 'rgba(20,184,166,0.2)'
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');


    return {
        maintainAspectRatio: false,
        aspectRatio: 3.8,
        responsive: true,
        devicePixelRatio: 1.9,
        plugins: {
            title: {
                display: true,
                align: 'start',
                color: 'black',
                padding: 5,
                fullSize: false,
                font: {
                    size: 16,
                    weight: 'bold'
                }
            },
            legend: {
                display: false,
            },
            subtitle: {
                display: false,
                position: 'left',
                text: 'Agendamento'
            },

        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: false,
                }
            },
            y: {

                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: '#f2f2f2'
                },
                type: 'linear',

            }
        },
    };
}


</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap');

* {
    overflow: auto;
    -webkit-scrollbar-thumb: 150px;
}

*::-webkit-scrollbar-thumb {
    background-color: #888;
    /* Cor de fundo do polegar */

    /* Raio de borda para arredondar o polegar */
}


li {
    color: black;
}

.p-tabview-nav-container {
    display: flex;
    justify-content: center;
    background-color: red;
}
</style>
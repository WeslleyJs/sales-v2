<template>
    <div class="card flex  justify-center">
        <Image class="mt-2 shadow-2xl rounded-sm" src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg"
            alt="Image" width="250" preview />
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import dayjs from 'dayjs';
import { useRouter } from 'vue-router'
import getProduct from "../../utils/mlb";
import Image from 'primevue/image'
import { fromJSON } from 'postcss';
const idMLB = 'MLB2138913634'
const value = ref(0)
const route = useRouter()



const produto = ref()
const date = ref()
const image = ref()
const attributes01 = ref()
const attribute02 = ref()

const props = defineProps({
    mlb: String
})
const id = ref();
// watchEffect(async () => {
//     id.value = props.mlb
//     if (id.value !== undefined) {
//         await getProduct(id.value).then((res: any) => {
//             const { data } = res
//             produto.value = data
//         }).catch((err: any) => {
//             console.log('MERDA', err)
//         })
//     }
// })



</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap');

li {
    color: black;
}
</style>
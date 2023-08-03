<template>
    <main class="flex justify-center" style="margin-top: 110px;">
        <p>Aqui {{ props.mlb }}</p>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import dayjs from 'dayjs';
import getProduct from "../../utils/mlb";
const id = 'MLB2138913634'

const produto = ref()
const date = ref()
const image = ref()
const attributes01 = ref()
const attribute02 = ref()

const props = defineProps({
    mlb: String
})

getProduct(id).then((res: any) => {
    const data = ref(res.data);
    produto.value = data.value;
    // console.log('produto', produto.value.title)
    attributes01.value = data.value.variations
    date.value = dayjs(data.value.date_created).format('DD/MM/YYYY')





    attributes01.value.forEach((element: any) => {
        const img = element.picture_ids;
        // console.log('img', img)
        image.value = `http://http2.mlstatic.com/D_${img[0]}-O.jp`
        attribute02.value = element.attribute_combinations[2]
    })
}).catch((err: any) => {
    console.log(err)
})
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap');

li {
    color: black;
}
</style>
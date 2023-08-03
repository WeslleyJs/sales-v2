<template>
    <div style="margin-top: 20px;" class=" flex flex-row content-center items-center justify-center gap-8 ">
        <Card class="rounded-xl shadow-2xl" style="width: 28em">
            <template #header>
                <img style="height: 250px;" class="w-full rounded-t-xl" alt="user header" src="../../assets/chart.png" />
            </template>
            <template #title> Extensões Chrome </template>
            <template #content>
                <p>
                    Temos disponível uma extensão gratuita no navegador para o navegador Chrome, facilitando sua análise de
                    mercado, sem sair do Mercado Livre.
                </p>
            </template>
            <template #footer>
                <Button icon="pi pi-check" label="Download" />
            </template>
        </Card>
        <Card class="rounded-xl shadow-2xl" style="width: 28em">
            <template #header>
                <img style="height: 250px;" class="w-full rounded-t-xl" alt="user header"
                    src="../../assets/mercado-livre.png" />
            </template>
            <template #title> Importante </template>
            <template #content>
                <p>
                    Esta plataforma utiliza das informações presentes na API oficial do Mercado Livre, portanto alguns dados
                    são apenas uma estimativa aproximada para sua análise
                </p>
            </template>
            <template #footer>
                <Button icon="pi pi-check" label="Download" />
            </template>
        </Card>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped></style>
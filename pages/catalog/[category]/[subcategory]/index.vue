<template>
    <main class="main">
        <app-breadcrumbs :breadcrumbs="breadcrumbs"></app-breadcrumbs>
    </main>
</template>

<script>
export default {
    data() {
        return {
            breadcrumbs: [
                {
                    link: '/',
                    title: 'Главная',
                    active: false,
                },
                {
                    link: '/catalog/',
                    title: 'Каталог',
                    active: false,
                },
                {
                    link: '/catalog/tools/',
                    title: 'Инструмент',
                    active: false,
                },
                {
                    link: '#',
                    title: 'Ручной инструмент',
                    active: true,
                },
            ],
        }
    },
}
</script>
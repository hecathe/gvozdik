<template>
    <main class="main">
        <app-breadcrumbs :breadcrumbs="breadcrumbs"></app-breadcrumbs>

        <the-section class="catalog-category">
            <div class="catalog-category__wrap">
                <div class="catalog-category__aside">
                    <ui-dropdown-list title="Категория" :list="category" show-more is-link="true"></ui-dropdown-list>

                    <ui-dropdown-list title="Тип продукта" :list="type" is-input-checkbox="true"></ui-dropdown-list>
                </div>

            </div>
        </the-section>
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
                    link: '#',
                    title: 'Инструмент',
                    active: true,
                },
            ],
            category: [
                {
                    name: 'Стройматериалы',
                    url: '/catalog/stroy/',
                    icon: 'lucide_brick-wall',
                },
                {
                    name: 'Инструмент',
                    url: '/catalog/tools/',
                    icon: 'material-symbols_construction-rounded',
                },
                {
                    name: 'Электрика',
                    url: '/catalog/electric/',
                    icon: 'icon-park-outline_power-supply-one',
                },
            ],
            type: [
                {
                    name: 'Зажимные инструменты и устройства',
                },
                {
                    name: 'Инструмент садовый',
                },
                {
                    name: 'Монтажный и крепёжный',
                },
                {
                    name: 'Наборы инструментов',
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.catalog-category {
    &__wrap {
        display: grid;
        grid-template-columns: minmax(auto, 250px) 1fr;
    }

    &__aside {
        display: grid;
        row-gap: 28px;
    }
}
</style>
<template>
    <main class="main">
        <app-breadcrumbs :breadcrumbs="breadcrumbs"></app-breadcrumbs>

        <the-section>
            <catalog-nav :catalog-nav="catalogNav"></catalog-nav>
        </the-section>

        <product-slider-section :slider-list="saleCards">Популярное</product-slider-section>

		<product-slider-section :slider-list="newCards">Новинки</product-slider-section>
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
                    link: '#',
                    title: 'Каталог',
                    active: true,
                }
            ],
            catalogNav: [
				{
					title: 'Инструменты',
					url: '/gvozdik/images/y-tools.jpg',
					link: '/catalog/tools',
					span: false,
				},
				{
					title: 'Электрика',
					url: '/gvozdik/images/y-tools.jpg',
					link: '/catalog/electric',
					span: false,

				},
				{
					title: 'Сантехника',
					url: '/gvozdik/images/y-tools.jpg',
					link: '/catalog/santechnika',
					span: false,
				},
				{
					title: 'Инструменты',
					url: '/gvozdik/images/y-tools.jpg',
					link: '/catalog/instrumenty',
					span: false,
				},
				{
					title: 'Электрика',
					url: '/gvozdik/images/y-tools.jpg',
					link: '/catalog/instrumenty',
					span: false,
				},
				{
					title: 'Сантехника',
					url: '/gvozdik/images/y-tools.jpg',
					link: '/catalog/instrumenty',
					span: false,
				},
				{
					title: 'Инструменты',
					url: '/gvozdik/images/y-tools.jpg',
					link: '/catalog/instrumenty',
					span: false,
                },
                {
					title: 'Электрика',
					url: '/gvozdik/images/y-tools.jpg',
					link: '/catalog/instrumenty',
					span: false,
				},
                {
					title: 'Популярное',
					url: '/gvozdik/images/y-tools.jpg',
					link: '/catalog/popular',
					span: true,
				},
				{
					title: 'Акции',
					url: '/gvozdik/images/y-tools.jpg',
					link: '/catalog/sales',
					span: true,
				},
			],
            saleCards: [
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
			],
			newCards: [
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
				{
					images: ['/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg', '/gvozdik/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
					link: '/catalog/tools/handtools/kleshi-sparta-250mm/',
				},
			],
        }
    },
}
</script>
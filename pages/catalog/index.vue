<template>
    <main class="main">
        <app-breadcrumbs :breadcrumbs="breadcrumbs"></app-breadcrumbs>

        <the-section>
            <catalog-nav :catalog-nav="catalogNav"></catalog-nav>
        </the-section>

        <the-section>
			<app-title link link-text="все акции">Товары по акции / Популярное</app-title>
			<product-slider :cards="saleCards"></product-slider>
		</the-section>

		<the-section>
			<app-title link link-text="все новинки">Новинки</app-title>
			<product-slider :cards="newCards"></product-slider>
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
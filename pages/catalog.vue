<template>
    <main class="main">
        <app-breadcrumbs :breadcrumbs="breadcrumbs"></app-breadcrumbs>

        <the-section>
            <catalog-nav :catalog-nav="catalogNav"></catalog-nav>
        </the-section>

        <the-section>
			<app-title link link-text="все акции">Товары по акции / Популярное</app-title>
			<goods-slider :cards="saleCards"></goods-slider>
		</the-section>

		<the-section>
			<app-title link link-text="все новинки">Новинки</app-title>
			<goods-slider :cards="newCards"></goods-slider>
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
					url: 'images/y-tools.jpg',
					link: '#',
					span: false,
				},
				{
					title: 'Электрика',
					url: 'images/y-tools.jpg',
					link: '#',
					span: false,

				},
				{
					title: 'Сантехника',
					url: 'images/y-tools.jpg',
					link: '#',
					span: false,
				},
				{
					title: 'Инструменты',
					url: 'images/y-tools.jpg',
					link: '#',
					span: false,
				},
				{
					title: 'Электрика',
					url: 'images/y-tools.jpg',
					link: '#',
					span: false,
				},
				{
					title: 'Сантехника',
					url: 'images/y-tools.jpg',
					link: '#',
					span: false,
				},
				{
					title: 'Инструменты',
					url: 'images/y-tools.jpg',
					link: '#',
					span: false,
                },
                {
					title: 'Электрика',
					url: 'images/y-tools.jpg',
					link: '#',
					span: false,
				},
                {
					title: 'Популярное',
					url: 'images/y-tools.jpg',
					link: '#',
					span: true,
				},
				{
					title: 'Акции',
					url: 'images/y-tools.jpg',
					link: '#',
					span: true,
				},
			],
            saleCards: [
				{
					images: ['images/goods-item-1.jpg', 'images/goods-item-1.jpg', 'images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
				},
				{
					images: ['images/goods-item-1.jpg', 'images/goods-item-1.jpg', 'images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
				},
				{
					images: ['images/goods-item-1.jpg', 'images/goods-item-1.jpg', 'images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
				},
				{
					images: ['images/goods-item-1.jpg', 'images/goods-item-1.jpg', 'images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
				},
				{
					images: ['images/goods-item-1.jpg', 'images/goods-item-1.jpg', 'images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
				},
			],
			newCards: [
				{
					images: ['images/goods-item-1.jpg', 'images/goods-item-1.jpg', 'images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
				},
				{
					images: ['images/goods-item-1.jpg', 'images/goods-item-1.jpg', 'images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
				},
				{
					images: ['images/goods-item-1.jpg', 'images/goods-item-1.jpg', 'images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
				},
				{
					images: ['images/goods-item-1.jpg', 'images/goods-item-1.jpg', 'images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
				},
				{
					images: ['images/goods-item-1.jpg', 'images/goods-item-1.jpg', 'images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
				},
			],
        }
    },
}
</script>
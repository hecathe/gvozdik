<template>
	<main>
		<the-section class="main-slider" wide>
			<main-slider :main-slides="slides"></main-slider>
		</the-section>

		<the-section class="catalog-nav">
			<catalog-nav :catalog-nav="catalogNav"></catalog-nav>
		</the-section>

		<the-section>
			<app-title link link-text="все акции">Товары по акции / Популярное</app-title>
			<goods-slider :cards="saleCards"></goods-slider>
		</the-section>
	</main>
</template>

<script>
import GoodsSlider from '~/components/GoodsSlider.vue'
import TheSection from '~/components/TheSection.vue'
export default {
  components: { TheSection, GoodsSlider },
	data() {
		return {
			slides: [
				{
					url: '/images/tools.jpg'
				},
				{
					url: '/images/tools.jpg'
				},
				{
					url: '/images/tools.jpg'
				},
			],
			catalogNav: [
				{
					title: 'Инструменты',
					url: '/images/y-tools.jpg',
					span: false,
				},
				{
					title: 'Электрика',
					url: '/images/y-tools.jpg',
					span: false,

				},
				{
					title: 'Сантехника',
					url: '/images/y-tools.jpg',
					span: false,
				},
				{
					title: 'Инструменты',
					url: '/images/y-tools.jpg',
					span: false,
				},
				{
					title: 'Электрика',
					url: '/images/y-tools.jpg',
					span: false,
				},
				{
					title: 'Сантехника',
					url: '/images/y-tools.jpg',
					span: false,
				},
				{
					title: 'Весь каталог',
					url: '/images/y-tools.jpg',
					span: true,
				},
			],
			saleCards: [
				{
					images: ['/images/goods-item-1.jpg', '/images/goods-item-1.jpg', '/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
				},
				{
					images: ['/images/goods-item-1.jpg', '/images/goods-item-1.jpg', '/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
				},
				{
					images: ['/images/goods-item-1.jpg', '/images/goods-item-1.jpg', '/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
				},
				{
					images: ['/images/goods-item-1.jpg', '/images/goods-item-1.jpg', '/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
				},
				{
					images: ['/images/goods-item-1.jpg', '/images/goods-item-1.jpg', '/images/goods-item-1.jpg'],
					title: 'Клещи переставные Sparta 250 мм',
					price: '150 ₽',
				},
			],

		}
	},
}
</script>
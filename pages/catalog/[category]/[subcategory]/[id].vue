<template>
	<main class="main">
		<app-breadcrumbs :breadcrumbs="breadcrumbs"></app-breadcrumbs>

		<the-section class="product-section">
			<h1 class="h1">Клещи переставные Sparta 250 мм</h1>

			<div class="product-section__wrap">

				<div class="product-section__slider">
					<swiper-container
						class="product-section__slider-container"
						slides-per-view="1"
						pagination="true"
					>
						<swiper-slide
						class="product-section__slider-item"
						v-for="(item, index) in images"
						:key="index"
						>
							<div class="product-section__img">
								<img :src="item" alt="">
							</div>
						</swiper-slide>
					</swiper-container>
				</div>
				
				<product-info-list :info-list="infoList"></product-info-list>

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
			link: "/",
			title: "Главная",
			active: false,
			},
			{
			link: "/catalog/",
			title: "Каталог",
			active: false,
			},
			{
			link: "/catalog/tools/",
			title: "Инструмент",
			active: false,
			},
			{
			link: "/catalog/tools/handtools/",
			title: "Ручной инструмент",
			active: false,
			},
			{
			link: "#",
			title: "Клещи",
			active: true,
			},
		],
		images: [
			'/gvozdik/images/goods-item-1.jpg',
			'/gvozdik/images/goods-item-1.jpg',
			'/gvozdik/images/goods-item-1.jpg',
		],
		infoList: [
			{
				key: 'Артикул',
				value: '1234567',
			},
			{
				key: 'Товар',
				value: 'Клещи',
			},
			{
				key: 'Размер',
				value: '30 х 20',
			},
			{
				key: 'Вес',
				value: '100 г',
			},
		]
	};
  },
};
</script>

<style lang="scss" scoped>
.product-section {
	&__wrap {
		display: grid;
		grid-template-columns: minmax(auto, 500px) 1fr 1fr;
		column-gap: 60px;
		min-height: 0;
    	min-width: 0;
	}

	&__img {
		max-width: 500px;

		img {
			width: 100%;
		}
	}
}
</style>
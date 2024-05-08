<template>
	<main class="main">
		<app-breadcrumbs :breadcrumbs="breadcrumbs"></app-breadcrumbs>

		<the-section class="product-section">
			<h1 class="h1">Клещи переставные Sparta 250 мм</h1>

			<div class="product-section__wrap">
				<div class="product-section__slider">
					<swiper-container class="product-section__slider-container" slides-per-view="1" pagination="true">
						<swiper-slide class="product-section__slider-item" v-for="(item, index) in images" :key="index">
							<div class="product-section__img">
								<img :src="item" alt="">
							</div>
						</swiper-slide>
					</swiper-container>
				</div>

				<product-info-list :info-list="infoList"></product-info-list>

				<product-side-bar :side-info-list="cardList" :summary="summary" :delivery="delivery"></product-side-bar>
			</div>

			<app-tabs :tabs="tabs"></app-tabs>

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
			],
			cardList: [
				{
					key: 'Цена',
					value: '150 ₽',
				},
				{
					key: 'Доставка',
					value: '140 ₽',
				},
				{
					key: 'Скидка',
					value: '10 ₽',
				},
			],
			summary: {
				key: 'Итого',
				value: '290 ₽'
			},
			delivery: {
				key: 'Доставка',
				value: '28.03.2024',
			},
			tabs: [
				{ id: 1, title: 'Описание', content: '<p>Но интерактивные прототипы представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть своевременно верифицированы. Банальные, но неопровержимые выводы, а также независимые государства освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, ассоциативно распределены по отраслям. Картельные сговоры не допускают ситуации, при которой сторонники тоталитаризма в науке лишь добавляют фракционных разногласий и объединены в целые кластеры себе подобных. Вот вам яркий пример современных тенденций — укрепление и развитие внутренней структуры предопределяет высокую востребованность системы обучения кадров, соответствующей насущным потребностям. Сложно сказать, почему акционеры крупнейших компаний могут быть призваны к ответу. Прежде всего, повышение уровня гражданского сознания создаёт предпосылки для стандартных подходов.</p>' },
				{ id: 2, title: 'Характеристики', content: [
					{
						key: 'Артикул',
						value: '1234567',
					},
					{
						key: 'Объём',
						value: '1234567',
					},
					{
						key: 'Артикул',
						value: '1234567',
					},
					{
						key: 'Артикул',
						value: '1234567',
					},
					{
						key: 'Объём',
						value: '1234567',
					},
					{
						key: 'Артикул',
						value: '1234567',
					},
					{
						key: 'Артикул',
						value: '1234567',
					},
					{
						key: 'Объём',
						value: '1234567',
					},
					{
						key: 'Артикул',
						value: '1234567',
					},
				]},
				{ id: 3, title: 'Отзывы', content: [
					{
						name: 'Имя пользователя',
						date: '12.12.2024',
						advantages: {
							title: 'Достоинства',
							text: 'Все норм. В комплекте 4 ножки и крепёж к стене'
						},
						disadvantages: {
							title: 'Недостатки',
							text: 'Все норм. В комплекте 4 ножки и крепёж к стене'
						},
						comment: {
							title: 'Комментарий',
							text: 'Все норм. В комплекте 4 ножки и крепёж к стене'
						},
						images: [
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
						]
					},
					{
						name: 'Имя пользователя',
						date: '12.12.2024',
						advantages: {
							title: 'Достоинства',
							text: 'Все норм. В комплекте 4 ножки и крепёж к стене'
						},
						disadvantages: {
							title: 'Недостатки',
							text: 'Все норм. В комплекте 4 ножки и крепёж к стене'
						},
						comment: {
							title: 'Комментарий',
							text: 'Все норм. В комплекте 4 ножки и крепёж к стене'
						},
						images: [
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
						]
					},{
						name: 'Имя пользователя',
						date: '12.12.2024',
						advantages: {
							title: 'Достоинства',
							text: 'Все норм. В комплекте 4 ножки и крепёж к стене'
						},
						disadvantages: {
							title: 'Недостатки',
							text: 'Все норм. В комплекте 4 ножки и крепёж к стене'
						},
						comment: {
							title: 'Комментарий',
							text: 'Все норм. В комплекте 4 ножки и крепёж к стене'
						},
						images: [
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
							'/gvozdik/images/goods-item-1.jpg',
						]
					}
				]}
			]
		};
	},
};
</script>

<style lang="scss" scoped>
.tabs {
	margin-top: 60px;
}

.product-section {
	&__wrap {
		display: grid;
		grid-template-columns: minmax(auto, 500px) 1fr 1fr;
		align-items: flex-start;
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
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

		<the-section>
			<app-title link link-text="все новинки">Новинки</app-title>
			<goods-slider :cards="newCards"></goods-slider>
		</the-section>

		<main-about-company></main-about-company>

		<main-news :news-list="news"></main-news>

		<main-accordion :acc-list="acc_list"></main-accordion>

		<subscribe-form></subscribe-form>
	</main>
</template>

<script>
export default {
	data() {
		return {
			slides: [
				{
					url: 'images/tools.jpg'
				},
				{
					url: 'images/tools.jpg'
				},
				{
					url: 'images/tools.jpg'
				},
			],
			catalogNav: [
				{
					title: 'Инструменты',
					url: 'images/y-tools.jpg',
					span: false,
				},
				{
					title: 'Электрика',
					url: 'images/y-tools.jpg',
					span: false,

				},
				{
					title: 'Сантехника',
					url: 'images/y-tools.jpg',
					span: false,
				},
				{
					title: 'Инструменты',
					url: 'images/y-tools.jpg',
					span: false,
				},
				{
					title: 'Электрика',
					url: 'images/y-tools.jpg',
					span: false,
				},
				{
					title: 'Сантехника',
					url: 'images/y-tools.jpg',
					span: false,
				},
				{
					title: 'Весь каталог',
					url: 'images/y-tools.jpg',
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
			news: [
				{
					image: 'images/work-tools.jpg',
					title: 'Заголовок новости',
					text: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p><p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>',
					img_left: true,
				},
				{
					image: 'images/work-tools.jpg',
					title: 'Заголовок новости',
					text: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>',
					img_left: false,
				},
				{
					image: 'images/work-tools.jpg',
					title: 'Заголовок новости',
					text: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>',
					img_left: true,
				},
			],
			acc_list: [
				{
					title: 'Вопрос 1',
					text: '<p>Вот вам яркий пример современных тенденций — базовый вектор развития требует анализа позиций, занимаемых участниками в отношении поставленных задач. Таким образом, глубокий уровень погружения однозначно определяет каждого участника как способного принимать собственные решения касаемо благоприятных перспектив.</p>'
				},
				{
					title: 'Вопрос 2',
					text: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений. </p>'
				},
				{
					title: 'Вопрос 3',
					text: '<p>Вот вам яркий пример современных тенденций — базовый вектор развития требует анализа позиций, занимаемых участниками в отношении поставленных задач. Таким образом, глубокий уровень погружения однозначно определяет каждого участника как способного принимать собственные решения касаемо благоприятных перспектив.</p>'
				},
			]
		}
	},
}
</script>
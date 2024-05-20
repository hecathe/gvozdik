<template>
	<main>
		<the-section class="main-slider" wide>
			<main-slider :main-slides="slides"></main-slider>
		</the-section>

		<the-section class="catalog-nav">
			<catalog-nav :catalog-nav="catalogNav"></catalog-nav>
		</the-section>

		<product-slider-section :slider-list="saleCards">Популярное</product-slider-section>

		<product-slider-section :slider-list="newCards">Новинки</product-slider-section>

		<main-about-company></main-about-company>

		<main-news :news-list="news"></main-news>

		<main-accordion :acc-list="acc_list"></main-accordion>
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
					link: '/catalog/tools/',
					span: false,
				},
				{
					title: 'Электрика',
					url: 'images/y-tools.jpg',
					link: '/catalog/electric/',
					span: false,

				},
				{
					title: 'Сантехника',
					url: 'images/y-tools.jpg',
					link: '/catalog/',
					span: false,
				},
				{
					title: 'Инструменты',
					url: 'images/y-tools.jpg',
					link: '/catalog/',
					span: false,
				},
				{
					title: 'Электрика',
					url: 'images/y-tools.jpg',
					link: '/catalog/',
					span: false,
				},
				{
					title: 'Сантехника',
					url: 'images/y-tools.jpg',
					link: '/catalog/',
					span: false,
				},
				{
					title: 'Весь каталог',
					url: 'images/y-tools.jpg',
					link: '/catalog/',
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
			news: [
				{
					image: 'images/work-tools.jpg',
					title: 'Заголовок новости',
					text: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p><p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>',
				},
				{
					image: 'images/work-tools.jpg',
					title: 'Заголовок новости',
					text: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>',
				},
				{
					image: 'images/work-tools.jpg',
					title: 'Заголовок новости',
					text: '<p>Задача организации, в особенности же убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение как самодостаточных, так и внешне зависимых концептуальных решений.</p>',
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
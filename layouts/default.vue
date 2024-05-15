<template>
	<Notice></Notice>
	<AppHeader
		:nav-list="menu"
		:user-actions="user_menu"
		:aside-menu="aside_menu"
	></AppHeader>
	<!-- <AppMenu></AppMenu> -->
	<slot />
	<subscribe-form></subscribe-form>
	<AppFooter
		:nav-list="catalog_nav"
		:footer-menu="menu"
		:social-list="social"
		:payment-list="cards"
	></AppFooter>
</template>

<script>
export default {
	data() {
		return {
			menu: [
				{
					name: "Новости",
					link: "/news/"
				},
				{
					name: "О компании",
					link: "#"
				},
				{
					name: "Доставка",
					link: "/delivery/",
				},
				{
					name: "Контакты",
					link: "/contacts/",
				},
			],
			user_menu: [
				{
				name: "heart",
				},
				{
				name: "user",
				},
				{
				name: "cart",
				link: "/cart",
				},
			],
			catalog_nav: [
				{
					title: "Электрика",
					link: '/catalog/electric',
				},
				{
					title: "Инструмент",
					link: '/catalog/tools',
				},
				{
					title: "Сантехника",
					link: '/catalog/tools',
				},
				{
					title: "Стройматериалы",
					link: '/catalog/tools',
				},
				{
					title: "Электрика",
					link: '/catalog/tools',
				},
				{
					title: "Инструмент",
					link: '/catalog/tools',
				},
				{
					title: "Сантехника",
					link: '/catalog/tools',
				},
				{
					title: "Стройматериалы",
					link: '/catalog/tools',
				},
				{
					title: "Электрика",
					link: '/catalog/tools',
				},
				{
					title: "Инструмент",
					link: '/catalog/tools',
				},
				{
					title: "Сантехника",
					link: '/catalog/tools',
				},
				{
					title: "Стройматериалы",
					link: '/catalog/tools',
				}
			],
			social: [
				{
					whatsapp: "#",
				},
				{
					telegram: "#",
				},
				{
					youtube: "#",
				},
				{
					vk: "#",
				},
			],
			cards: [
				"/gvozdik/images/mastercard.png",
				"/gvozdik/images/visa.png",
				"/gvozdik/images/sbp.png",
				"/gvozdik/images/mir.png",
			],
			aside_menu: [
				{
					title: 'Стройматериалы',
					link: '/catalog/building',
					svg_name: 'brick-wall',
				},
				{
					title: 'Инструмент',
					link: '/catalog/tools',
					svg_name: 'construction-rounded',
				},
				{
					title: 'Электрика',
					link: '/catalog/electric',
					svg_name: 'brick-wall',
				},
				{
					title: 'Крепёж',
					link: '/catalog/nails',
					svg_name: 'screw',
				},
				{
					title: 'Инженерные системы',
					link: '/catalog/pipelines',
					svg_name: 'pipeline',
				},
				{
					title: 'Сантехника',
					link: '/catalog/baths',
					svg_name: 'bath',
				},
				{
					title: 'Товары для дома',
					link: '/catalog/brick-wall',
					svg_name: 'brick-wall',
				},
			]
		};
	},
};
</script>

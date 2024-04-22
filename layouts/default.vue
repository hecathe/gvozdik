<template>
	<Notice></Notice>
	<AppHeader
		:nav-list="menu"
		:user-actions="user_menu"
	></AppHeader>
	<!-- <AppMenu></AppMenu> -->
	<slot />
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
					link: "/news"
				},
				{
					name: "О компании",
					link: "#"
				},
				{
					name: "Доставка",
					link: "#",
				},
				{
					name: "Контакты",
					link: "#",
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
				},
			],
			catalog_nav: [
				"Электрика",
				"Инструмент",
				"Сантехника",
				"Стройматериалы",
				"Электрика",
				"Инструмент",
				"Сантехника",
				"Стройматериалы",
				"Электрика",
				"Инструмент",
				"Сантехника",
				"Стройматериалы",
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
				"../../images/mastercard.png",
				"../../images/visa.png",
				"../../images/sbp.png",
				"../../images/mir.png",
			],
		};
	},
};
</script>

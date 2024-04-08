<template>
	<Notice></Notice>
	<AppHeader :nav-list="menu" :user-actions="user_menu"></AppHeader>
	<slot />
	<AppFooter :nav-list="catalog_nav" :footer-menu="menu" :social-list="social"></AppFooter>
</template>

<script>
export default {
	data() {
		return {
			menu: [
				'Новости',
				'О компании',
				'Доставка',
				'Контакты',
			],
			user_menu: [
				{
					name: 'heart',
				},
				{
					name: 'user',
				},
				{
					name: 'cart',
				}
			],
			catalog_nav: [
				'Электрика',
				'Инструмент',
				'Сантехника',
				'Стройматериалы',
				'Электрика',
				'Инструмент',
				'Сантехника',
				'Стройматериалы',
				'Электрика',
				'Инструмент',
				'Сантехника',
				'Стройматериалы',
			],
			social: [
				{
					whatsapp: '#',
				},
				{
					telegram: '#',
				},
				{
					youtube: '#',
				},
				{
					vk: '#',
				},
			]
		}
	},
}
</script>
<template>
	<Notice></Notice>
	<AppHeader :nav-list="menu" :user-actions="userMenu"></AppHeader>
	<slot />
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
			userMenu: [
				{
					name: 'heart',
				},
				{
					name: 'user',
				},
				{
					name: 'cart',
				}
			]
		}
	},
}
</script>
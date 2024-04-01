<template>
  <div>
    <!-- <NuxtWelcome /> -->
	<Notice></Notice>
	<AppHeader :nav-list="menu"></AppHeader>
	<NuxtPage></NuxtPage>
  </div>
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
					name: heart,
				},
				{
					name: user,
				},
				{
					name: cart,
				}
			]
		}
	},
}
</script>

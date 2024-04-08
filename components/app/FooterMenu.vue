<template>
	<ul class="footer-menu">
		<li class="footer-menu__item" v-for="(item, index) in footerMenu" :key="index">
			<nuxt-link class="footer-menu__link" to="#">{{ item }}</nuxt-link>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		footerMenu: {
			type: Array,
			default: () => [],
		}
	}
}
</script>

<style lang="scss" scoped>
.footer-menu {
	display: grid;
	row-gap: 24px;
	justify-items: flex-end;
	@include reset-list;

	&__link {
		font-weight: 700;
		font-size: 28px;
		line-height: 120%;
		color: inherit;
		text-decoration: none;

		&:hover {
			border-bottom: 2px solid $mainBlue;
		}
	}
}
</style>
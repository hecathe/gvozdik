<template>
	<ul class="footer-nav">
		<li class="footer-nav__item" v-for="(item, index) in navList" :key="index">
			<nuxt-link class="footer-nav__link" :to="item.link">{{ item.title }}</nuxt-link>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		navList: {
			type: Array,
			default: () => [],
		}
	}
}
</script>

<style lang="scss" scoped>
.footer-nav {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 60px;
	row-gap: 16px;
	@include reset-list;

	&__link {
		font-weight: 500;
		font-size: 20px;
		line-height: 120%;
		color: inherit;
		text-decoration: none;

		&:hover {
			color: $darkBlue;
		}
	}
}
</style>
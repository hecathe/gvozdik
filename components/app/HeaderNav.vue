<template>
	<nav class="nav">
		<ul class="nav__list">
			<li class="nav__item" v-for="(navItem, index) in navList" :key="index">
				<nuxt-link class="nav__link" to="#">{{ navItem }}</nuxt-link>
			</li>
		</ul>
	</nav>
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
.nav {
	&__list {
		display: flex;
		column-gap: 40px;
		@include reset-list;
	}

	&__link {
		font-size: 20px;
		font-weight: 500;
		color: $mainBlack;
		text-decoration: none;
		padding: 12px 0;

		&:hover {
			border-bottom: 2px solid $mainBlue;
		}
	}
}
</style>
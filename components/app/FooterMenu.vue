<template>
	<ul class="footer-menu">
		<li class="footer-menu__item" v-for="(item, index) in footerMenu" :key="index">
			<nuxt-link class="footer-menu__link" :to="item.link">{{ item.name }}</nuxt-link>
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
	row-gap: 16px;
	justify-items: flex-end;
	@include reset-list;

	&__link {
		position: relative;
		font-weight: 700;
		font-size: 28px;
		line-height: 120%;
		color: inherit;
		text-decoration: none;
		padding-bottom: 8px;

		&::after {
			position: absolute;
			content: '';
			left: 0;
			bottom: 0;
			width: 0;
			height: 2px;
			background-color: $mainBlue;
			transition: width 150ms linear;
		}

		&:hover {
			&::after {
				width: 100%;
			}
		}
	}
}

@media screen and (max-width: 975px) {
	.footer-menu {
		justify-items: flex-start;

		&__link {
			font-size: 20px;
		}
	}
}
</style>
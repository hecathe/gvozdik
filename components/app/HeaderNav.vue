<template>
	<nav class="header-nav">
		<ul class="header-nav__list">
			<li class="header-nav__item header-nav__item_catalog">
				<nuxt-link class="header-nav__link" to="/catalog/">Каталог</nuxt-link>
			</li>
			<li class="header-nav__item" v-for="(navItem, index) in navList" :key="index">
				<nuxt-link class="header-nav__link" :to="navItem.link">{{ navItem.name }}</nuxt-link>
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
.header-nav {
	&__list {
		display: flex;
		column-gap: 40px;
		@include reset-list;
	}

	&__item {
		&_catalog {
			display: none;
		}
	}

	&__link {
		position: relative;
		display: flex;
		font-size: 20px;
		font-weight: 500;
		color: $mainBlack;
		text-decoration: none;
		padding: 12px 0;

		&::after {
			position: absolute;
			content: '';
			left: 0;
			bottom: 0;
			width: 0;
			height: 2px;
			background-color: $mainBlue;
			transition: width 150ms linear;
			// border-bottom: 2px solid $mainBlue;
		}

		&:hover {
			&::after {
				width: 100%;
			}
		}
	}
}

@media screen and (max-width: 1023px) {
	.header-nav {
		&__list {
			column-gap: 24px;
		}

		&__link {
			font-size: 18px;
		}
	}
}

@media screen and (max-width: 767px) {
	.header-nav {
		&__list {
			flex-direction: column;
		}

		&__item {
			&_catalog {
				display: block;
			}
		}
	}
}
</style>
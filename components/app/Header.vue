<template>
	<header class="header">
		<div class="container">
			<div class="header__top">
				<nuxt-link to="/" class="header__logo">
					<svg-icon name="logo" width="121" height="64"></svg-icon>
				</nuxt-link>

				<button class="header__burger">
					<svg-icon name="burger" width="28" height="28"></svg-icon>
				</button>

				<AppHeaderNav :nav-list="navList"></AppHeaderNav>

				<a class="header__phone" href="tel:8 800 555 55 55">8 800 555 55 55</a>
			</div>

			<div class="header__bottom">
				<div class="header__wrap">
					<button @click="toggleMenu" class="header__catalog-btn">
						<svg-icon 
							:name="isMenuOpen ? 'close' : 'more-grid'"
							width="24" 
							height="24" 
						></svg-icon>
						<span>Каталог</span>
					</button>
					<UiInputSearch></UiInputSearch>
				</div>

				<AppHeaderUserActions :user-actions="userActions"></AppHeaderUserActions>
			</div>

			<AppMenu 
				v-if="isMenuOpen" 
				:catalog-menu="catalogMenu"
			></AppMenu>
		</div>
	</header>
</template>

<script>
export default {
	props: {
		navList: {
			type: Array,
			default: () => [],
		},
		userActions: {
			type: Array,
			default: () => [],
		},
		catalogMenu: {
			type: Array,
			default: () => [],
		},

	},

	data() {
		return {
			isMenuOpen: false,
		}
	},

	methods: {
		toggleMenu() {
			this.isMenuOpen = !this.isMenuOpen;

			this.isMenuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
		}
	},
}
</script>

<style lang="scss" scoped>
.header {
	&__burger {
		display: none;
	}

	&__top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 4px 0;
	}

	&__logo {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__phone {
		font-size: 20px;
		font-weight: 500;
		color: $mainBlack;
		text-decoration: none;

		&:hover {
			color: $mainBlue;
		}
	}

	&__bottom {
		display: flex;
		justify-content: space-between;
		// align-items: center;
		padding-top: 8px;
		padding-bottom: 16px;
	}

	&__wrap {
		display: flex;
		column-gap: 40px;
	}

	&__catalog-btn {
		display: flex;
		column-gap: 10px;
		font-size: 20px;
		font-weight: 500;
		line-height: 120%;
		color: $white;
		background-color: $mainBlue;
		border-radius: 10px;
		padding: 12px;
		transition: background 150ms linear;

		svg {
			--currentColor: #{$white};
		}

		&:hover {
			background-color: $darkBlue;
		}
	}
}

@media screen and (max-width: 767px) {
	.header {
		&__burger {
			display: block;
		}

		&-nav {
			display: none;
		}

		&__phone {
			display: none;
		}

		&__bottom {
			display: none;
		}
	}
}
</style>
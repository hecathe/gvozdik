<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__top">
				<div class="footer__block">
					<nuxt-link to="/" class="footer__logo">
						<svg-icon name="logo" width="150" height="64"></svg-icon>
					</nuxt-link>
					<a class="footer__tel" href="tel:8 800 555 55 55">8 800 555 55 55</a>

					<social-list :social-list="socialList"></social-list>
				</div>

				<div class="footer__block">
					<h3 class="footer__title">Каталог</h3>
					<AppFooterNav :nav-list="navList"></AppFooterNav>
				</div>

				<div class="footer__block">
					<AppFooterMenu :footer-menu="footerMenu"></AppFooterMenu>
				</div>
			</div>

			<div class="footer__bottom">
				<div class="footer__block">
					<span>© 2024 «Гвоздик»</span>
					<nuxt-link class="footer__link" to="#">Политика конфиденциальности</nuxt-link>
				</div>
				<div class="footer__block">
					<payment-list :payment-list="paymentList"></payment-list>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	props: {
		navList: {
			type: Array,
			default: () => [],
		},
		footerMenu: {
			type: Array,
			default: () => [],
		},
		socialList: {
			type: Array,
			default: () => [],
		},
		paymentList: {
			type: Array,
			default: () => [],
		}
	}
}
</script>

<style lang="scss" scoped>
.footer {
	$this: &;
	background-color: $grey;

	&__top {
		display: flex;
		justify-content: space-between;
		padding: 40px 0 60px;
	}

	&__block {
		display: flex;
		flex-direction: column;
		row-gap: 24px;
		font-weight: 500;
	}

	&__logo {
		display: flex;
	}

	&__tel {
		font-weight: 700;
		font-size: 28px;
		line-height: 120%;
		color: inherit;
		text-decoration: none;

		&:hover {
			color: $darkBlue;
		}
	}

	&__link {
		color: inherit;

		&:hover {
			text-decoration: none;
		}
	}

	&__title {
		font-weight: 700;
		font-size: 28px;
		line-height: 120%;
	}

	&__bottom {
		display: grid;
		grid-template-columns: 1fr 1fr;
		border-top: 1px solid $mainBlack;
		padding: 28px 0;
	}
}

@media screen and (max-width: 767px) {
	.footer {
		$this: &;
		
		&__top {
			flex-direction: column;
    		row-gap: 16px;
			padding: 20px 0;
		}

		&__title {
			font-size: 20px;
		}

		&__bottom {
			display: flex;
			flex-direction: column-reverse;
			row-gap: 20px;

			&__block {
				&:first-child {
					flex-direction: column-reverse;
					align-items: center;
				}
			}
		}

		
	}
}
</style>
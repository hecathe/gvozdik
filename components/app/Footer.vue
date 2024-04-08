<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__wrap">
				<div class="footer__block">
					<svg-icon class="footer__logo" name="logo" width="200" height="60"></svg-icon>
					<a class="footer__tel" href="tel:8 800 555 55 55">8 800 555 55 55</a>

					<social-list :social-list="socialList"></social-list>
				</div>

				<div class="footer__block">
					<h3 class="footer__title">Каталог</h3>
					<AppFooterNav :nav-list="navList"></AppFooterNav>
				</div>
				<AppFooterMenu :footer-menu="footerMenu"></AppFooterMenu>
			</div>
			<div class="footer__wrap">

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
		}
	}
}
</script>

<style lang="scss" scoped>
.footer {
	background-color: $grey;
	padding-top: 40px;
	padding-bottom: 40px;

	&__wrap {
		display: flex;
		justify-content: space-between;
	}

	&__block {
		display: grid;
		row-gap: 24px;
	}

	&__title {
		font-weight: 700;
		font-size: 28px;
		line-height: 120%;
	}
}
</style>
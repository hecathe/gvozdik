<template>
	<main class="main">
		<the-section class="cart">
			<nuxt-link to="#">
				<svg-icon name="arrow-left" width="24" height="24"></svg-icon>
				Вернуться к покупкам
			</nuxt-link>

            <h1 class="h1">Корзина</h1>

			<div class="cart__content">
				<ul class="cart__list">
					<li class="cart__good" v-for="(cartItem, index) in cart_list" :key="index">
						<cart-item :cart-item="cartItem"></cart-item>
					</li>
				</ul>

				<product-side-bar></product-side-bar>
			</div>
        </the-section>
	</main>
</template>

<script>
export default {
	data() {
		return {
			cart_list: [
				{
					img: '/gvozdik/images/drill.jpg',
					title: 'Клещи переставные Sparta 250 мм',
					article: '123456',
					weight: '300 г',
					price: 150,
				},
			]
		}
	},
}
</script>

<style lang="scss" scoped>
.cart {
	&__content {
		display: grid;
		grid-template-columns: 1fr minmax(auto, 310px);
		column-gap: 60px
	}

	&__list {
		@include reset-list;
	}
}
</style>
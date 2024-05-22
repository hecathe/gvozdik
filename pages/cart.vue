<template>
	<main class="main">
		<the-section class="cart">
			<nuxt-link class="cart__link" to="/catalog/">
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

				<product-side-bar 
					:side-info-list="product_info" 
					:summary="summary" 
					:delivery="delivery" 
					:show="false"
				></product-side-bar>
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
					price: '150 ₽ / шт.',
					summary: 300,
				},
				{
					img: '/gvozdik/images/drill.jpg',
					title: 'Клещи переставные Sparta 250 мм',
					article: '123456',
					weight: '300 г',
					price: '150 ₽ / шт.',
					summary: 300,
				},
				{
					img: '/gvozdik/images/drill.jpg',
					title: 'Клещи переставные Sparta 250 мм',
					article: '123456',
					weight: '300 г',
					price: '150 ₽ / шт.',
					summary: 300,
				},
			],
			product_info: [
				{
					key: 'Цена',
					value: '150 ₽',
				},
				{
					key: 'Доставка',
					value: '140 ₽',
				},
				{
					key: 'Скидка',
					value: '10 ₽',
				},
			],
			summary: {
				key: 'Итого',
				value: '290 ₽'
			},
			delivery: {
				key: 'Доставка',
				value: '28.03.2024',
			},
		}
	},
}
</script>

<style lang="scss" scoped>
.cart {
	&__content {
		display: grid;
		grid-template-columns: 1fr minmax(auto, 310px);
		column-gap: 60px;
		align-items: flex-start
	}

	&__list {
		@include reset-list;
		display: grid;
		row-gap: 24px;
	}

	&__link {
		display: flex;
		align-items: center;
		column-gap: 12px;
		font-weight: 700;
		color: #757575;
		text-decoration: none;
		margin-bottom: 40px;

		&:hover {
			color: $mainBlue;

			svg {
				--currentColor: #{$mainBlue};
			}
		}
	}
}

@media screen and (max-width: 767px) {
	.cart {
		&__content {
			grid-template-columns: 1fr;
			row-gap: 40px;
		}
	}
}
</style>
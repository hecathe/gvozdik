<template>
	<div class="cart-item">
		<div class="cart-item__img">
			<img :src="cartItem.img" alt="">
		</div>

		<div class="cart-item__wrap">
			<div class="cart-item__block">
				<div class="cart-item__left">
					<h3>{{ cartItem.title }}</h3>
					<p>Артикул: {{ cartItem.article }}</p>
					<p>Вес: {{ cartItem.weight }}</p>
				</div>

				<div class="cart-item__right cart-item__right_grid">
					<p class="cart-item__sum">{{ cartItem.summary }} ₽</p>
					<p class="cart-item__price">{{ cartItem.price }}</p>
				</div>
			</div>

			<div class="cart-item__block">
				<div class="cart-item__left cart-item__col">
					<ui-button-like class="cart-item__btn" width="24" height="24"></ui-button-like>
					<button class="cart-item__btn cart-item__delete">
						<svg-icon name="trash" width="24" height="24"></svg-icon>
					</button>
				</div>

				<div class="cart-item__right">
					<ui-input-number></ui-input-number>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		cartItem: {
			type: Object,
			default: () => { },
		}
	}
}
</script>

<style lang="scss" scoped>
.number {
	max-width: 170px;
}
.cart-item {
	display: grid;
	grid-template-columns: 150px 1fr;
	column-gap: 20px;
	border: 1px solid $grey;
	border-radius: 10px;
	padding: 12px;

	&__img {
		display: flex;
		overflow: hidden;
		border-radius: 10px;

		img {
			width: 100%;
			object-fit: cover;
		}
	}

	&__wrap {
		display: grid;
		row-gap: 8px;
	}

	&__block {
		display: flex;
		justify-content: space-between;
		column-gap: 12px;
	}

	&__right {
		white-space: nowrap;

		&_grid {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			row-gap: 4px;
		}
	}

	&__col {
		display: flex;
		align-items: center;
		column-gap: 20px;
	}

	&__delete {
		svg {
			--currentColor: #{$greyDark};
		}
	}

	&__btn {
		display: flex;

		&:hover {
			svg {
				--currentColor: #{$mainRed};
			}
		}
	}

	&__sum {
		font-size: 26px;
		line-height: 120%;
		font-weight: 700;
	}

	&__price {
		font-size: 16px;
	}
}

@media screen and (max-width: 767px) {
	.cart-item {
		grid-template-columns: 1fr;
		row-gap: 20px;

		&__img {
			max-height: 250px;
		}
	}
}
</style>
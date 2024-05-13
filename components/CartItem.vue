<template>
	<div class="cart-item">
		<div class="cart-item__left">
			<div class="cart-item__img">
				<img :src="cartItem.img" alt="">
			</div>

			<div class="cart-item__wrap">
				<div class="cart-item__info">
					<h3>{{ cartItem.title }}</h3>
					<p>Артикул: {{ cartItem.article }}</p>
					<p>Вес: {{ cartItem.weight }}</p>
				</div>

				<div class="cart-item__actions">
					<ui-button-like class="cart-item__btn" width="24" height="24"></ui-button-like>
					<button class="cart-item__btn cart-item__delete">
						<svg-icon name="trash" width="24" height="24"></svg-icon>
					</button>
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
			default: () => {},
		}
	}
}
</script>

<style lang="scss" scoped>
.cart-item {
	display: flex;
	justify-content: space-between;
	border: 1px solid $grey;
	border-radius: 10px;
	padding: 12px;

	&__left {
		display: flex;
		column-gap: 20px;
	}

	&__img {
		max-width: 125px;
		display: flex;
		overflow: hidden;
		border-radius: 10px;
	}

	&__wrap {
		display: grid;
		align-items: flex-start;
		row-gap: 8px;
	}

	&__actions {
		display: flex;
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
}
</style>
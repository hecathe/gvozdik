<template>
	<div class="product-card">
		<swiper-container class="product-card__images" pagination="true" allow-touch-move="false" slides-per-view="1">
			<swiper-slide v-for="(item, index) in card.images" :key="index">
				<!-- <div class="hover-area"></div>
				<div class="hover-area"></div>
				<div class="hover-area"></div>
				<div class="hover-area"></div> -->
				<img class="product-card__img" :src="item" alt="">
			</swiper-slide>
		</swiper-container>

		<div class="product-card__info">
			<nuxt-link class="product-card__text" to="#">
				<h3 class="product-card__title h3">{{ card.title }}</h3>
				<span class="product-card__price">{{ card.price }}</span>
			</nuxt-link>

			<div class="product-card__actions">
				<ui-input-number></ui-input-number>

				<ui-button>
					<svg-icon width="24" height="24" name="cart"></svg-icon>
				</ui-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		card: {
			type: Object,
			default: () => { },
		},
	}
}
</script>

<style lang="scss" scoped>
.product-card {
	.hover-area {
		position: absolute;
		width: 25%;
		height: 100%;

		&:nth-of-type(2) {
			left: 25%;
		}

		&:nth-of-type(3) {
			left: 50%;
		}

		&:nth-of-type(4) {
			left: 75%;
		}
	}

	&__images {
		max-height: 250px;
	}

	&__img {
		max-width: 100%;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&__info {
		display: grid;
		row-gap: 20px;
		margin-top: 16px;
	}

	&__text {
		display: flex;
		justify-content: space-between;
		column-gap: 20px;
		color: inherit;
		text-decoration: none;

		&:hover {
			color: $darkBlue;
		}
	}

	&__price {
		font-weight: 700;
		font-size: 22px;
		line-height: 120%;
		white-space: nowrap;
	}

	&__actions {
		display: flex;
		justify-content: space-between;
		// column-gap: 28px;
	}
}

swiper-container::part(bullet) {
	background-color: $white;
	opacity: 1;
}

swiper-container::part(bullet-active) {
	width: 16px;
	background-color: $white;
	border-radius: 10px;
	transition: width 150ms linear;
}

// swiper-slide {
// 	max-width: min-content;
// }
</style>
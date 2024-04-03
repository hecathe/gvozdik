<template>
	<div class="goods-slider-card">
		<swiper-container class="goods-slider-card__images" pagination="true" pagination-clickable="true">
			<swiper-slide v-for="(item, index) in card.images" :key="index">
				<div class="hover-area"></div>
				<div class="hover-area"></div>
				<div class="hover-area"></div>
				<div class="hover-area"></div>
				<img :src="item" alt="">
			</swiper-slide>
		</swiper-container>

		<div class="goods-slider-card__info">
			<nuxt-link class="goods-slider-card__text" to="#">
				<h3>{{ card.title }}</h3>
				<span>{{ card.price }}</span>
			</nuxt-link>

			<div class="goods-slider-card__actions">
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
.goods-slider-card {
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

	&__actions {
		display: flex;
		justify-content: space-between;
		column-gap: 28px;
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
</style>
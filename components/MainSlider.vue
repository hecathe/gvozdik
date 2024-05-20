<template>
	<swiper-container class="main-slider" loop="true" navigation="true">
		<swiper-slide class="main-slider__item" v-for="(item, index) in mainSlides" :key="index">
			<img class="main-slider__img" :src="item.url" alt="">

			<div class="container">
				<div class="main-slider__text">
					<h1 class="main-slider__title">We produce the best products</h1>
					<p>We produce the best products</p>
				</div>
			</div>
		</swiper-slide>
	</swiper-container>
</template>

<script>
export default {
	props: {
		mainSlides: {
			type: Array,
			default: () => [],
		}
	},
}
</script>

<style lang="scss" scoped>
.main-slider {
	position: relative;
	overflow: hidden;

	&__img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
	}

	&__text {
		display: grid;
		align-content: center;
		height: 500px;
		color: $white;
		padding: 0 15%;
	}

	&__title {
		font-size: 96px;
		line-height: 110%;
		// color: $white;
	}
}

swiper-container::part(button-next) {
	right: calc(100vw - 620px - 50%);
	color: $white;
}
swiper-container::part(button-prev) {
	left: calc(100vw - 620px - 50%);
	color: $white;
}

@media screen and (max-width: 767px) {
	.main-slider {
		&__text {
			height: 350px;
			padding: 40px;
		}

		&__title {
			font-size: 36px;
		}
	}

	swiper-container::part(button-next) {
		right: 12px;
		height: 30px;
	}
	swiper-container::part(button-prev) {
		left: 12px;
		height: 30px;
	}
}
</style>
<template>
	<div class="swiper">
		<swiper-container class="product-slider" slides-per-view="4" mousewheel="false" allow-touch-move="true" space-between="60">
			<swiper-slide class="product-slider__item" v-for="(item, index) in cards" :key="index">
				<product-card :card="item"></product-card>
			</swiper-slide>
		</swiper-container >
	</div>
</template>

<script>
export default {
	props: {
		cards: {
			type: Array,
			default: () => [],
		}
	}
}
</script>

<style lang="scss" scoped>
swiper-container::part(container) {
	overflow: visible;
}
</style>
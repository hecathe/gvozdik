<template>
	<div class="swiper">
		<swiper-container class="goods-slider" slides-per-view="4" mousewheel="false" allow-touch-move="true" space-between="60">
			<swiper-slide class="goods-slider__item" v-for="(item, index) in cards" :key="index">
				<goods-slider-card :card="item"></goods-slider-card>
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
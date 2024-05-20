<template>
	<the-section class="product-slider-section">
		<app-title link link-text="все акции">
			<slot></slot>
		</app-title>
		<product-slider :cards="sliderList"></product-slider>
	</the-section>
</template>

<script>
export default {
	props: {
		sliderList: {
			type: Array,
			default: () => [],
		}
	}
}
</script>
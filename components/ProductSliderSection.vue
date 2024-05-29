<template>
	<the-section class="product-slider-section">
		<app-title link :link-text="linkText" :url="url">
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
		},
		url: {
			type: String,
			default: '#',
		},
		linkText: {
			type: String,
			default: 'посмотреть всё',
		}
	}
}
</script>
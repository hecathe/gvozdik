<template>
	<ul class="product-grid">
		<li class="product-grid__item" :class="{'span-2': product.span}" v-for="(product, index) in productList" :key="index">
			<product-card :card="product"></product-card>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		productList: {
			type: Array,
			default: () => [],
		},
	}
}
</script>

<style lang="scss" scoped>
.product-grid {
	display: grid;
	grid-template-columns: repeat(3, minmax(auto, 300px));
	column-gap: 24px;
	row-gap: 24px;
	@include reset-list;
	min-height: 0;
    min-width: 0;

	&__item {
		&.span-2 {
			grid-column: span 2;
		}
	}
}

@media screen and (max-width: 1279px) {
	.product-grid {
		grid-template-columns: repeat(2, minmax(auto, 500px));

		&__item {
			&.span-2 {
				grid-column: span 1;
			}
		}
	}
}

@media (min-width: 0px) and (max-width: 767px) {
	.product-grid {
		grid-template-columns: repeat(1, 100%);
		row-gap: 36px;

		&__item {
			&.span-2 {
				grid-column: span 1;
			}
		}
	}
}
</style>
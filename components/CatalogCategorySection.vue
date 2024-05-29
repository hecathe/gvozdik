<template>
	<the-section class="catalog-category">
		<div class="catalog-category__wrap">
			<aside class="catalog-category__aside">
				<div class="catalog-category__filter">
					<slot></slot>
				</div>
			</aside>

			<div class="catalog-category__grid">
				<app-sort></app-sort>
				<product-grid :product-list="products"></product-grid>
			</div>

			<div class="catalog-category__pagination">
				<ui-pagination :total-cards="50" :cards-per-page="7"></ui-pagination>
			</div>
		</div>
	</the-section>
</template>

<script>
export default {
	props: {
		products: {
			type: Array,
			default: () => [],
		}
	}
}
</script>

<style lang="scss" scoped>
.catalog-category {
    &__wrap {
        display: grid;
        grid-template-columns: 250px 1fr;
		column-gap: 28px;
    }

    &__filter {
        display: grid;
        row-gap: 28px;
    }

	&__grid {
		position: relative;
	}

	&__pagination {
		grid-column: 1 / -1;
	}
}

@media screen and (max-width: 767px) {
	.catalog-category {
		&__wrap {
			grid-template-columns: 100%;
			row-gap: 28px;
		}

		&__filter {
			row-gap: 20px;
		}
	}
}
</style>
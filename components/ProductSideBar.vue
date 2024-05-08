<template>
	<aside class="product-sidebar">
		<product-info-list :info-list="sideInfoList" is-bold></product-info-list>

		<div class="product-sidebar__summary">
			<span v-for="(item, index) in summary" :key="index">{{ item }}</span>
		</div>

		<div class="product-sidebar__buttons">
			<div class="product-sidebar__btn-wrap">
				<ui-input-number></ui-input-number>
				<ui-button-like></ui-button-like>
			</div>
			<ui-button>Добавить в корзину</ui-button>
		</div>

		<div class="product-sidebar__delivery">
			<span v-for="(item, index) in delivery" :key="index">{{ item }}</span>
		</div>
	</aside>
</template>

<script>
export default {
	props: {
		sideInfoList: {
			type: Array,
			default: () => [],
		},
		summary: {
			type: Object,
			default: () => {},
		},
		delivery: {
			type: Object,
			default: () => {},
		},
	},
}
</script>

<style lang="scss" scoped>
.product-info-list {
	row-gap: 12px;
	padding: 0;
}

.product-sidebar {
	display: grid;
	row-gap: 24px;
	background-color: $white;
	box-shadow: 0 4px 20px rgba(40, 40, 40, 25%);
	border-radius: 10px;
	padding: 20px;

	&__buttons {
		display: grid;
		row-gap: 16px;
	}

	&__btn-wrap {
		display: flex;
		justify-content: space-between;
		column-gap: 20px;
	}

	&__summary {
		display: flex;
		justify-content: space-between;
		font-weight: 500;
		font-size: 26px;

		span:last-child {
			font-weight: 700;
		}
	}

	&__delivery {
		display: grid;
		row-gap: 8px;
		justify-content: center;
    	justify-items: center;

		span:first-child {
			font-size: 16px;
		}

		span:last-child {
			font-weight: 500;
			font-size: 20px;
		}
	}
}
</style>
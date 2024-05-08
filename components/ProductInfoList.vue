<template>
	<ul class="product-info-list">
		<li class="product-info-list__item" v-for="(item, index) in infoList" :key="index">
			<span>{{ item.key }}</span>
			<span :class="{bold: isBold}">{{ item.value }}</span>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		infoList: {
			type: Array,
			default: "",
		},
		isBold: {
			type: Boolean,
			default: false,
		}
	},
};
</script>

<style lang="scss" scoped>
.product-info-list {
	@include reset-list;
	display: grid;
	align-items: flex-start;
	align-content: flex-start;
	row-gap: 24px;
	padding: 20px 0;

	&__item {
		position: relative;
		display: flex;
		justify-content: space-between;
		// border-bottom: 1px dashed #9E9E9E;

		span {
			display: block;
			background-color: $white;
			z-index: 2;

			&.bold {
				font-weight: 700;
				font-size: 22px;
			}
		}

		&::before {
			position: absolute;
			content: '';
			left: 0;
			bottom: 4px;
			width: 100%;
			border-bottom: 1px dashed #9E9E9E;
			z-index: 1;
		}
	}
}
</style>
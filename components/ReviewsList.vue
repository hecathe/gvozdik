<template>
	<ul class="reviews-list">
		<li class="reviews-list__item" v-for="(reviewCard, index) in reviewsList" :key="index">
			<reviews-card :reviews-card="reviewCard"></reviews-card>
		</li>
		<li>
			<ui-pagination></ui-pagination>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		reviewsList: {
			type: Array,
			default: () => [],
		}
	}
}
</script>

<style lang="scss" scoped>
.reviews-list {
	display: grid;
	grid-template-columns: 100%;
	row-gap: 40px;
	@include reset-list;
}

.pagination {
	width: 100%;
	margin-top: 0;
}
</style>
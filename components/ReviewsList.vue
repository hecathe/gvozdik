<template>
	<ul class="reviews-list">
		<li class="reviews-list__item" v-for="(reviewsCard, index) in reviewsList" :key="index">
			<reviews-card :reviews-card="reviewsCard"></reviews-card>
		</li>
		<li>
			<ui-pagination :total-cards="20" :cards-per-page="3"></ui-pagination>
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
	},

	data() {
		return {
			currentPage: 1,
		}
	},
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
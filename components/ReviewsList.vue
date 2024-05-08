<template>
	<ul class="reviews-list">
		<li class="reviews-list__item" v-for="(reviewCard, index) in reviewsList" :key="index">
			<reviews-card :reviews-card="reviewCard"></reviews-card>
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
	min-width: 0;
	min-height: 0;
	display: grid;
	row-gap: 40px;
	@include reset-list;
}
</style>
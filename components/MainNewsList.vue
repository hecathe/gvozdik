<template>
	<ul class="main-news-list">
		<main-news-card class="main-news-list__item" v-for="(newsItem, index) in newsList" :key="index" :news-card="newsItem"></main-news-card>
	</ul>
</template>

<script>
export default {
	props: {
		newsList: {
			type: Array,
			default: () => [],
		}
	}
}
</script>

<style lang="scss" scoped>
.main-news-list {
	display: grid;
	row-gap: 40px;
	@include reset-list;
}

// @media screen and (max-width: 767px) {
// 	.main-news-list {

// 	}
// }
</style>
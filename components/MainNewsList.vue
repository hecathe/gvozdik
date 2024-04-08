<template>
	<ul class="main-news-list">
		<li class="main-news-list__item" v-for="(newsItem, index) in newsList" :key="index">
			<main-news-card :news-card="newsItem"></main-news-card>
		</li>
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
</style>
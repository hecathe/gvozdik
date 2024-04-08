<template>
	<the-section>
		<app-title link link-text="все новости">Новости компании</app-title>

		<main-news-list :news-list="newsList"></main-news-list>
	</the-section>
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
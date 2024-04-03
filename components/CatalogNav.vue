<template>
	<ul class="catalog-nav-list">
		<catalog-nav-item v-for="(item, index) in catalogNav" :key="index" :title="item.title" :img-url="item.url" :is-span="item.span"></catalog-nav-item>
	</ul>
</template>

<script>
export default {
	props: {
		catalogNav: {
			type: Array,
			default: () => [],
		}
	}
}
</script>

<style lang="scss" scoped>
.catalog-nav-list {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 20px;
	@include reset-list;
}
</style>
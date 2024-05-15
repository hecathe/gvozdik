<template>
	<ul class="accordion-list">
		<ui-accordion-list-item 
			v-for="(item, index) in accList" 
			:key="index" 
			:acc="item"
		></ui-accordion-list-item>
	</ul>
</template>

<script>
export default {
	props: {
		accList: {
			type: Array,
			default: () => [],
		}
	}
}
</script>

<style lang="scss" scoped>
.accordion-list {
	display: grid;
	row-gap: 20px;
	@include reset-list;
}
</style>
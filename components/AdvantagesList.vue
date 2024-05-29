<template>
	<ul class="advantages-list">
		<advantages-list-item 
			v-for="(item, index) in list" 
			:key="index" 
			:title="item.title" 
			:text="item.text"
			:img="item.img"
		></advantages-list-item>
	</ul>
</template>

<script>
export default {
	props: {
		list: {
			type: Array,
			default: () => [],
		},

	}
}
</script>

<style lang="scss" scoped>
.advantages-list {
	display: grid;
	grid-auto-flow: column;
	grid-template-rows: 1fr 1fr;
	gap: 60px;
	@include reset-list;
	margin-top: 60px;
}

@media screen and (max-width: 1279px) {
	.advantages-list {
		grid-template-rows: repeat(3, 1fr);
	}
}

@media screen and (max-width: 767px) {
	.advantages-list {
		grid-auto-flow: row;
		grid-template-columns: 1fr 1fr;
		gap: 28px;
	}
}
</style>
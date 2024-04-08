<template>
	<the-section class="main-accordion">
		<app-title>Частые вопросы</app-title>
		
		<ul class="main-accordion__list">
			<li class="main-accordion__item" v-for="(item, index) in accList" :key="index">
				<ui-accordion :acc="item"></ui-accordion>
			</li>
		</ul>
	</the-section>
</template>

<script>
export default {
	props: {
		accList: {
			type: Array,
			default: () => []
		}
	}
}
</script>

<style lang="scss" scoped>
.main-accordion {
	&__list {
		display: grid;
		row-gap: 20px;
		@include reset-list;
	}
}
</style>
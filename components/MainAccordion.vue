<template>
	<the-section class="main-accordion">
		<app-title>Частые вопросы</app-title>
		
		<ui-accordion-list :acc-list="accList"></ui-accordion-list>
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
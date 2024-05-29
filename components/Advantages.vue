<template>
	<the-section class="advantages">
		<h2 class="h2">{{ title }}</h2>

		<advantages-list :list="advantagesList"></advantages-list>
	</the-section>
</template>

<script>
export default {
	props: {
		advantagesList: {
			type: Array,
			default: () => [],
		},
		title: {
			type: String,
			default: '100+',
			required: true,
		},
	}
}
</script>
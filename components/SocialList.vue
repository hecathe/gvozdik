<template>
	<ul class="social-list">
		<li class="social-list__item" v-for="(item, index) in socialList" :key="index">
			<a class="social-list__link" :href="obj[1]" v-for="(obj, index) in Object.entries(item)" :key="index">
				<svg-icon :name="obj[0]" width="24" height="24"></svg-icon>
			</a>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		socialList: {
			type: Array,
			default: () => [],
		}
	}
}
</script>

<style lang="scss" scoped>
.social-list {
	display: flex;
	column-gap: 12px;
	@include reset-list;

	&__link {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		background-color: $mainOrange;
		border-radius: 100%;

		&:hover {
			background-color: $mainBlack;
		}
	}

	svg {
		--currentColor: #{$white};
	}
}
</style>
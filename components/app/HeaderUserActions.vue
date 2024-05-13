<template>
	<ul class="user-actions">
		<li class="user-actions__item" v-for="(item, index) in userActions" :key="index">
			<nuxt-link class="user-actions__link" :to="item.link">
				<svg-icon :name="item.name" width="24" height="24"></svg-icon>
			</nuxt-link>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		userActions: {
			type: Array,
			default: () => []
		}
	}
}
</script>

<style lang="scss" scoped>
.user-actions {
	display: flex;
	column-gap: 20px;

	@include reset-list;

	&__link {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 48px;
		height: 48px;

		&:hover {
			svg {
				--currentColor: #{$mainBlue};
			}
		}
	}
}
</style>
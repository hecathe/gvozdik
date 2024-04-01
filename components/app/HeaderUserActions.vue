<template>
	<ul class="user-actions">
		<li v-for="(item, index) in userActions" :key="index">
			<nuxt-link to="#">
				<svg-icon :name="item.name"></svg-icon>
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
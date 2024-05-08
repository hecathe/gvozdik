<template>
	<button class="button-like" @click="isAddedFav = !isAddedFav" :class="{checked: isAddedFav}">
		<svg-icon name="heart" width="40" height="40"></svg-icon>
	</button>
</template>

<script>
export default {
	data() {
		return {
			isAddedFav: false,
		}
	},
}
</script>

<style lang="scss" scoped>
.button-like {
	width: 54px;
	height: 54px;
	display: flex;
	justify-content: center;
	align-items: center;

	&.checked {
		svg {
			--currentColor: #{$mainRed};
		}
	}
}
</style>

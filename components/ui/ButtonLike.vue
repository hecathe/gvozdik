<template>
	<button class="button-like" @click="isAddedFav = !isAddedFav" :class="{checked: isAddedFav}">
		<svg-icon name="heart" :width="width" :height="height"></svg-icon>
	</button>
</template>

<script>
export default {
	props: {
		width: {
			type: Number,
			default: 40,
		},
		height: {
			type: Number,
			default: 40,
		},
	},

	data() {
		return {
			isAddedFav: false,
		}
	},
}
</script>

<style lang="scss" scoped>
.button-like {
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

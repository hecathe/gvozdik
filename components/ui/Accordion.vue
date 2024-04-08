<template>
	<div class="accordion">
		<button @click="isOpen = !isOpen" class="accordion__btn">
			<span>{{ acc.title }}</span>
			<svg-icon :name="isOpen ? 'remove-minus' : 'add-plus'" width="24" height="24"></svg-icon>
		</button>

		<transition>
			<div v-if="isOpen" class="accordion__content">
				<div v-html="acc.text"></div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		acc: {
			type: Object,
			default: () => {},
		}
	},

	data() {
		return {
			isOpen: false,
		}
	},
}
</script>

<style lang="scss" scoped>
.accordion {
	&__btn {
		width: 100%;
		display: flex;
		justify-content: space-between;
		font-weight: 500;
		background-color: $grey_m;
		padding: 20px;

		svg {
			--currentColor: #{$mainOrange};
		}
	}

	&__content {
		padding: 20px;
	}
}
</style>